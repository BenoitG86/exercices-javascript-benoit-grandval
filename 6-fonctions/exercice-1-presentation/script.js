function presentation(prenom, nom, age, chose) {
      console.log(`Bonjour, je m'appelle ${prenom} ${nom}, j'ai ${age} ans et j'adore ${chose}`);
}
presentation('Benoît', 'GRANDVAL', 29, 'le fromage');

// Fonctionnement alternatif avec des prompts

// let prenom = prompt(`Quel est ton prénom ?`);
// let nom = prompt(`Ton nom de famille ?`);
// let age = prompt(`Quel âge as-tu?`);
// let chose = prompt(`Ta chose préférée ?`);

// presentation(prenom, nom, age, chose);