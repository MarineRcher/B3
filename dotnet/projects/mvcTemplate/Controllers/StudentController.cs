using Microsoft.AspNetCore.Mvc;
using mvc.Models;
using mvc.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Data;
using Microsoft.AspNetCore.Identity;
namespace mvc.Controllers;

public class StudentController : Controller
{
    private readonly ApplicationDbContext _context;
    public StudentController(ApplicationDbContext context)
    {
        _context = context;
    
    }
    public ActionResult Index()
    {
        
        var userRole = HttpContext.Session.GetString("UserRole");
        ViewBag.UserRole = userRole;
        var students = _context.Students.ToList();
        return View(students);

    } 

    public IActionResult ShowDetails(string id)
    {
        var userRole = HttpContext.Session.GetString("UserRole");
        ViewBag.UserRole = userRole;
        var student = _context.Students.FirstOrDefault(e => e.Id == id);
        if (student == null)
        {
            return NotFound();
        }
        return View(student);
    }

 

  
    public IActionResult Delete(string id)
    {
        var student = _context.Students.FirstOrDefault(e => e.Id == id);
        if (student == null)
        {
            return NotFound();
        }
        return View(student);
    }

    [HttpPost, ActionName("Delete"), Authorize]
    public IActionResult DeleteConfirmed(string id)
    {
        var student = _context.Students.FirstOrDefault(e => e.Id == id);
        if (student != null)
        {
            _context.Students.Remove(student);
            _context.SaveChanges();
        }
        TempData["SuccessMessage"] = "L'étudiant a été supprimé avec succès !";
        return RedirectToAction(nameof(Index));
    }

    public IActionResult Edit(string id)
    {
        
        var studentToUpdate = _context.Students.FirstOrDefault(e => e.Id == id);
        if (studentToUpdate == null)
        {
            return NotFound();
        }
        return View(studentToUpdate);
    }
    [HttpPost, Authorize]
public async Task<IActionResult> Edit(Student updatedStudent)
{
    if (!ModelState.IsValid)
    {
        return View(updatedStudent);
    }

    try 
    {
        var existingStudent = await _context.Students
            .FirstOrDefaultAsync(s => s.Id == updatedStudent.Id);

        if (existingStudent == null)
        {
            return NotFound();
        }

        existingStudent.Firstname = updatedStudent.Firstname;
        existingStudent.Lastname = updatedStudent.Lastname;
        existingStudent.Age = updatedStudent.Age;
        existingStudent.AdmissionDate = updatedStudent.AdmissionDate;
        existingStudent.GPA = updatedStudent.GPA;
        existingStudent.Major = updatedStudent.Major;
        existingStudent.PersonalWebSite = updatedStudent.PersonalWebSite;

        _context.Students.Update(existingStudent);
        
        await _context.SaveChangesAsync();

        TempData["SuccessMessage"] = "L'étudiant a été modifié avec succès !";
        return RedirectToAction(nameof(Index));
    }
    catch (DbUpdateConcurrencyException)
    {
        ModelState.AddModelError(string.Empty, "Un conflit est survenu lors de la mise à jour.");
        return View(updatedStudent);
    }
}
}