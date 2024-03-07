let firstNumber = Number(prompt("Une idée de chiffre ?"));
let secondNumber = Number(prompt("Une idée d'un AUTRE chiffre peut-être ?"));

let addition = firstNumber + secondNumber;
let soustraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
let exposant = firstNumber ** secondNumber;

console.log(
      `Le résultat est 
      ${addition} pour l'addition,
      ${soustraction} pour la soustraction,
      ${multiplication} pour une multiplication,
      ${division} pour la fameuse division et
      ${exposant} pour un exposant, même si je sais pas ce que c'est !`
);

/* Résultat attendu pour 10 et 2, dans la console :

10 x 2 = 20
10 - 2 = 8
10 + 2 = 12
10 / 2 = 5
10 exposant 2 = 100

*/