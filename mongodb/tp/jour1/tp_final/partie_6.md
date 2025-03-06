## Partie 6
### 6.1 Modèle embarqué vs référence

1. Créez une nouvelle collection `emprunts` qui utilise des références vers les livres et les utilisateurs
```js
db.createCollection("emprunts");
```
2. Insérez au moins 3 emprunts dans cette collection
```js
db.emprunt.insertMany([
    {
        utilisateur_id: ObjectId("67c6d3463fcd1b257451e954"),
        livre_id: ObjectId("67c6d2883fcd1b257451e951"),
        date_emprunt: new Date("2023-02-20"),
        date_retour_prevue: new Date("2023-03-20"),
        date_retour_effective: null,
        statut: "en cours",
    },
    {
        utilisateur_id: ObjectId("67c6d3463fcd1b257451e954"),
        livre_id: ObjectId("67c6d2883fcd1b257451e950"),
        date_emprunt: new Date("2023-01-20"),
        date_retour_prevue: new Date("2023-02-20"),
        date_retour_effective: null,
        statut: "retourné",
    },
    {
        utilisateur_id: ObjectId("67c6d3463fcd1b257451e952"),
        livre_id: ObjectId("67c6d2883fcd1b257451e950"),
        date_emprunt: new Date("2023-01-20"),
        date_retour_prevue: new Date("2023-02-20"),
        date_retour_effective: null,
        statut: "en retard",
    },
]);
```


3. Comparez cette approche avec celle où les emprunts sont directement intégrés dans le document utilisateur

Cette approche est flexible, si on change le titre du livre par exemple, on n'aura pas à le changer dans livres_empruntes des utilisateurs.

### 6.2 Réflexion sur la modélisation

2. Quels sont les avantages et inconvénients de chaque approche ?

Approche avec emprunts dans les utilisateurs :
- Qvantages : 
L'accès aux livres empruntés plus rapide avec une requête plus simple.
- Inconvénients : 
Peu flexible (Si le titre est modifié, il faut le changer dans 2 champs.)

Pour des requêtes sur l'ensemble des emprunts, cela devient vite une contrainte
Approche avec les références :
- Avantages : 
pas de duplication de données 
meilleure modélisation
plus simple de faire des
requetes sur l'ensemble des emprunts
- Inconvénients : 
requêtes plus complexes

3. Quelle approche privilégieriez-vous pour une application réelle et pourquoi ?
On va privilégier l'approche avec les références, car c'est mieux maintenable, plus facile d'accès à l'ensemble des données, que ce soit pour envoyer un mail aux emprunts en retard ou récupère le nombre de livres empruntés dans le mois.

4. Comment modéliseriez-vous les cas où un même livre peut exister en plusieurs exemplaires ?
On va faire comme emprunts, en créant une nouvelle collection avec pour référence le livre on ajoute des champs comme disponible, son état, son emplacement. Ensuite, dans la collection emprunt, on change l'objet du livre par celui de l'exemplaire.
