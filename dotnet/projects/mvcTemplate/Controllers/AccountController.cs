using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using mvc.Models;
public class AccountController : Controller
{
    private readonly SignInManager<Teacher> _signInManager;
    private readonly UserManager<Teacher> _userManager;

    
    public AccountController(SignInManager<Teacher> signInManager, UserManager<Teacher> userManager)
    {
        _signInManager = signInManager;
        _userManager = userManager;
    }
    
    [HttpPost]
    public async Task<IActionResult> Logout()
    {
        await _signInManager.SignOutAsync();
        return RedirectToAction("Index", "Home");
    }


    [HttpGet]
    public IActionResult SignIn()
    {
        return View();
    }

    [HttpPost]
    public async  Task<IActionResult> SignIn(AccountViewModel model)
    {
        var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, isPersistent: false, lockoutOnFailure:true);
        if (result.Succeeded)
        {
            TempData["SuccessMessage"] = "Vous vous êtes connecté avec succès !";
            return RedirectToAction("Index", "Home");
        } 
        else
        {
            ModelState.AddModelError(string.Empty, "Identifiants incorrect");
        }
        return View(model);

    }

    [HttpGet]
    public IActionResult Register()
    {
        return View();
    }
    [HttpPost]
    public async Task<IActionResult> Register(AccountViewModel model)
    {
        if (!ModelState.IsValid)
        {
            return View(model);
        }
        var user = new Teacher
        {
            UserName = model.Email,
            Email = model.Email,
            Firstname = model.Firstname,
            Lastname = model.Lastname,
            Age = model.Age,
            AdmissionDate = model.AdmissionDate,
            PersonalWebSite = model.PersonalWebSite
        };
        var result = await _userManager.CreateAsync(user, model.Password);
        if (result.Succeeded)
        {
            await _signInManager.SignInAsync(user, isPersistent: false);
            TempData["SuccessMessage"] = "Votre compte a été créé avec succès !";
            return RedirectToAction("Index", "Home");
        }
        foreach (var error in result.Errors)
        {
            ModelState.AddModelError(string.Empty, error.Description);
        }
        return View(model);
    }
}