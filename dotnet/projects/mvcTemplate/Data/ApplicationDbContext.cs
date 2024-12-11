using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using mvc.Models;
namespace mvc.Data;

// classe qui definit les tables de la bdd

public class ApplicationDbContext : IdentityDbContext<Teacher>
{
    public DbSet<Teacher> Teachers {get; set;}

    public DbSet<Student> Students {get; set;}

    //constructeur

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
}