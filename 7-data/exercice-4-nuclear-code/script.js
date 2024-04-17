let palindrom = 'cornichon';
let wordLength = Math.ceil(palindrom.length/2)

let firstHalf = palindrom.slice(0, wordLength);
let secondHalf = palindrom.slice(wordLength);

firstHalf 

console.log(firstHalf);
console.log(secondHalf);

if ( firstHalf.sort() === secondHalf.sort() ) {
      console.log(`Le mot ${palindrom} est clairement un palindrome`)
} else {
      console.log(`Le mot ${palindrom} n'est à priori pas un palindrome`)
}


// Écrivez une fonction qui détermine si une chaîne de caractères donnée 
// est un palindrome. Un palindrome est un mot ou une phrase qui peut 
// se lire de la même manière de gauche à droite ou de droite à gauche, 
// en conservant le même sens. La fonction doit retourner un booléen : 
// true si la chaîne est un palindrome, false sinon.
// Exemples de palindromes : “kayak”, “radar”, “été”, “ressasser”.