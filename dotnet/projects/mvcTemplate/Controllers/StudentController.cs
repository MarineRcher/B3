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
        
        var students = _context.Students.ToList();
        return View(students);

    } 

    public IActionResult ShowDetails(int id)
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

 

  
    public IActionResult Delete(int id)
    {
        var student = _context.Students.FirstOrDefault(e => e.Id == id);
        if (student == null)
        {
            return NotFound();
        }
        return View(student);
    }

    [HttpPost, ActionName("Delete"), Authorize]
    public IActionResult DeleteConfirmed(int id)
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
}