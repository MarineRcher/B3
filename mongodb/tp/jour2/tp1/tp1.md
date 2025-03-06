# TP 1 : Indexation et optimisation des performances
## Insertion 1000 livres
Afin d'avoir le script, il faut regarder `genere_livres.js`
Le format est :
```json
{
    titre: titre,
    auteur: auteur,
    description: description,
    date_publication: date_publication,
    note_moyenne: note_moyenne, 
    langue: langue,
    genres: genres,
    ISBN: ISBN,
    prix: prix,
    disponible: disponible, 
    editeur: editeur,
    date_ajout: date
  }
```

## Insertion utilisateurs
Afin d'avoir le script, il faut regarder `genere_utilisateurs.js`
Le format est :
```json
{
    nom: nom,
    prenom: prenom,
    ville: ville,
}
```
## Tableau Comparatif des Performances

| Type de Requête | Métriques Sans Index | Métriques Avec Index |
|----------------|---------------------|---------------------|
| **Recherche par Titre** <br>`db.livres.find({titre: "Aat livré"}).explain("executionStats")` | - Temps d'exécution : 1 ms<br>- Documents examinés : 1000<br>- Type de scan : COLLSCAN | - Temps d'exécution : 1 ms<br>- Documents examinés : 1<br>- Type de scan : IXSCAN |
| **Recherche par Auteur** <br>`db.livres.find({ auteur: "Bernard Dumas" }).explain("executionStats")` | - Temps d'exécution : 0 ms<br>- Documents examinés : 1000<br>- Type de scan : COLLSCAN | - Temps d'exécution : 1 ms<br>- Documents examinés : 1<br>- Type de scan : IXSCAN |
| **Recherche par Plage de Prix et Note** <br>`db.livres.find({prix: {$gt: 10, $lt: 20}, note_moyenne: {$lt: 4}}).explain("executionStats")` | - Temps d'exécution : 0 ms<br>- Documents examinés : 1000<br>- Type de scan : COLLSCAN | - Temps d'exécution : 1 ms<br>- Documents examinés : 214<br>- Type de scan : IXSCAN |
| **Recherche par Genre et Langue avec Tri** <br>`db.livres.find({genres: "Aventure", langue: "Japonais"}).sort({note_moyenne: -1}).explain("executionStats")` | - Temps d'exécution : 1 ms<br>- Documents examinés : 1000<br>- Type de scan : COLLSCAN + SORT | - Temps d'exécution : 1 ms<br>- Documents examinés : 16<br>- Type de scan : IXSCAN |
| **Recherche Textuelle (Titre et Description)** | *Non applicable* | - Temps d'exécution : 0 ms<br>- Documents examinés : 1<br>- Type de scan : IXSCAN |

## Creation index
```js
db.livres.createIndex({ titre: 1 });
db.livres.createIndex({ auteur: 1 });
db.livres.createIndex({ prix: 1, note_moyenne: 1 });
db.livres.createIndex({ genres: 1, langue: 1, note_moyenne: -1 });
db.livres.createIndex({titre: "text", description: "text"});
```

## Sessions

Pour generer des sessions, on regarde `genere_sessions.js`.
Le format est :
```json
{
    userId: userId,
    dateActivite: date,
    donnees: {
      navigateur: navigateur,
      systemeExploitation: systemeExploitation,
      localisation: {
        pays: pays,
        ville: ville
      }
    },
}
```

Pour ajouter une expiration on ajoute 
```js
db.sessions_utilisateurs.createIndex(
  { "dateActivite": 1 }, 
  { expireAfterSeconds: 1800 }  
);
```
Avec `expireAfterSeconds` les sessions de plus de 1800 secondes (30 minutes) sont supprimes.

## Optimisations avancées

Créez un index qui permet d'obtenir une requête couverte (covered query). Vérifiez que la requête n'examine aucun document (totalDocsExamined = 0).
```js
db.livres.createIndex({ genres: 1, date_publication: 1 })

db.livres.find({ genres: "Aventure" },{ date_publication: 1, _id: 0 }).explain("executionStats")
```
```json
executionStats: {
  nReturned: 84,
  executionTimeMillis: 1,
  totalDocsExamined: 0,
  executionStages: {
    stage: 'PROJECTION_COVERED',
    inputStage: {
      stage: 'IXSCAN',
    }}}
```

Créez un index unique sur le champ ISBN des livres et testez son comportement en essayant d'insérer un document avec un ISBN dupliqué.
```js
db.livres.createIndex({ "ISBN": 1 }, { unique: true });
db.livres.insertOne({ISBN: "9785898439274"});
```

Reponse :
```shell
MongoServerError: E11000 duplicate key error collection: 
bibliotheque_amazon.livres index: ISBN_1 dup key: { ISBN: "9785898439274" }
```

Créez un index partiel qui n'indexe que les livres disponibles.
```js
db.livres.createIndex(
  { disponible: 1 },
  { partialFilterExpression: { actif: true } }
);
```

Activez le profiler MongoDB pour identifier les requêtes lentes (prenant plus de 100ms).

Identifiez et supprimez un index redondant ou peu utilisé.