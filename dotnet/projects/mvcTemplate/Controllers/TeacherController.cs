using Microsoft.AspNetCore.Mvc;
using mvc.Models;

namespace mvc.Controllers;

public class TeacherController : Controller
{
    private static List<Teacher> teachers = new()
        {
            new() { AdmissionDate = new DateTime(2021, 9, 1), Age = 20, Firstname = "John", Id = 1, Lastname = "Dupoint", Teach=Teach.CS},
            new() { AdmissionDate = new DateTime(2021, 9, 1), Age = 20, Firstname = "John", Id = 1, Lastname = "Dupoint", Teach=Teach.IT},
            new() { AdmissionDate = new DateTime(2021, 9, 1), Age = 20, Firstname = "John", Id = 1, Lastname = "Dupoint", Teach=Teach.MATHS},
            new() { AdmissionDate = new DateTime(2021, 9, 1), Age = 20, Firstname = "John", Id = 1, Lastname = "Dupoint", Teach=Teach.OTHERS},
        };

    public ActionResult Index()
    {
        return View(teachers);
    } 
}