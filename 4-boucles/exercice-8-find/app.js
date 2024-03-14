const SECRET_NUMBER = 354;
let guessNumber = parseInt(prompt(`Essayez de deviner le chiffre mystère à 3 chiffres!!`));
let guessTries = 0;
let maxTries = 5;


while (guessNumber !== SECRET_NUMBER){
      // La proposition n'est pas la bonne, on lance la boucle et on incrémente les essais
      guessTries++;
      let leftTries = maxTries - guessTries;
      // Si la proposition est plus petite, on fait ça
      if (SECRET_NUMBER > guessNumber) {
            guessNumber = parseInt(prompt(`
            Vous vous êtes trompés. 
            Le nombre est plus grand.
            Essayez à nouveau.
            Il vous reste ${leftTries} essais`));
      }
      // Si la proposition est plus grande, on fait ça
      else  {
            guessNumber = parseInt(prompt(`
            Vous vous êtes trompés. 
            Le nombre est plus petit. 
            Essayez à nouveau.
            Il vous reste ${leftTries} essais`));
      }   
      if (leftTries <= 0){
            alert(`GAME OVER`);
            break;
      }
}
alert(`Félicitations vous avez trouvé en ${guessTries+1} essai(s) et il reste ${leftTries}`);

// Exemple de déroulement :

// Votre nombre secret est 7 par exemple.

// L'utilisateur saisit 5, résultat attendu dans la console : 
// Trop petit

// L'utilisateur saisit 9, résultat attendu dans la console : 
// Trop grand

// L'utilisateur saisit 7, résultat attendu dans la console : 
// Félicitations, vous avez trouvé !

// Résultat attendus dans la console :

// Félicitations, vous avez trouvé en 3 essais !

// Exemples de résultat attendus dans la console :

// Trop petit ! Il vous reste 4 essais !

// Trop grand ! Il vous reste 1 essai !