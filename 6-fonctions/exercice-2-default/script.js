function prenom(prenom) {
      if (prenom == undefined) {
            return `Un pour toi, un pour moi`
      } else {
            return `Un pour ${prenom}, un pour moi`
      }
};

console.log(prenom(`Georges`));