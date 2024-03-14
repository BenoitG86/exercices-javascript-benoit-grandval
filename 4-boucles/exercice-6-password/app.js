const PASSWORD = '1234';
let guessPassword = prompt(`Essayez de deviner le mot de passe qui n'est pas : ${PASSWORD}`);

while (guessPassword !== PASSWORD){
      alert(`Mot de passe incorrect, essayez à nouveau ! Indice : ${PASSWORD}, et non pas ${guessPassword}`);
      guessPassword = prompt(`Essayez à nouveau de trouver le mot de passe qui n'est pas DU TOUT ${PASSWORD}`);
}
alert(`Accès autorisé`);

// Exemple de déroulement :

// "Veuillez entrer le mot de passe :"

// Si incorrect, résultat attendu dans la console : 
// Mot de passe incorrect, essayez à nouveau.

// Si correct, résultat attendu dans la console : 
// Accès autorisé.