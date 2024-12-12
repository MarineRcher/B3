# Projet etudiants / professeurs
## Installer 

Installer dotnet 8.
`https://dotnet.microsoft.com/fr-fr/download/dotnet/8.0`

Installer les packages, en ce mettant à la racine du projet.
```bash
dotnet build
```

# Lancer le projet 
Dans `/mvcTemplate`, lancer la commande en ayant docker d'installé et lancé :
```bash
docker-compose up -d
```

Faire les migrations avec dotnet ef
```bash
dotnet ef database update
```

Lancer le projet avec 
```bash
dotnet run
```
Enfin, ont peut y acceder depuis l'adresse `http://localhost:5077`.

## Interface
Il faut s'inscrire en tant que Teacher pour avoir tous les droits et ajoutes plusieurs utilisateurs afin de manipuler l'interface.

Les professeurs peuvent :
- Voir, ajouter, modifier, supprimer un évennement
- Voir, ajouter, modifier, supprimer un étudiant
- Voir, ajouter, modifier, supprimer un professeur

Les étudiant peuvent :
- Voir un évennement
- Voir, ajouter un étudiant
- Voir, ajouter un professeur

## Diagramme de classes

```mermaid
classDiagram
    class IdentityUser {
        <<abstract>>
    }
    
    class Student {
        +int Id
        +string Firstname
        +string Lastname
        +int Age
        +DateTime AdmissionDate
        +double? GPA
        +Major Major
        +string? PersonalWebSite
    }
    
    class Teacher {
        +string Firstname
        +string Lastname
        +int Age
        +DateTime AdmissionDate
        +Major Major
        +string? PersonalWebSite
    }
    
    class Event {
        +int Id
        +string Title
        +string Description
        +DateTime EventDate
        +int MaxParticipants
        +string Location
        +DateTime CreatedAt
    }
    
    class Major {
        <<enumeration>>
        CS
        IT
        MATHS
        OTHERS
    }
    
    class UserType {
        <<enumeration>>
        Student
        Teacher
    }
    
    class AccountViewModel {
        +string Email
        +string Password
        +string ConfirmedPassword
        +string Firstname
        +string Lastname
        +UserType UserType
        +int Age
        +Major Major
        +DateTime AdmissionDate
        +string? PersonalWebSite
    }
    
    class LoginViewModel {
        +string Email
        +string Password
    }
    
    class ApplicationDbContext {
        +DbSet~Teacher~ Teachers
        +DbSet~Student~ Students
        +DbSet~Event~ Events
    }
    
    IdentityUser <|-- Student : hérite
    IdentityUser <|-- Teacher : hérite
    Student "0..*" -- "0..*" Event : peut participer
    Teacher "0..*" -- "0..*" Event : peut organiser
    Student ..> Major : utilise
    Teacher ..> Major : utilise
    AccountViewModel ..> UserType : utilise
    AccountViewModel ..> Major : utilise
    ApplicationDbContext --> Student : contient
    ApplicationDbContext --> Teacher : contient
    ApplicationDbContext --> Event : contient
```