using Microsoft.EntityFrameworkCore;
using mvc.Models;
namespace mvc.Data;

// classe qui definit les tables de la bdd

public class ApplicationDbContext : DbContext
{
    public DbSet<Teacher> Teachers {get; set;}

    public DbSet<Student> Students {get; set;}

    //constructeur

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
}