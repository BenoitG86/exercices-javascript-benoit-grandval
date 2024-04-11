const nombres = [10, 22, 3, 47, 5, 600]

// 1. Calculez la somme des nombres et affichez **"La somme des nombres du tableau est : SOMME"**.
let sum = 0;
for (let index = 0; index < nombres.length; index++) {
      sum += nombres[index];
}
console.log(`La somme des nombres du tableau est ${sum}`);

// 2. Calculez la moyenne des nombres et affichez **"La moyenne des nombres du tableau est : MOYENNE"**.
avg = sum / nombres.length;
console.log(`La moyenne des nombres du tableau est ${avg}`);

// 3. Trouvez le plus grand nombre du nombres et affichez **"Le plus grand nombre du tableau est : MAX"**.

let max = nombres[0];
for (let nombre of nombres) {
      if (max < nombre) {
            max = nombre;
      }
}
console.log(`Le plus grand nombre du tableau est ${max}`);

// 4. Trouvez le plus petit nombre du nombres et affichez **"Le plus petit nombre du tableau est : MIN"**.
let min = nombres[0];
for (let nombre of nombres) {
      if (min > nombre) {
            min = nombre;
      }
}
console.log(`Le plus petit petit nombre du tableau est ${min}`);

// Résultat dans la console :
// La somme des nombres du tableau est 87
// La moyenne des nombres du tableau est 17.4
// Le plus grand nombre du tableau est 47
// Le plus petit nombre du tableau est 3