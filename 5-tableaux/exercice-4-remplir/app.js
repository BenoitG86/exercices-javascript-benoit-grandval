let tableau = [];
let tableauPair = [];

for (let nombre = 1; nombre <= 10; nombre++) {
      tableau.push(nombre);
}
console.log(`Les dix premiers nombres sont : ${tableau}`)


for (let index = 2; index <= 20; index += 2) {
      tableauPair.push(index);
      
}
console.log(`Les dix premiers nombres paires sont : ${tableauPair}`)
