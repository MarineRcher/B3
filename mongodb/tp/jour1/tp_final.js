//Partie 1
//  Creer bdd
// use bibliotheque_amazon

// Ajout livres
db.createCollection("livres");

db.livres.insertMany([
    {
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        annee_publication: 1943,
        editeur: "Gallimard",
        genre: ["Conte", "Philosophie"],
        nombre_pages: 96,
        langue: "Français",
        disponible: true,
        stock: 3,
        note_moyenne: 4.8,
        description:
            "Un pilote d'avion, qui s'est écrasé dans le désert du Sahara, rencontre un jeune prince venu d'une autre planète...",
        prix: 7.5,
        isbn: "9782070612758",
        date_ajout: new Date("2023-01-15"),
    },
    {
        titre: "L'Étranger",
        auteur: "Albert Camus",
        annee_publication: 1942,
        editeur: "Gallimard",
        genre: ["Roman", "Philosophie", "Absurde"],
        nombre_pages: 184,
        langue: "Français",
        disponible: false,
        stock: 0,
        note_moyenne: 4.6,
        description:
            "Condamné à mort, Meursault raconte son histoire avec un détachement qui frappe le lecteur. Un roman qui explore l'absurdité de la condition humaine.",
        prix: 6.9,
        isbn: "9782070360024",
        date_ajout: new Date("2023-02-10"),
    },
    {
        titre: "Voyage au bout de la nuit",
        auteur: "Louis-Ferdinand Céline",
        annee_publication: 1932,
        editeur: "Gallimard",
        genre: ["Roman", "Autobiographie"],
        nombre_pages: 624,
        langue: "Français",
        disponible: false,
        stock: 0,
        note_moyenne: 1.5,
        description:
            "Ferdinand Bardamu s'engage dans l'armée pendant la Première Guerre mondiale et découvre l'horreur des combats. Il poursuit ensuite son voyage en Afrique puis aux États-Unis.",
        prix: 9.9,
        isbn: "9782070360284",
        date_ajout: new Date("2023-01-27"),
    },
    {
        titre: "Les Misérables",
        auteur: "Victor Hugo",
        annee_publication: 1862,
        editeur: "Albert Lacroix et Cie",
        genre: ["Roman historique", "Drame social"],
        nombre_pages: 1900,
        langue: "Français",
        disponible: false,
        stock: 0,
        note_moyenne: 4.9,
        description:
            "Le destin de Jean Valjean, ancien bagnard, poursuivi par l'inspecteur Javert, qui croise la route de Fantine, Cosette, Marius et des Thénardier dans le Paris du XIXe siècle.",
        prix: 12.5,
        isbn: "9782253096344",
        date_ajout: new Date("2022-11-05"),
    },
    {
        titre: "Notre-Dame de Paris",
        auteur: "Victor Hugo",
        annee_publication: 1831,
        editeur: "Charles Gosselin",
        genre: ["Roman historique", "Drame"],
        nombre_pages: 624,
        langue: "Français",
        disponible: true,
        stock: 7,
        note_moyenne: 4.7,
        description:
            "Dans le Paris du XVe siècle, le destin tragique de la bohémienne Esmeralda, du sonneur de cloches Quasimodo, de l'archidiacre Frollo et du capitaine Phoebus s'entrecroise.",
        prix: 8.2,
        isbn: "9782253096337",
        date_ajout: new Date("2023-03-20"),
    },
    {
        titre: "Une chambre à soi",
        auteur: "Virginia Wolf",
        annee_publication: 1929,
        editeur: "Hogarth Press",
        genre: ["Essai"],
        nombre_pages: 192,
        langue: "Anglais",
        disponible: true,
        stock: 9,
        note_moyenne: 4.9,
        description:
            "Le sujet principal de ce texte est la place des écrivaines dans l'histoire de la littérature, principalement dans le contexte britannique. Woolf se penche sur les facteurs qui ont entravé l'accession des femmes à l'éducation, à la production littéraire et au succès.",
        prix: 4.2,
        isbn: "2264033606",
        date_ajout: new Date("2023-01-20"),
    },
    {
        titre: "King kong theorie",
        auteur: "Virginie Despentes",
        annee_publication: 2007,
        editeur: "Lgf",
        genre: ["Essai"],
        nombre_pages: 160,
        langue: "Francais",
        disponible: true,
        stock: 9,
        note_moyenne: 4.9,
        description:
            "J’écris de chez les moches, pour les moches, les frigides, les mal baisées, les imbaisables, toutes les exclues du grand marché à la bonne meuf, aussi bien que pour les hommes qui n’ont pas envie d’être protecteurs, ceux qui voudraient l’être mais ne savent pas s’y prendre, ceux qui ne sont pas ambitieux, ni compétitifs, ni bien membrés.Parce que l’idéal de la femme blanche séduisante qu’on nous brandit tout le temps sous le nez, je crois bien qu’il n’existe pas.",
        prix: 7.2,
        isbn: "2253122114",
        date_ajout: new Date("2021-11-20"),
    },
]);

