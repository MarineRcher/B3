db.createCollection("utilisateurs");
const prenoms = ["Jean", "Marie", "Pierre", "Sophie", "Thomas", 
  "Isabelle"]; 
  const noms = ["Martin", "Bernard", "Dubois", "Thomas", "Robert", 
  "Richard"]; 
  const villes = ["Paris", "Lyon", "Marseille" ]; 

  function genererUtilisateur() {
    return {
      prenom: prenoms[Math.floor(Math.random() * prenoms.length)],
      nom: prenoms[Math.floor(Math.random() * noms.length)],
      villes: villes[Math.floor(Math.random() * villes.length)]
    };
  }
  const utilisateurs = [];
  nombre_utilisateurs = 12;
for (let i = 0; i < nombre_utilisateurs; i++) {
  utilisateurs.push(genererUtilisateur());
}
db.utilisateurs.insertMany(utilisateurs);
