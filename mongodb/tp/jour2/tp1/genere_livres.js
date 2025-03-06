
db.createCollection("livres");

const motsDebut = ["Le", "La", "Les", "Un", "Une", "Des", "Ce", "Cette", "Ces", "Mon", "Ma", "Mes", "Notre", "Nos", "Votre", "Vos"];
const adjectifs = ["grand", "petit", "nouveau", "vieux", "beau", "joli", "bon", "mauvais", "long", "court", "haut", "bas", "chaud", "froid", "fort", "faible", "riche", "pauvre", "jeune", "vieux", "seul", "unique", "simple", "double", "triple", "étrange", "bizarre", "curieux", "mystérieux", "secret", "caché", "perdu", "trouvé", "volé", "rendu", "prêté", "emprunté", "acheté", "vendu", "donné", "reçu", "envoyé", "livré"];
const noms = ["homme", "femme", "enfant", "garçon", "fille", "père", "mère", "frère", "sœur", "ami", "ennemi", "voisin", "collègue", "patron", "chef", "roi", "reine", "prince", "princesse", "chevalier", "soldat", "guerrier", "héros", "méchant", "voyageur", "aventurier", "explorateur", "scientifique", "médecin", "professeur", "étudiant", "élève", "livre", "histoire", "conte", "roman", "poème", "chanson", "film", "tableau", "photo", "image", "dessin", "peinture", "sculpture", "monument", "bâtiment", "maison", "château", "palais", "tour", "pont", "route", "chemin", "sentier", "rivière", "lac", "mer", "océan", "montagne", "colline", "valée", "forêt", "arbre", "fleur", "plante", "animal", "oiseau", "poisson", "chien", "chat", "cheval", "vache", "mouton", "cochon", "poule", "coq", "canard", "lapin", "souris", "rat", "renard", "loup", "ours", "lion", "tigre", "éléphant", "girafe", "singe", "baleine", "dauphin", "requin"];
const liaisons = ["de", "du", "des", "et", "à", "au", "aux", "en", "dans", "sur", "sous", "par", "pour", "avec", "sans", "contre", "entre", "parmi"];

const prenomsAuteurs = ["Alexandre", "Victor", "Émile", "Honoré", "Simone", "Marguerite", "Albert", "Jean-Paul", "Marcel", "Antoine", "Marie", "Amélie", "François", "Michel", "Guillaume", "Christine", "Patrick", "Bernard", "Éric", "Philippe", "Sylvie", "Anne", "Catherine", "Nathalie", "Pierre", "Jean", "Marc", "Sophie", "Isabelle", "Thomas"];
const nomsAuteurs = ["Dumas", "Hugo", "Zola", "de Balzac", "de Beauvoir", "Duras", "Camus", "Sartre", "Proust", "de Saint-Exupéry", "Curie", "Nothomb", "Mauriac", "Houellebecq", "Musso", "Martin", "Modiano", "Werber", "Despentes", "Levy", "Gavalda", "Ndiaye", "Daoud", "Slimani", "Lemaitre", "Gounelle", "Jallon", "Verne", "Flaubert", "Beigbeder"];

const genres = [
  "Roman", "Poésie", "Théâtre", "Essai", "Biographie", "Mémoires", 
  "Science-fiction", "Fantasy", "Policier", "Thriller", "Horreur", 
  "Romance", "Aventure", "Historique", "Philosophie", "Politique", 
  "Économie", "Sciences", "Arts", "Cuisine", "Voyage", "Sport",
  "Développement personnel", "Jeunesse", "Bande dessinée", "Manga"
];

const langues = ["Français", "Anglais", "Espagnol", "Allemand", "Italien", "Portugais", "Russe", "Chinois", "Japonais", "Arabe"];

const editeurs = [
  "Gallimard", "Flammarion", "Actes Sud", "Seuil", "Albin Michel", 
  "Grasset", "Robert Laffont", "J'ai Lu", "Pocket", "Folio", 
  "Le Livre de Poche", "Hachette", "Nathan", "Larousse", "Bordas",
  "Plon", "Fayard", "Minuit", "La Découverte", "Odile Jacob",
  "Belin", "Denoël", "Perrin", "Michel Lafon", "First"
];

