# Dotnet

Framwork base sur c# pour creer une app

## Architecture

mvc.csproj : Configuration projet
Program.cs : Point d'entre

## Nomenclature

1 class : dans un fichier avec le meme nom et utilise CamelCase

## namespace

Import code source plus facile

ont nomme l'espace avec namespace, et ont import avec using

## methode

Ce sont des actions associe

## Controller

Renvoi requete avec view

## rooting

Pour creer root :

-   Dans Views > Home > fichier .cshtml qui porte le meme nom que la methode dans HomeController

exemple avec Privacy :

-   Accede via Home/Privacy
-   Dans Views/Home/ on a Privacy.cshtml
-   Dans HomeController on a :

```c#
public IActionResult Privacy()
    {
        return View();
    }
```
