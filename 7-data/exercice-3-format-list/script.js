const mots = [
      "chat",
      "chien",
      "oiseau",
      "poisson",
      "souris",
      "lapin",
      "tortue",
      "poule"
];

mots.reverse();

let motsUp = mots.map(mot => mot.toUpperCase());

console.log(motsUp);

//   // Résultat attendu :
//   "POULE, TORTUE, LAPIN, SOURIS, POISSON, OISEAU, CHIEN, CHAT"