function genererTitre() {
  const structure = Math.floor(Math.random() * 5);
  let titre = "";
  
  switch (structure) {
    case 0:
      titre = `${motsDebut[Math.floor(Math.random() * motsDebut.length)]} ${adjectifs[Math.floor(Math.random() * adjectifs.length)]} ${noms[Math.floor(Math.random() * noms.length)]}`;
      break;
    case 1:
      titre = `${motsDebut[Math.floor(Math.random() * motsDebut.length)]} ${noms[Math.floor(Math.random() * noms.length)]} ${liaisons[Math.floor(Math.random() * liaisons.length)]} ${noms[Math.floor(Math.random() * noms.length)]}`;
      break;
    case 2:
      titre = `${noms[Math.floor(Math.random() * noms.length)].charAt(0).toUpperCase() + noms[Math.floor(Math.random() * noms.length)].slice(1)} et ${noms[Math.floor(Math.random() * noms.length)]}`;
      break;
    case 3:
      
      titre = `${adjectifs[Math.floor(Math.random() * adjectifs.length)].charAt(0).toUpperCase() + adjectifs[Math.floor(Math.random() * adjectifs.length)].slice(1)} comme ${noms[Math.floor(Math.random() * noms.length)]}`;
      break;
    case 4:
      titre = `${noms[Math.floor(Math.random() * noms.length)].charAt(0).toUpperCase() + noms[Math.floor(Math.random() * noms.length)].slice(1)} ${adjectifs[Math.floor(Math.random() * adjectifs.length)]}`;
      break;
  }
  
  return titre;
}

function genererAuteur() {
  const prenom = prenomsAuteurs[Math.floor(Math.random() * prenomsAuteurs.length)];
  const nom = nomsAuteurs[Math.floor(Math.random() * nomsAuteurs.length)];
  return `${prenom} ${nom}`;
}

function genererISBN() {
  let isbn = "978";
  for (let i = 0; i < 10; i++) {
    isbn += Math.floor(Math.random() * 10);
  }
  return isbn;
}

function genererDescription() {
  const longueur = Math.floor(Math.random() * 3) + 1; // Entre 1 et 3 phrases
  let description = "";
  
  const debuts = [
    "Un livre qui raconte", "Une histoire fascinante sur", "Un récit captivant de", 
    "Une exploration de", "Une aventure extraordinaire de", "Un voyage au cœur de",
    "Une analyse profonde de", "Une réflexion sur", "Un témoignage de",
    "Une enquête sur", "Une découverte de", "Un regard nouveau sur"
  ];
  
  const milieux = [
    "les défis de", "la beauté de", "les mystères de", "les secrets de",
    "la complexité de", "la simplicité de", "l'importance de", "la valeur de",
    "la signification de", "la transformation de", "l'évolution de", "la révolution de"
  ];
  
  const fins = [
    "la vie quotidienne.", "notre monde moderne.", "l'existence humaine.",
    "notre société en mutation.", "nos relations personnelles.", "notre rapport au temps.",
    "notre perception de la réalité.", "notre quête de sens.", "nos aspirations profondes.",
    "nos peurs et nos espoirs.", "notre héritage culturel.", "notre avenir commun."
  ];
  
  for (let i = 0; i < longueur; i++) {
    description += `${debuts[Math.floor(Math.random() * debuts.length)]} ${milieux[Math.floor(Math.random() * milieux.length)]} ${fins[Math.floor(Math.random() * fins.length)]} `;
  }
  
  return description.trim();
}


function genererDatePublication() {
  
  const annee = Math.floor(Math.random() * (2023 - 1950 + 1)) + 1950;
  const mois = Math.floor(Math.random() * 12) + 1;
  const jour = Math.floor(Math.random() * 28) + 1; 
  return new Date(annee, mois - 1, jour);
}


function genererGenres() {
  const nombreGenres = Math.floor(Math.random() * 3) + 1;
  const genresSelectionnes = [];
  const genresDisponibles = [...genres];
  
  for (let i = 0; i < nombreGenres; i++) {
    if (genresDisponibles.length === 0) break;
    
    const index = Math.floor(Math.random() * genresDisponibles.length);
    genresSelectionnes.push(genresDisponibles[index]);
    genresDisponibles.splice(index, 1);
  }
  
  return genresSelectionnes;
}


function genererLivre() {
  const prix = parseFloat((Math.random() * 40 + 5).toFixed(2)); // Prix entre 5 et 45 euros
  
  return {
    titre: genererTitre(),
    auteur: genererAuteur(),
    description: genererDescription(),
    date_publication: genererDatePublication(),
    note_moyenne: parseFloat((Math.random() * 5).toFixed(1)), 
    langue: langues[Math.floor(Math.random() * langues.length)],
    genres: genererGenres(),
    ISBN: genererISBN(),
    prix: prix,
    disponible: Math.random() > 0.2, 
    editeur: editeurs[Math.floor(Math.random() * editeurs.length)],
    date_ajout: new Date()
  };
}

const livres = [];
const NOMBRE_LIVRES = 1000;

for (let i = 0; i < NOMBRE_LIVRES; i++) {
  livres.push(genererLivre());
  if (livres.length === 100 || i === NOMBRE_LIVRES - 1) {
    db.livres.insertMany(livres);
   livres.length = 0;
  }
}


