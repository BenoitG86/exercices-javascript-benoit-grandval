let number1 = Number(prompt("Indiquez un chiffre"));
let number2 = Number(prompt("Quel est deuxième chiffre chèr.e individu ?"));

if (number1 < number2) {
      document.write(`Votre ${number1} est assez clairement inférieur à ${number2}`);      
}
else if (number1 == number2){
      document.write(`Votre ${number1} est assez similaire à ${number2}`);      
}
else {
      document.write(`Votre ${number1} est assez certainement supérieur à ${number2}`);      
}

// Exemples de résultats attendus dans la console :

// Le nombre 1 est plus grand que le nombre 2

// Le nombre 1 est plus petit que le nombre 2

// Les deux nombres sont égaux
