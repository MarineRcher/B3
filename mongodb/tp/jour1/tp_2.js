db.ecommerce_produits.insertMany([
    {
        nom: "Caméra HD Pro 4K",
        description:
            "Caméra professionnelle 4K avec stabilisation d'image avancée et zoom optique 30x",
        prix: 1299.99,
        categorie: "Électronique",
        sousCategorie: "Photo & Vidéo",
        stock: {
            quantite: 24,
            seuilAlerte: 5,
            statut: "disponible",
            entrepots: [
                { id: "ENT-PARIS", quantite: 15 },
                { id: "ENT-LYON", quantite: 9 },
            ],
        },
        caracteristiques: {
            resolution: "4K UHD (3840 x 2160)",
            capteur: "CMOS 1 pouce",
            zoom: "30x optique, 20x numérique",
            stabilisation: "5 axes",
            connectique: ["HDMI", "USB-C", "WiFi", "Bluetooth"],
            autonomie: "4.5 heures",
            dimensions: {
                longueur: 145,
                largeur: 95,
                hauteur: 85,
            },
        },
        avis: [
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c87"),
                nom: "Sophie Martin",
                note: 5,
                commentaire:
                    "Qualité d'image exceptionnelle, très satisfaite de cet achat!",
                date: new Date("2023-02-10"),
                verified: true,
            },
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c88"),
                nom: "Thomas Petit",
                note: 4,
                commentaire:
                    "Excellent produit, mais autonomie légèrement inférieure à celle annoncée",
                date: new Date("2023-01-25"),
                verified: true,
            },
        ],
        tags: ["4K", "professionnel", "vidéo", "photo"],
    },
    {
        nom: "TV OLED Smart 65 pouces",
        description:
            "Téléviseur OLED 65 pouces avec technologie HDR et système smart TV intégré",
        prix: 1899.99,
        categorie: "Électronique",
        sousCategorie: "TV & Home Cinéma",
        stock: {
            quantite: 18,
            seuilAlerte: 3,
            statut: "disponible",
            entrepots: [
                { id: "ENT-PARIS", quantite: 10 },
                { id: "ENT-LYON", quantite: 8 },
            ],
        },
        caracteristiques: {
            resolution: "4K UHD (3840 x 2160)",
            technologie: "OLED",
            hdr: "Dolby Vision, HDR10+",
            connectique: [
                "HDMI 2.1",
                "USB 3.0",
                "Ethernet",
                "WiFi",
                "Bluetooth",
            ],
            smartTV: "WebOS 6.0",
            dimensions: {
                longueur: 1450,
                largeur: 50,
                hauteur: 840,
            },
        },
        avis: [
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c89"),
                nom: "Jean Dupont",
                note: 5,
                commentaire:
                    "Image extraordinaire, les noirs sont vraiment profonds!",
                date: new Date("2023-03-05"),
                verified: true,
            },
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c90"),
                nom: "Marie Lefebvre",
                note: 5,
                commentaire: "Interface fluide et image parfaite",
                date: new Date("2023-02-28"),
                verified: true,
            },
        ],
        tags: ["OLED", "4K", "smart TV", "HDR"],
    },
    {
        nom: "Ordinateur Portable Pro X15",
        description:
            "Ordinateur portable haute performance avec écran 15.6 pouces et processeur dernière génération",
        prix: 1599.99,
        categorie: "Informatique",
        sousCategorie: "Ordinateurs Portables",
        stock: {
            quantite: 35,
            seuilAlerte: 7,
            statut: "disponible",
            entrepots: [
                { id: "ENT-PARIS", quantite: 20 },
                { id: "ENT-LYON", quantite: 15 },
            ],
        },
        caracteristiques: {
            processeur: "Intel Core i9-12900H",
            ram: "32 Go DDR5",
            stockage: "SSD 1 To NVMe",
            ecran: "15.6 pouces IPS 165Hz",
            resolution: "2560 x 1440",
            carteGraphique: "NVIDIA RTX 3080 8Go",
            connectique: [
                "USB-C",
                "HDMI 2.1",
                "Thunderbolt 4",
                "WiFi 6E",
                "Bluetooth 5.2",
            ],
            autonomie: "8 heures",
            dimensions: {
                longueur: 360,
                largeur: 240,
                hauteur: 19,
            },
        },
        avis: [
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c91"),
                nom: "David Moreau",
                note: 5,
                commentaire:
                    "Performance exceptionnelle pour les jeux et le montage vidéo!",
                date: new Date("2023-01-15"),
                verified: true,
            },
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c92"),
                nom: "Lucie Bernard",
                note: 4,
                commentaire:
                    "Très puissant mais chauffe un peu lors d'une utilisation intensive",
                date: new Date("2023-02-20"),
                verified: true,
            },
        ],
        tags: ["gaming", "performance", "ordinateur", "RTX"],
    },
    {
        nom: "Casque Audio Sans Fil Pro",
        description:
            "Casque audio premium sans fil avec réduction de bruit active et son haute définition",
        prix: 199.99,
        categorie: "Électronique",
        sousCategorie: "Audio",
        stock: {
            quantite: 42,
            seuilAlerte: 10,
            statut: "disponible",
            entrepots: [
                { id: "ENT-PARIS", quantite: 25 },
                { id: "ENT-LYON", quantite: 17 },
            ],
        },
        caracteristiques: {
            type: "Circum-aural",
            reductionBruit: "Adaptative, jusqu'à -40dB",
            autonomie: "30 heures",
            connectivite: ["Bluetooth 5.2", "Jack 3.5mm"],
            impedance: "32 Ohm",
            reponseFrequence: "4Hz - 40kHz",
            microphone: "Intégré avec suppression de bruit",
            dimensions: {
                longueur: 190,
                largeur: 170,
                hauteur: 80,
            },
        },
        avis: [
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c93"),
                nom: "Julie Dubois",
                note: 5,
                commentaire:
                    "Une qualité sonore impressionnante, le bruit ambiant disparaît complètement!",
                date: new Date("2023-03-10"),
                verified: true,
            },
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c94"),
                nom: "Paul Leroy",
                note: 4,
                commentaire:
                    "Confortable même après plusieurs heures d'utilisation, très bon son",
                date: new Date("2023-02-14"),
                verified: true,
            },
        ],
        tags: ["audio", "sans fil", "réduction de bruit", "bluetooth"],
    },
    {
        nom: "Smartphone Ultra S22",
        description:
            "Smartphone haut de gamme avec appareil photo professionnel et écran AMOLED 120Hz",
        prix: 999.99,
        categorie: "Électronique",
        sousCategorie: "Smartphones",
        stock: {
            quantite: 56,
            seuilAlerte: 15,
            statut: "disponible",
            entrepots: [
                { id: "ENT-PARIS", quantite: 30 },
                { id: "ENT-LYON", quantite: 26 },
            ],
        },
        caracteristiques: {
            processeur: "Snapdragon 8 Gen 2",
            ram: "12 Go",
            stockage: "256 Go",
            ecran: "6.7 pouces AMOLED 120Hz",
            resolution: "3200 x 1440",
            appareilPhoto: {
                principal: "108MP f/1.8",
                ultraGrandAngle: "12MP f/2.2",
                telephoto: "10MP f/2.8 (zoom optique 5x)",
                selfie: "40MP f/2.2",
            },
            batterie: "5000 mAh",
            chargeRapide: "65W",
            resistanceEau: "IP68",
            biometrie: ["Empreinte sous écran", "Reconnaissance faciale"],
            dimensions: {
                longueur: 163,
                largeur: 74,
                hauteur: 8.9,
            },
        },
        avis: [
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c95"),
                nom: "Camille Fournier",
                note: 5,
                commentaire:
                    "Appareil photo exceptionnel, les photos de nuit sont impressionnantes!",
                date: new Date("2023-02-25"),
                verified: true,
            },
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c96"),
                nom: "Alexandre Martin",
                note: 4,
                commentaire:
                    "Très fluide et réactif, autonomie correcte mais pas extraordinaire",
                date: new Date("2023-03-02"),
                verified: true,
            },
        ],
        tags: ["smartphone", "photo", "AMOLED", "5G"],
    },
    {
        nom: "Robot Culinaire Multifonction",
        description:
            "Robot culinaire complet avec 12 fonctions et 15 accessoires inclus",
        prix: 599.99,
        categorie: "Électroménager",
        sousCategorie: "Cuisine",
        stock: {
            quantite: 30,
            seuilAlerte: 8,
            statut: "disponible",
            entrepots: [
                { id: "ENT-PARIS", quantite: 18 },
                { id: "ENT-LYON", quantite: 12 },
            ],
        },
        caracteristiques: {
            puissance: "1500W",
            capacite: "6.7 litres",
            vitesses: "10 + pulse",
            fonctions: [
                "Pétrir",
                "Mixer",
                "Hacher",
                "Émulsionner",
                "Fouetter",
                "Râper",
                "Cuire",
                "Cuiseur vapeur",
                "Balance intégrée",
                "Programmable",
            ],
            temperatureMax: "150°C",
            minuterie: "0-99 minutes",
            accessoires: 15,
            dimensions: {
                longueur: 38,
                largeur: 33,
                hauteur: 40,
            },
        },
        avis: [
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c97"),
                nom: "Sarah Boucher",
                note: 5,
                commentaire:
                    "Une révolution dans ma cuisine! Je l'utilise tous les jours, c'est un gain de temps incroyable.",
                date: new Date("2023-01-30"),
                verified: true,
            },
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c98"),
                nom: "Pierre Dufour",
                note: 4,
                commentaire:
                    "Très polyvalent et puissant, un peu bruyant à pleine puissance mais efficace",
                date: new Date("2023-02-18"),
                verified: true,
            },
        ],
        tags: ["cuisine", "robot", "multifonction", "électroménager"],
    },
    {
        nom: "Vélo Électrique City Plus",
        description:
            "Vélo électrique urbain avec batterie longue durée et assistance jusqu'à 25 km/h",
        prix: 1799.99,
        categorie: "Sport & Loisirs",
        sousCategorie: "Mobilité Urbaine",
        stock: {
            quantite: 15,
            seuilAlerte: 3,
            statut: "disponible",
            entrepots: [
                { id: "ENT-PARIS", quantite: 8 },
                { id: "ENT-LYON", quantite: 7 },
            ],
        },
        caracteristiques: {
            moteur: "250W intégré au moyeu",
            batterie: "Li-ion 36V 13.6Ah (500Wh)",
            autonomie: "80-120 km selon assistance",
            vitesseMax: "25 km/h (assistance)",
            modes: ["Eco", "Normal", "Sport", "Turbo"],
            derailleur: "Shimano Deore 10 vitesses",
            freins: "Hydrauliques à disque",
            cadre: "Aluminium 6061",
            suspension: "Fourche avant 63mm",
            poids: "22 kg",
            chargeMax: "120 kg",
            tempsCharge: "4 heures",
            dimensions: {
                longueur: 180,
                largeur: 65,
                hauteur: 110,
            },
        },
        avis: [
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c99"),
                nom: "Mathieu Colin",
                note: 5,
                commentaire:
                    "Excellente autonomie, je fais mes trajets quotidiens toute la semaine avec une seule charge!",
                date: new Date("2023-02-22"),
                verified: true,
            },
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c9a"),
                nom: "Emilie Laurent",
                note: 4,
                commentaire:
                    "Très confortable et maniable en ville, assistance progressive et naturelle",
                date: new Date("2023-01-18"),
                verified: true,
            },
        ],
        tags: ["vélo électrique", "mobilité", "écologique", "urbain"],
    },
    {
        nom: "Drone Explorateur Pro",
        description:
            "Drone professionnel avec caméra 4K stabilisée et 35 minutes d'autonomie de vol",
        prix: 899.99,
        categorie: "Électronique",
        sousCategorie: "Drones",
        stock: {
            quantite: 22,
            seuilAlerte: 5,
            statut: "disponible",
            entrepots: [
                { id: "ENT-PARIS", quantite: 12 },
                { id: "ENT-LYON", quantite: 10 },
            ],
        },
        caracteristiques: {
            camera: '4K 60fps, capteur 1/2.3"',
            stabilisation: "Nacelle 3 axes",
            autonomie: "35 minutes",
            portee: "10 km",
            vitesseMax: "72 km/h",
            capteurs: [
                "Évitement d'obstacles",
                "Détection de terrain",
                "GPS",
                "GLONASS",
            ],
            modesVol: [
                "Suivi intelligent",
                "Orbite",
                "Waypoints",
                "ActiveTrack",
                "QuickShots",
            ],
            batterie: "Li-Po 4S 5200mAh",
            dimensions: {
                longueur: 180,
                largeur: 190,
                hauteur: 84,
                plieDimensions: {
                    longueur: 220,
                    largeur: 95,
                    hauteur: 84,
                },
            },
            poids: "905g",
        },
        avis: [
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c9b"),
                nom: "Nicolas Garnier",
                note: 5,
                commentaire:
                    "Stabilisation vidéo incroyable, très facile à piloter même pour un débutant!",
                date: new Date("2023-03-01"),
                verified: true,
            },
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c9c"),
                nom: "Claire Berger",
                note: 4,
                commentaire:
                    "Qualité d'image impressionnante et bonne autonomie, application à améliorer",
                date: new Date("2023-02-15"),
                verified: true,
            },
        ],
        tags: ["drone", "4K", "photo aérienne", "vidéo"],
    },
    {
        nom: "Console de Jeux NextGen X",
        description:
            "Console de jeux dernière génération avec graphismes 4K, 1TB SSD et manette sans fil",
        prix: 499.99,
        categorie: "Jeux Vidéo",
        sousCategorie: "Consoles",
        stock: {
            quantite: 32,
            seuilAlerte: 10,
            statut: "disponible",
            entrepots: [
                { id: "ENT-PARIS", quantite: 20 },
                { id: "ENT-LYON", quantite: 12 },
            ],
        },
        caracteristiques: {
            processeur: "AMD Zen 2 8 cœurs à 3.8 GHz",
            gpu: "AMD RDNA 2 12 TFLOPS",
            ram: "16 Go GDDR6",
            stockage: "SSD NVMe 1 To",
            resolution: "4K jusqu'à 120fps",
            audio: "Tempest 3D AudioTech",
            connectique: ["HDMI 2.1", "USB-C", "USB-A", "Ethernet"],
            connectivite: ["WiFi 6", "Bluetooth 5.1"],
            retrocompatibilite: "Oui",
            dimensions: {
                longueur: 390,
                largeur: 104,
                hauteur: 260,
            },
            poids: "4.5 kg",
        },
        avis: [
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c9d"),
                nom: "Lucas Marchand",
                note: 5,
                commentaire:
                    "Temps de chargement ultra rapides et graphismes époustouflants!",
                date: new Date("2023-01-28"),
                verified: true,
            },
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c9e"),
                nom: "Emma Rousseau",
                note: 5,
                commentaire:
                    "La fluidité en 120fps est bluffante, un vrai saut générationnel",
                date: new Date("2023-02-05"),
                verified: true,
            },
        ],
        tags: ["console", "gaming", "4K", "jeux vidéo"],
    },
    {
        nom: "Montre Connectée Sport Plus",
        description:
            "Montre connectée avec suivi fitness complet, ECG, GPS et autonomie de 14 jours",
        prix: 249.99,
        categorie: "Électronique",
        sousCategorie: "Objets Connectés",
        stock: {
            quantite: 48,
            seuilAlerte: 12,
            statut: "disponible",
            entrepots: [
                { id: "ENT-PARIS", quantite: 30 },
                { id: "ENT-LYON", quantite: 18 },
            ],
        },
        caracteristiques: {
            ecran: "AMOLED 1.4 pouces (454 x 454)",
            autonomie: "14 jours en usage normal, 36h en GPS continu",
            etancheite: "5 ATM (50m)",
            capteurs: [
                "Cardiaque optique",
                "ECG",
                "SpO2",
                "Accéléromètre",
                "Gyroscope",
                "Altimètre barométrique",
                "Température",
                "Lumière ambiante",
            ],
            connectivite: ["Bluetooth 5.0", "WiFi", "NFC"],
            gps: ["GPS", "GLONASS", "Galileo", "BeiDou"],
            suiviSante: [
                "Fréquence cardiaque 24/7",
                "Sommeil",
                "Stress",
                "Niveau d'énergie",
                "Respiration",
                "Cycle menstruel",
            ],
            suiviSportif: [
                "130+ modes sportifs",
                "Détection automatique",
                "Metrics avancées",
            ],
            batterie: "420 mAh",
            chargeRapide: "0-100% en 1h30",
            dimensions: {
                diametre: 46,
                epaisseur: 11.4,
            },
            poids: "48g (sans bracelet)",
        },
        avis: [
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610c9f"),
                nom: "Julien Mercier",
                note: 5,
                commentaire:
                    "Un concentré de technologie! L'autonomie est impressionnante et les données sportives très précises.",
                date: new Date("2023-02-12"),
                verified: true,
            },
            {
                utilisateurId: ObjectId("60d21b4667d0d8992e610ca0"),
                nom: "Sophie Blanc",
                note: 4,
                commentaire:
                    "Légère et confortable, parfaite pour le suivi fitness. Interface personnalisable et réactive.",
                date: new Date("2023-01-20"),
                verified: true,
            },
        ],
        tags: ["montre connectée", "sport", "fitness", "santé"],
    },
]);

