using Microsoft.AspNetCore.Mvc;
using mvc.Models;

namespace mvc.Controllers;

using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using mvc.Data;

public class TeacherController : Controller
{
    private readonly ApplicationDbContext _context;

    // Constructeur
    public TeacherController(ApplicationDbContext context)
    {
        _context = context;
    }
    public ActionResult Index()
    {
        var userRole = HttpContext.Session.GetString("UserRole");
        ViewBag.UserRole = userRole;
        var teachers = _context.Teachers.ToList();
        return View(teachers);
    }
    public IActionResult ShowDetails(string id)
    {
        var userRole = HttpContext.Session.GetString("UserRole");
        ViewBag.UserRole = userRole;
        var teacher = _context.Teachers.FirstOrDefault(e => e.Id == id);
        if (teacher == null)
        {
            return NotFound();
        }
        return View(teacher);
    } 
  

    [HttpPost, ActionName("Delete"), Authorize]
    public IActionResult DeleteConfirmed(string id)
    {
        var teacher = _context.Teachers.FirstOrDefault(e => e.Id == id);
        if (teacher != null)
        {
            TempData["SuccessMessage"] = "Le professeur a été supprimé avec succès !";
            _context.Teachers.Remove(teacher);
            _context.SaveChanges();
            
        }
        return RedirectToAction(nameof(Index));
    }
     public IActionResult Edit(string id)
    {
        
        var teacherToUpdate = _context.Teachers.FirstOrDefault(e => e.Id == id);
        if (teacherToUpdate == null)
        {
            return NotFound();
        }
        return View(teacherToUpdate);
    }
    [HttpPost, Authorize]
    public async Task<IActionResult> Edit(Student updatedTeacher)
    {
        if (!ModelState.IsValid)
        {
            return View(updatedTeacher);
        }

        try 
        {
            var existingTeacher = await _context.Teachers
                .FirstOrDefaultAsync(s => s.Id == updatedTeacher.Id);

            if (existingTeacher == null)
            {
                return NotFound();
            }

            existingTeacher.Firstname = updatedTeacher.Firstname;
            existingTeacher.Lastname = updatedTeacher.Lastname;
            existingTeacher.Age = updatedTeacher.Age;
            existingTeacher.AdmissionDate = updatedTeacher.AdmissionDate;
            existingTeacher.Major = updatedTeacher.Major;
            existingTeacher.PersonalWebSite = updatedTeacher.PersonalWebSite;

            _context.Teachers.Update(existingTeacher);
            
            await _context.SaveChangesAsync();

            TempData["SuccessMessage"] = "Le professeur a été modifié avec succès !";
            return RedirectToAction(nameof(Index));
        }
        catch (DbUpdateConcurrencyException)
        {
            ModelState.AddModelError(string.Empty, "Un conflit est survenu lors de la mise à jour.");
            return View(updatedTeacher);
        }
    }      
}