// ajout utilisateur
db.createCollection("utilisateurs");
db.utilisateurs.insertMany([
    {
        nom: "Dupont",
        prenom: "Marie",
        email: "marie.dupont@example.com",
        age: 28,
        adresse: {
            rue: "123 Avenue des Livres",
            ville: "Lyon",
            code_postal: "69002",
        },
        date_inscription: new Date("2022-12-10"),
        livres_empruntes: [
            {
                livre_id: ObjectId("67c6d2883fcd1b257451e94b"),
                titre: "Le Petit Prince",
                date_emprunt: new Date("2023-02-15"),
                date_retour_prevue: new Date("2023-03-15"),
            },
        ],
        tags: ["fiction", "histoire"],
    },
    {
        nom: "Dupont",
        prenom: "Jean",
        email: "jean.dupont@example.com",
        age: 38,
        adresse: {
            rue: "123 rue des essais",
            ville: "Lyon",
            code_postal: "69009",
        },
        date_inscription: new Date("2022-12-10"),
        livres_empruntes: [
            {
                livre_id: ObjectId("67c6d2883fcd1b257451e94e"),
                titre: "Les Misérables",
                date_emprunt: new Date("2023-02-23"),
                date_retour_prevue: new Date("2023-03-23"),
            },
            {
                livre_id: ObjectId("67c6d2883fcd1b257451e94d"),
                titre: "Voyage au bout de la nuit",
                date_emprunt: new Date("2023-02-23"),
                date_retour_prevue: new Date("2023-03-23"),
            },
        ],
        tags: ["essais", "histoire"],
    },
    {
        nom: "Luis",
        prenom: "Lou",
        email: "lou.luis@example.com",
        age: 68,
        adresse: {
            rue: "123 Avenue des BD",
            ville: "Paris",
            code_postal: "75008",
        },
        date_inscription: new Date("2022-12-10"),
        livres_empruntes: [
            {
                livre_id: ObjectId("67c6d2883fcd1b257451e94f"),
                titre: "Notre-Dame de Paris",
                date_emprunt: new Date("2023-02-09"),
                date_retour_prevue: new Date("2023-03-09"),
            },
            {
                livre_id: ObjectId("67c6d2883fcd1b257451e94c"),
                titre: "L'Étranger",
                date_emprunt: new Date("2023-02-10"),
                date_retour_prevue: new Date("2023-03-10"),
            },
            {
                livre_id: ObjectId("67c6d2883fcd1b257451e94b"),
                titre: "Le Petit Prince",
                date_emprunt: new Date("2023-02-10"),
                date_retour_prevue: new Date("2023-03-10"),
                date_retour_prevue: new Date("2023-03-15"),
            },
        ],
        tags: ["classiques", "histoire"],
    },
]);

// Partie 2
// Listez tous les livres disponibles (si vous utilisez le dataset Amazon, ajoutez d'abord un champ `disponible` à vos documents)
db.livres.find({ disponible: true });

//Trouvez les livres publiés après l'an 2000
db.livres.find({ annee_publication: { $gt: 2000 } });

// Trouvez les livres d'un auteur spécifique
db.livres.find({ auteur: "Virginia Wolf" });

// Trouvez les livres qui ont une note moyenne supérieure à 4
db.livres.find({ note_moyenne: { $gt: 4 } });

//Listez tous les utilisateurs habitant dans une ville spécifique
db.utilisateurs.find({ "adresse.ville": "Lyon" });

// Trouvez les livres qui appartiennent à un genre spécifique
db.livres.find({ genre: { $in: ["Essai"] } });

