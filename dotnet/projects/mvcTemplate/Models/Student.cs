
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace mvc.Models;
public enum Major
{
    CS, IT, MATHS, OTHERS
}
public class Student : IdentityUser
{
    public int Id{get; set;}

    [Required(ErrorMessage = "Le nom est obligatoire")]
    [StringLength(50, MinimumLength = 2, ErrorMessage = "Le nom doit comporter entre 2 et 50 caractères")]
    [Display(Name ="Prenom")]
    public string Firstname { get; set;}
    [Required(ErrorMessage = "Le nom est obligatoire")]
    [StringLength(50, MinimumLength = 2, ErrorMessage = "Le nom doit comporter entre 2 et 50 caractères")]
    [Display(Name ="Nom de famille")]
    public string Lastname { get; set;}

    [Range(18, 99, ErrorMessage = "L'âge doit être compris entre 18 et 99")]
    [Display(Name ="Age")]
    public int Age { get; set;}
    [Required(ErrorMessage = "La Date d'admission est obligatoire")]
    [Display(Name ="Date d'admission")]
    public DateTime AdmissionDate { get;set;}
    [Display(Name = "Moyenne")]
    public double GPA { get;set;}
    [Required(ErrorMessage = "La spécialité est obligatoire")]
    [Display(Name = "Domaine d'étude")]
    public Major Major { get;set;}

    public string? PersonalWebSite { get; set; }
    
}