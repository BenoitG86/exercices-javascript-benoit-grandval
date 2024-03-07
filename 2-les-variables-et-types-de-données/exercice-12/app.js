let phrase1 = 'L\'apprentissage du JavaScript est "passionnant".';
let phrase2 = "L'apprentissage du JavaScript est \"passionnant\".";
let phrase3 = `L'apprentissage du JavaScript est "passionnant".`;

console.log(
      `
      ${phrase1}
      ${phrase2}
      ${phrase3}
      `);

// Résultat attendu dans la console :

// L'apprentissage du JavaScript est "passionnant".
// L'apprentissage du JavaScript est "passionnant".
// L'apprentissage du JavaScript est "passionnant".