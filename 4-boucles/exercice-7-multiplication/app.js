let multiple = prompt(`Insérez un nombre à multiplier`);

for (let index = 1; index <= 10; index++) {
      document.write(`${multiple} x ${index} = ${multiple*index}<br>`);
      
}

// Résultat attendu dans la console :

// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70