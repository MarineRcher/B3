### templates

```bash
dotnet new list
```

### Init projet

```bash
dotnet new <template>
```

```bash
dotnet new mvc -n mvc -o mvcTemplate
```

### Build projet

```bash
dotnet build
```

### run projet

```bash
dotnet run
```

### mode debug

```bash
dotnet run --configuration Debug
```

### package connexion db mariadb

```bash
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 9.0.0-preview.1
dotnet add package Microsoft.EntityFrameworkCore.Design --version 9.0.0
```

### dotnet ef

```bash
export PATH="$PATH:/home/marine/.dotnet/tools"
```

Créer une migration

```bash
dotnet ef migrations add NomMigration
```

Appliquer une migration

```bash
dotnet ef database update
```
