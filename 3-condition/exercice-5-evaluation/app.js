let yourGrade = Number(prompt("Quelle est votre note, est-elle bonne, nous le verrons après la suite !"));

// if (yourGrade < 12) {
//       document.write(`Pas de mention`);
// } else if (yourGrade < 14) {
//       document.write(`Passable`);
// } else if (yourGrade < 16) {
//       document.write(`Bien`);
// } else if (yourGrade < 18) {
//       document.write(`Très bien`);
// } else if (yourGrade < 20) {
//       document.write(`Excellent`);
// } else if (yourGrade === 20) {
//       document.write(`Extraordinaire`);
// } else {
//       document.write(`Extraordinaire..ment pas une valeur correcte`);
// }

document.write(
      (yourGrade < 12 ? 'Pas de mention'
      : yourGrade < 14 ? 'Passable'
      : yourGrade < 16 ? 'Très bien'
      : yourGrade < 18 ? 'Excellent'
      : yourGrade === 20 ? 'Extraordinaire'
      : 'Vous vous êtes gourés quelque part.')
);
/* Résultat attendu dans la console :

pour une note < 12
Pas de mention

Pour 12 et +
Passable

Pour 14 et +
Bien

Pour 16 et +
Très bien

Pour 18 et +
Excellent

Pour 20
Extraordinaire */