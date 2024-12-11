

using System.ComponentModel.DataAnnotations;

namespace mvc.Models;

public class AccountViewModel
{
    [Required(ErrorMessage = "L'email est obligatoire")]
    [EmailAddress(ErrorMessage = "Format d'email invalide")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Le mot de passe est obligatoire")]
    [DataType(DataType.Password)]
    [StringLength(100, ErrorMessage = "Le mot de passe doit avoir au moins 6 caractères", MinimumLength = 6)]
    public string Password { get; set; }

    [DataType(DataType.Password)]
    [Compare("Password", ErrorMessage = "Les mots de passe ne correspondent pas")]
    public string ConfirmedPassword { get; set; }
    public string Firstname { get; set; }
    public string Lastname { get; set; }

    public int Age { get; set;}

    public Teach Teach {get; set;}
    public string PersonalWebSite { get; set; }

    public DateTime AdmissionDate { get;set;}
}
