let mot = prompt("Insérez un mot de votre choix ( mais pas de vulgarité SVP! ) :")

for (let index = 0; index < mot.length; index++) {
      document.write(`${mot[index]}`);
      if (index < (mot.length-1)) {
            document.write(`-`);
      }
}


/* 
Résultat attendu pour le mot "code", dans la console :

c-o-d-e
*/