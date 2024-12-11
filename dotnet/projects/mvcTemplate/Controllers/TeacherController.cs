using Microsoft.AspNetCore.Mvc;
using mvc.Models;

namespace mvc.Controllers;
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
        var teacher = _context.Teachers.FirstOrDefault(e => e.Id == id);
        if (teacher == null)
        {
            return NotFound();
        }
        return View(teacher);
    } 
    public IActionResult Add()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Add(Teacher teacher)
    {
         if (!ModelState.IsValid)
        {
            return View();
        }
        
        _context.Teachers.Add(teacher);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }
        public IActionResult Delete(string id)
    {
        var teacher = _context.Teachers.FirstOrDefault(e => e.Id == id);
        if (teacher == null)
        {
            return NotFound();
        }
        return View(teacher);
    }

    [HttpPost, ActionName("Delete")]
    public IActionResult DeleteConfirmed(string id)
    {
        var teacher = _context.Teachers.FirstOrDefault(e => e.Id == id);
        if (teacher != null)
        {
            _context.Teachers.Remove(teacher);
            _context.SaveChanges();
            
        }
        return RedirectToAction(nameof(Index));
    }
}