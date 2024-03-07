let a = 1;
let b = 5;

// Résultat attendu :
// a => 5 et  b => 1

let x = a;
a = b;
b = x;

console.log(a);
console.log(b);