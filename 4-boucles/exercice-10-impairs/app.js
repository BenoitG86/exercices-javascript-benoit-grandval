let nombre = parseInt(prompt('Choissisez un nombre au choix'));
let startingNombre = 1;

while (startingNombre < nombre) {
      startingNombre += 2;
      if (startingNombre > nombre){
            break;
      }
      document.write(startingNombre + '<br>');
      
}


// Résultat dans la console pour N = 10 :

// 1
// 3
// 5
// 7
// 9