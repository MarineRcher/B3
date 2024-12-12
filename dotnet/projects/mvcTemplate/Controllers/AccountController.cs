using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mvc.Models;
public class AccountController : Controller
{
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly UserManager<IdentityUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;

    public AccountController(
        SignInManager<IdentityUser> signInManager, 
        UserManager<IdentityUser> userManager, 
        RoleManager<IdentityRole> roleManager)
    {
        _signInManager = signInManager;
        _userManager = userManager;
        _roleManager = roleManager;
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
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null)
        {
            TempData["errorMessage"] =  "Utilisateur non trouvé";
            return View(model);
        } 
        var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, isPersistent: false, lockoutOnFailure:true);
        if (result.Succeeded)
        {
            var userRole = await _userManager.GetRolesAsync(user);
            if (userRole.Any())
            {
                HttpContext.Session.SetString("UserRole", string.Join(",", userRole));
                TempData["SuccessMessage"] = "Vous vous êtes connecté avec succès !";
                return RedirectToAction("Index", "Home");
            } else {
                return View(model);
            }
        } 
        else
        {
            TempData["ErrorMessage"]="Identifiants incorrect";
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
        await EnsureRolesExist();
        if (model.UserType == UserType.Teacher)
        {
            var teacher = new Teacher
            {
                UserName = model.Email,
                Email = model.Email,
                Firstname = model.Firstname,
                Lastname = model.Lastname,
                Age = model.Age,
                AdmissionDate = model.AdmissionDate,
                PersonalWebSite = model.PersonalWebSite
            };
            var result = await _userManager.CreateAsync(teacher, model.Password);
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(teacher, "Teacher");
                await _signInManager.SignInAsync(teacher, isPersistent: false);
                TempData["SuccessMessage"] = "Votre compte a été créé avec succès !";
                return RedirectToAction("Index", "Home");
            }
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }
        else if (model.UserType == UserType.Student)
        {
            var student = new Student
            {
                UserName = model.Email,
                Email = model.Email,
                Firstname = model.Firstname,
                Lastname = model.Lastname,
                Age = model.Age,
                AdmissionDate = model.AdmissionDate,
                PersonalWebSite = model.PersonalWebSite,
                Major = model.Major,
            };
            var studentResult = await _userManager.CreateAsync(student, model.Password);
            if (studentResult.Succeeded)
            {
                await _userManager.AddToRoleAsync(student, "Student");
                await _signInManager.SignInAsync(student, isPersistent: false);
                TempData["SuccessMessage"] = "Votre compte étudiant a été créé avec succès !";
                return RedirectToAction("Index", "Home");
            }
            foreach (var error in studentResult.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }

        }
        return View(model);
    }
    private async Task EnsureRolesExist()
    {
        string[] roleNames = { "Teacher", "Student" };

        foreach (var roleName in roleNames)
        {
            var roleExist = await _roleManager.RoleExistsAsync(roleName);
            if (!roleExist)
            {
                await _roleManager.CreateAsync(new IdentityRole(roleName));
            }
        }
    }

}