let prixHT = Number(prompt("Entrez ici le prix HT de votre item"));
document.write(``);

let taux = 1.15;
let prixTTC = prixHT * taux;

document.write(
      `Le prix HT est de ${prixHT}. <br>
      Le prix TTC est de ${prixTTC} pour un taux de ${taux}.`);

/* Résultat attendu dans la console, pour un prixHT de 100€ : 
prix HT : 100 €
prix TTC : 115 €
*/