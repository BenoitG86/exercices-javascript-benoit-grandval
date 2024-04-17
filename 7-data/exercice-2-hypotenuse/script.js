// function pythagore(coteA, coteB, coteC) {
//       if ( coteC ** 2 === coteA ** 2 + coteB ** 2 ) {
// console.log(`La longueur de l'hypothénuse est : ${coteC}`);
//       } else {
//             console.log(`Le triangle n'est pas rectangle`)
//       }
// }

function pythagore(coteA, coteB) {
      let coteC = coteA ** 2 + coteB ** 2;
      coteC = Math.sqrt(coteC);
      console.log(`La longueur de l'hypothénuse est : ${coteC}`);
}
pythagore(15, 8);

