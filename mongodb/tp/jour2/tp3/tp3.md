# TP 3 : Framework d'agrégation
## Exercice 3.1 : Agrégations de base

1. Créez un pipeline d'agrégation pour calculer les statistiques suivantes par genre de livre :
Nombre de livres
Note moyenne
Prix moyen, minimum et maximum
```js
db.livres.aggregate([
  {
    $unwind: "$genres"},
    {$group: {
      _id: "$genres",
      
      Nombre_livres: { $sum: 1 },
      note_moyenne: { $avg: "$note_moyenne" },
      prix_moyen: { $avg: "$prix" },
      prix_min: { $min: "$prix" },
      prix_max: { $max: "$prix" }
    }}
  
])
```
J'ai dans un premier temps diviser le tableau genres par genre unique, puis pour chaque genre, on compte le nombre de livres avec `$sum`, la moyenne avec `$avg`..

2. Analysez la répartition des livres par éditeur :
Nombre de livres
Nombre de genres différents
Nombre d'auteurs différents
Note moyenne
```js
db.livres.aggregate([
    {
        $group: {
            _id: "$editeur",
            nombre_livres: {$sum: 1},
            nombre_genres : {$addToSet: "$genre"},
            Nombre_auteurs: {$sum: 1},
            note_moyenne: {$avg: "$note_moyenne"}
        }
    },
    {
        $project:{
            nombre_livres: 1,
            nombre_genres : {$size: "$nombre_genres"},
            Nombre_auteurs: 1,
            note_moyenne: 1
        }
    }
])
```
3. Enrichissez votre collection d'utilisateurs avec des données d'emprunt si ce n'est pas déjà fait, puis créez un pipeline d'agrégation pour analyser les habitudes d'emprunt par ville d'utilisateur
```js
db.emprunts.aggregate([
    {
        $lookup: {
            from: "utilisateurs",
            localField: "utilisateur_id",
            foreignField: "_id",
            as: "utilisateur"
        }
    },
    {
        $unwind: "$utilisateur"
    },
    {
        $group: {
            _id: "$utilisateur.ville",
            nombre_emprunts: { $sum: 1 },
        }
    },
    {
        $project: {
            nombre_emprunts: 1,
        }
    }
])
```

## Exercice 3.2 : Agrégations avancées
1. Analysez les durées d'emprunt en calculant :
La durée moyenne de prêt
Les durées minimale et maximale
```js
db.emprunts.aggregate([
    {
        
    }
       
])
```
Le pourcentage d'emprunts retournés en retard

2. Utilisez l'opérateur $lookup pour joindre les collections livres et utilisateurs afin d'analyser quels livres sont les plus empruntés et par qui.
```js
 {
        $lookup: {
            from: "utilisateurs",
            localField: "utilisateur_id",
            foreignField: "_id",
            as: "utilisateur"
        }
    },
    {
        $unwind: "$utilisateur"
    },
    {
        $lookup: {
            from: "livres",
            localField: "livre_id",
            foreignField: "_id",
            as: "livre"
        }
    },
    {
        $unwind: "$livre"
    },
    {
        $group: {
            _id: : "$utilisateur"
            nombre_emprunts: { $sum: 1 },
            livres_empruntes: { $addToSet: "$livre" },
        }
    },
```
3. Utilisez l'opérateur $facet pour créer un tableau de bord complet avec plusieurs analyses en un seul pipeline :
Statistiques globales (nombre total de livres, prix moyen, note moyenne)
Top 5 des livres les mieux notés
Répartition par langue
Répartition par décennie de publication

## Exercice 3.3 : Cas d'usage métier

1. Créez un système de recommandation basique qui suggère des livres à un utilisateur en fonction des
genres qu'il a déjà empruntés.
2. Analysez les tendances d'emprunt par mois ou par saison pour identifier les périodes de forte
activité.
3. Identifiez les livres jamais empruntés et depuis combien de temps ils sont en stock.

## Exercice 3.4 : Optimisations et performances
1. Créez une vue (view) MongoDB pour une de vos agrégations fréquemment utilisées.
2. Analysez les performances d'une de vos agrégations avec explain() et identifiez les étapes qui
pourraient bénéficier d'un index.
3. Utilisez l'option allowDiskUse: true pour une agrégation complexe qui traite un grand volume de
données