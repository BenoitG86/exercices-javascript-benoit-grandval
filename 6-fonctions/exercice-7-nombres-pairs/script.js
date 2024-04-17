function estPair(number) {  
      if (number%2 == 0) {
            return `Votre nombre est pair`;
      } else {
            return `Votre nombre est impair`;            
      }
}

number = Number(prompt(`Choissisez un nombre SVP`, 42));
console.log(estPair(number));

