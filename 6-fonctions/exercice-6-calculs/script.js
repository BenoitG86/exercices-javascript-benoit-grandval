let a = Number(prompt(`Choissisez un nombre a`));
let b = Number(prompt(`Choissisez un nombre b`));
// let operation = prompt(`Choissisez un type d'opération`);


function addition(a, b) {

      if (isNaN(a) || isNaN(b)) {
            return `Paramètres incorrects.`;
      } else {
            return a + b;
      }
}

function soustraction(a, b) {

      if (isNaN(a) || isNaN(b)) {
            return `Paramètres incorrects.`;
      } else {
            return a - b;
      }
}

function multiplication(a, b) {

      if (isNaN(a) || isNaN(b)) {
            return `Paramètres incorrects.`;
      } else {
            return a * b;
      }

}

function division(a, b) {

      if (isNaN(a) || isNaN(b)) {
            return `Paramètres incorrects.`;
      } else {
            return a / b;
      }
}

// function calcul(operation) {

//       switch (operation) {
//             case somme || addition:
//                   addition(a, b)
//                   break;
//             case soustraction:
//                   soustraction(a, b)
//                   break;
//             case multiplication:
//                   multiplication(a, b)
//                   break;
//             case division:
//                   division(a, b)
//                   break;
//             default:
//                   `Erreur`
//                   break;
//       }
// }
// console.log(calcul());
// calcul("addition", 5, 2)

let calcul = addition(a, b);
console.log(calcul);