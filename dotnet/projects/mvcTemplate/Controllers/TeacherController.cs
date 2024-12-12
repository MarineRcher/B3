using Microsoft.AspNetCore.Mvc;
using mvc.Models;

namespace mvc.Controllers;

using Microsoft.AspNetCore.Authorization;
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
}