// ex 2
// Récupérer tous les produits d'une catégorie
db.ecommerce_produits.find({ categorie: "Jeux Vidéo" });
// Trouver les produits dont le prix est entre 50€ et 200€
db.ecommerce_produits.find({ prix: { $gte: 50, $lte: 200 } });
// Lister les produits en stock (stock > 0)
db.ecommerce_produits.find({ "stock.quantite": { $gt: 0 } });
// Trouver les produits avec au moins 3 avis
db.ecommerce_produits.find({
    $expr: { $gte: [{ $size: "$avis" }, 3] },
});

// ex 3
// Augmenter le prix de tous les produits d'une catégorie de 5%
db.ecommerce_produits.updateMany(
    { categorie: "Jeux Vidéo" },
    { $mul: { prix: 1.05 } }
);
// Ajouter un champ "promotion" à certains produits
db.ecommerce_produits.updateMany(
    { categorie: "Jeux Vidéo" },
    { $set: { promotion: true } },
    { upsert: true }
);
// Ajouter un nouveau tag à tous les produits d'une catégorie
db.ecommerce_produits.updateMany(
    { categorie: "Électronique" },
    { $push: { tags: "Nouveau" } }
);
// Mettre à jour le stock après une "vente"
db.ecommerce_produits.updateOne(
    { nom: "Montre Connectée Sport Plus" },
    { $inc: { "stock.quantite": -1 } }
);

// ex 4
// Trouver les produits disponibles avec tags : fitness ET photo
db.ecommerce_produits.find({
    "stock.statut": "disponible",
    tags: { $all: ["fitness", "photo"] },
});
// Lister les produits premium avec un stock faible (<5)
db.ecommerce_produits.find(
    { "stock.quantite": { $lt: 5 } },
    { tags: "premium" }
);
// Rechercher les produits ayant reçu au moins un avis 5 étoiles
db.ecommerce_produits.find({ "avis.note": 5 });
// Trouver les produits d'une catégorie, triés par prix décroissant, limités aux 5 premiers
db.ecommerce_produits
    .find({ categorie: "Électronique" })
    .sort({ prix: -1 })
    .limit(5);
