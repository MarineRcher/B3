
namespace mvc.Models;

public enum Teach
{
    CS, IT, MATHS, OTHERS
}
public class Teacher
{
    // variables des instances
    public int Id{get; set;}
    public string Firstname { get; set;}
    public string Lastname { get; set;}
    public int Age { get; set;}

    public Teach Teach {get; set;}
    public DateTime AdmissionDate { get;set;}
}