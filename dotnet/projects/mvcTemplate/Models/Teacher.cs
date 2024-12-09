
namespace mvc.Models;

public enum Teach
{
    CS, IT, MATHS, OTHERS
}
public class Teacher : Person
{
    public Teach Teach {get; set;}
}