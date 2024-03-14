let index = 5;

do {
      document.write(`${index} <br>`);
      index--;
      if (index === 0) {
            document.write(`Décollage !!! 🚀`);
            break;
      }

} while (index > 0);

// Résultat attendu dans la console :

// 5
// 4
// 3
// 2
// 1
// Décollage