// Trouvez les livres qui ont à la fois un prix inférieur à 15€ et une note moyenne supérieure à 4
db.livres.find({
    $and: [{ prix: { $lt: 15 } }, { note_moyenne: { $gt: 4 } }],
});

// Trouvez les utilisateurs qui ont emprunté un livre spécifique (par titre)
db.utilisateurs.find({ "livres_empruntes.titre": "Les Misérables" });

// Partie 3 :
// Mettez à jour le titre d'un livre spécifique
db.livres.updateOne(
    { titre: "Notre-Dame de Paris" },
    { $set: { titre: "Node Dame de Paris" } }
);
// Ajoutez un champ `stock` à tous les livres avec une valeur par défaut de 5
db.livres.updateMany({ stock: { $exists: false } }, { $set: { stock: 5 } });
// Marquez un livre comme indisponible (disponible = false)
db.livres.updateOne(
    { titre: "Une chambre à soi" },
    { $set: { disponible: false } }
);
// Ajoutez un nouvel emprunt dans la liste `livres_empruntes` d'un utilisateur
db.utilisateurs.updateOne(
    { nom: "Luis", prenom: "Lou" },
    {
        $push: {
            livres_empruntes: {
                livre_id: ObjectId("67c6d2883fcd1b257451e950"),
                titre: "Une chambre à soi",
                date_emprunt: new Date("2023-03-01"),
                date_retour_prevue: new Date("2023-04-01"),
            },
        },
    }
);
// Changez l'adresse d'un utilisateur
db.utilisateurs.updateOne(
    { nom: "Luis", prenom: "Lou" },
    {
        $set: {
            adresse: {
                rue: "123 Avenue des BD",
                ville: "Rouen",
                code_postal: "32008",
            },
        },
    }
);
// Ajoutez un nouveau tag à un utilisateur
db.utilisateurs.updateOne(
    { nom: "Dupont", prenom: "Marie" },
    { $push: { tags: "philosophie" } }
);
// Mettez à jour la note moyenne d'un livre
db.livres.updateOne(
    { titre: "Le Petit Prince" },
    { $set: { note_moyenne: 4.9 } }
);

// Partie 4 : Suppression de documents (Delete)
// Supprimez un livre spécifique par son titre
db.livres.deleteOne({ titre: "Voyage au bout de la nuit" });
// Supprimez tous les livres d'un auteur spécifique
db.livres.deleteMany({ auteur: "Victor Hugo" });

// Supprimez un utilisateur par son email
db.utilisateurs.deleteOne({ email: "jean.dupont@example.com" });

// Partie 5 : Requêtes avancées et projection
// 1. Listez tous les livres triés par note moyenne (ordre décroissant)
db.livres.find().sort({ note_moyenne: -1 });
// 2. Trouvez les 3 livres les plus anciens
db.livres.find().sort({ annee_publication: 1 }).limit(3);
// 3. Comptez le nombre de livres par auteur
db.livres.aggregate([
    {
        $group: {
            _id: "$auteur",
            nombreDeLivres: { $sum: 1 },
        },
    },
]);
// 4. Affichez uniquement le titre, l'auteur et la note moyenne des livres (sans l'id)
db.livres.find({}, { _id: 0, titre: 1, auteur: 1, note_moyenne: 1 });
// 5. Trouvez les utilisateurs qui ont emprunté plus d'un livre
db.utilisateurs.find({
    $expr: {
        $gt: [{ $size: "$livres_empruntes" }, 1],
    },
});

// 6. Recherchez les livres dont le titre contient un mot spécifique (utilisez $regex)
db.livres.find({ titre: { $regex: /soi/ } });
// 7. Trouvez les livres dont le prix est entre 10€ et 20€
db.livres.find({ prix: { $lt: 20, $gt: 10 } });

// Partie 6
//creer collection
db.createCollection("emprunts");
// creer 3 emprunts
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

// Comparez cette approche avec celle où les emprunts sont directement intégrés dans le document utilisateur
// Cette approche est flexible, si on change le titre du livre par exemple, on aura pas a le changer dans livres_empruntes des utilisateurs.

// 1. Quels sont les avantages et inconvénients de chaque approche ?

// 2. Quelle approche privilégieriez-vous pour une application réelle et pourquoi ?

// 3. Comment modéliseriez-vous les cas où un même livre peut exister en plusieurs exemplaires ?
