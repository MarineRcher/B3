using Microsoft.AspNetCore.Mvc;
using mvc.Models;

namespace mvc.Controllers;

public class StudentController : Controller
{
    private static List<Student> students = new()
    {
        new() { AdmissionDate = new DateTime(2021, 9, 1), Age = 20, Firstname = "John", GPA = 3.5, Id = 1, Lastname = "Doe", Major = Major.CS },
        new() { AdmissionDate = new DateTime(2021, 9, 1), Age = 20, Firstname = "John", GPA = 3.5, Id = 1, Lastname = "Doe", Major = Major.CS },
        new() { AdmissionDate = new DateTime(2021, 9, 1), Age = 20, Firstname = "John", GPA = 3.5, Id = 1, Lastname = "Doe", Major = Major.CS },
        new() { AdmissionDate = new DateTime(2021, 9, 1), Age = 20, Firstname = "John", GPA = 3.5, Id = 1, Lastname = "Doe", Major = Major.CS },
    };

    public ActionResult Index()
    {
        return View(students);
    } 

    public IActionResult ShowDetails(int id)
    {
        var student = students.FirstOrDefault(e => e.Id == id);
        if (student == null)
        {
            return NotFound();
        }
        return View(student);
    }

    public IActionResult Add()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Add(Student student)
    {
        if (ModelState.IsValid)
        {
            student.Id = students.Max(e => e.Id) + 1;
            students.Add(student);
            return RedirectToAction(nameof(Index));
        }
        return View(student);
    }
        public IActionResult Delete(int id)
    {
        var student = students.FirstOrDefault(e => e.Id == id);
        if (student == null)
        {
            return NotFound();
        }
        return View(student);
    }

    [HttpPost, ActionName("Delete")]
    public IActionResult DeleteConfirmed(int id)
    {
        var student = students.FirstOrDefault(e => e.Id == id);
        if (student != null)
        {
            students.Remove(student);
        }
        return RedirectToAction(nameof(Index));
    }
}