function isAnagram(mot1, mot2) {
      mot1 = mot1.split('');
      mot1.sort();
      mot1 = mot1.join('');

      mot2 = mot2.split('');
      mot2.sort();
      mot2 = mot2.join('');

      if (mot1 === mot2) {
            return true;
      } else {
            return false;
      }
}

console.log(isAnagram('chocolat','chocolat'));