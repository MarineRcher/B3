db.createCollection("sessions_utilisateurs");

const navigateurs = [
  "Chrome", "Firefox", "Safari", "Edge", "Opera", "Brave", "Samsung Internet"
];

// Systèmes d'exploitation possibles
const systemesExploitation = [
  "iOS 16", "iOS 17", "Android 12", "Android 13", "Windows 11", 
  "Windows 10", "macOS Ventura", "macOS Monterey", "Ubuntu 22.04", "Fedora 37"
];

function genererSession(userId) {
  const date = new Date();
  
  const heure = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  
  date.setHours(heure, minute, 0, 0);

  return {
    userId: userId,
    dateActivite: date,
    donnees: {
      navigateur: navigateurs[Math.floor(Math.random() * navigateurs.length)],
      systemeExploitation: systemesExploitation[Math.floor(Math.random() * systemesExploitation.length)],
      localisation: {
        pays: ["France", "Belgique", "Suisse", "Canada", "Maroc"][Math.floor(Math.random() * 5)],
        ville: ["Paris", "Lyon", "Marseille", "Bruxelles", "Genève", "Montréal", "Casablanca"][Math.floor(Math.random() * 7)]
      }
    },
  };
}

const userIds = db.utilisateurs.find({}, { _id: 1 }).toArray().map(user => user._id);
const sessions = [];
for (let i = 0; i < userIds.length; i++) {
sessions.push(genererSession(userIds[i]));
}
db.sessions_utilisateurs.insertMany(sessions);
