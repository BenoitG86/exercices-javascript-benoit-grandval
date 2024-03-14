let mot = prompt("Insérez un mot de votre choix ( mais pas de vulgarité SVP! ) :")
let phrase = '';

// for (let index = 0; index < mot.length; index++) {
//       document.write(`${mot[index]}`);
//       if (index < (mot.length-1)) {
//             document.write(`-`);
//       }
// }

for (let index = 0; index < mot.length; index++) {
      phrase += mot[index];
      if (index < (mot.length-1)) {
            phrase += `-`;
      }
}
document.write(phrase);



/* 
Résultat attendu pour le mot "code", dans la console :

c-o-d-e
*/