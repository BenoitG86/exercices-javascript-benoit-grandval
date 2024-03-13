let PASSWORD = Number(1234);
let guessPassword = prompt("Quel est le mot de passe ? Indice : ce n'est pas 1234 !!!");

if (guessPassword == PASSWORD) {
      alert(`${guessPassword} était bel et bien le mot de passe !!`);      
} else {
      alert(`${guessPassword} n'était pas le mot de passe, c'était ${PASSWORD}`);      
}

// Exemples de résultats attendus :

// si le mot de passe est correct :
// OK 

// si le mot de passe est incorrect
// Accès interdit