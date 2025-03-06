# TP 2 : Requêtes géospatiales
## Exercice 2.1 : Enrichissement des données
1. Modifiez le schéma de vos utilisateurs pour inclure des coordonnées géographiques dans leur adresse.
```js
db.utilisateurs.updateMany({villes: "Paris"}, {$unset: {villes}, $set : {adresse: { 
  rue: "rue de la paix", 
  ville: "Paris", 
  code_postal: "75000", 
  localisation: { 
    type: "Point", 
    coordinates: [2.349014, 48.864716]
  } 
} }});
db.utilisateurs.updateMany({villes: "Lyon"}, {$unset: {villes}, $set : {adresse: { 
  rue: "rue de fourviere", 
  ville: "Lyon", 
  code_postal: "69009", 
  localisation: { 
    type: "Point", 
    coordinates: [4.834277, 45.763420]
  } 
} }});
db.utilisateurs.updateMany({villes: "Marseille"}, {$unset: {villes}, $set : {adresse: { 
  rue: "rue du bateau", 
  ville: "Marseille", 
  code_postal: "13001", 
  localisation: { 
    type: "Point", 
    coordinates: [5.370000, 43.296398]
  } 
} }})
```

2. Créez une nouvelle collection bibliotheques avec au moins 3 bibliothèques dans différentes villes. Chaque document doit contenir : Un nom et une adresse, Des coordonnées GeoJSON Point pour la localisation, Une zone de service définie comme un polygone GeoJSON

```js
db.createCollection("bibliotheques");

db.bibliotheques.insertMany([
  {
    nom: "Bibliothèque Nationale de France",
    adresse: {
      rue: "Quai François Mauriac",
      ville: "Paris",
      code_postal: "75013",
      localisation : {
        type: "Point",
        coordinates: [2.376481, 48.830739]
      }
    },
    zone_service: {
      type: "Polygon",
      coordinates: [
        [
          [2.3, 48.8],  
          [2.4, 48.8],   
          [2.4, 48.9],  
          [2.3, 48.9],   
          [2.3, 48.8]    
        ]
      ]
    },
    capacite: 2000000,
    collections_specialisees: ["Littérature", "Histoire", "Arts"]
  },
  {
    nom: "Bibliothèque Municipale de Lyon",
    adresse: {
      rue: "Place des Célestins",
      ville: "Lyon",
      code_postal: "69002",
      localisation : {
        type: "Point", 
        coordinates: [4.831990, 45.767615]
      }
    },
    zone_service: {
      type: "Polygon",
      coordinates: [
        [
          [4.8, 45.7],   
          [4.9, 45.7],   
          [4.9, 45.8],   
          [4.8, 45.8],   
          [4.8, 45.7]   
        ]
      ]
    }
  },
  {
    nom: "Bibliothèque Municipale de Marseille",
    adresse: {
      rue: "Cours d'Estienne d'Orves",
      ville: "Marseille", 
      code_postal: "13001",
      localisation :{
        type: "Point",
        coordinates: [5.370320, 43.296140]
        }
    },
    zone_service: {
      type: "Polygon", 
      coordinates: [
        [
          [5.3, 43.2], 
          [5.4, 43.2],  
          [5.4, 43.3],   
          [5.3, 43.3],   
          [5.3, 43.2]    
        ]
      ]
    }
  }
]);
```

3. Créez les index géospatiaux nécessaires sur les collections utilisateurs et bibliotheques
```js
db.utilisateurs.createIndex({ "adresse.localisation": "2dsphere" });
db.bibliotheques.createIndex({ "adresse.localisation": "2dsphere" });
```

## Exercice 2.2 : Requêtes de proximité
1. Trouvez les 5 utilisateurs les plus proches d'un point donné (par exemple, le centre de Paris) dans un rayon de 5km.
```js
db.utilisateurs.find({
  "adresse.localisation": {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [2.349014, 48.864716]
      },
      $maxDistance: 5000
    }
  }
}).limit(5);

```

2. Trouvez les bibliothèques les plus proches d'un utilisateur spécifique.
```js
// Rechercher l'utilisateur Thomas
const utilisateur = db.utilisateurs.findOne({nom: "Thomas"});
  const bibliothequesProches = db.bibliotheques.find({
    "adresse.localisation": {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: utilisateur.adresse.localisation.coordinates
        },
      }
    }
  })
print(bibliothequesProches)
 
```

3. Utilisez l'opérateur $geoNear dans un pipeline d'agrégation pour obtenir les bibliothèques triées par distance et calculer précisément cette distance (en km).
```js

```

## Exercice 2.3 : Requêtes géospatiales avancées

1. Utilisez $geoWithin pour trouver tous les utilisateurs à l'intérieur d'une zone définie par un polygone (par exemple, un quartier de Paris).
```js
db.utilisateurs.find({
  localisation: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [[
          [2.3200, 48.8700], [2.3800, 48.8700],
          [2.3800, 48.8300], [2.3200, 48.8300],
          [2.3200, 48.8700]
        ]]
      }
    }
  }
})
```

2. Trouvez tous les utilisateurs qui se trouvent dans la zone de service d'une bibliothèque spécifique.
```js
zone_bibliotheque = db.bibliotheques.findOne({nom: "Bibliothèque Municipale de Lyon"})
db.utilisateurs.find({
  localisation: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: zone_bibliotheque.zone_service.coordinates
      }
    }
  }
})
```

3. Créez une collection rues avec au moins une rue représentée comme un LineString GeoJSON, puis utilisez $geoIntersects pour trouver les bibliothèques dont la zone de service intersecte cette rue.
```js
db.createCollection("rues");
db.rues.insertOne({
  rue: "Place Jean Mace",
  geometry: {
        coordinates: [
          [
            4.8420938307374115,
            45.74663552527747
          ],
          [
            4.84161141348369,
            45.745711073812686
          ]
        ],
        type: "LineString"
      }
});
rue = db.rues.findOne();
db.bibliotheques.find({
  zone: {
    $geoIntersects: {
      $geometry: {
        type: "LineString",
        coordinates: 
          rue.geometry.coordinates
        
      }
    }
  }
})
```

## Exercice 2.4 : Cas d'utilisation métier

1. Créez une collection livraisons pour suivre les livraisons de livres, avec : Des références vers les livres et les utilisateurs, Un point de départ (bibliothèque) et un point d'arrivée (adresse utilisateur), Une position actuelle du livreur (Point GeoJSON), Un itinéraire planifié (LineString GeoJSON)
```js
db.createCollection("livraisons");
db.livraisons.insertMany([
  {livre: ObjectId("l1")}
])
```

2. Implémentez une fonction pour mettre à jour la position d'une livraison.

3. Créez une requête pour trouver toutes les livraisons en cours dans un rayon de 1km autour d'un point
donné.