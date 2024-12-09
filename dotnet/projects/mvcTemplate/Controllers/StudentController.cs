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
        var student = new Student();
        student.Firstname = "Jean";
        student.Lastname = "Dupont";
        student.Age = 20;
        student.GPA = 11.5;
        student.Major = Major.CS;
        student.AdmissionDate = new DateTime(2024, 1, 1);
        return View(students);
    } 
}