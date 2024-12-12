using System;
using System.ComponentModel.DataAnnotations;

namespace mvc.Models;

public class LoginViewModel
{
    [Required(ErrorMessage = "Le mail est requis")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Un mot de passe est requis")]
    [DataType(DataType.Password)]
    public string Password { get; set; }

}