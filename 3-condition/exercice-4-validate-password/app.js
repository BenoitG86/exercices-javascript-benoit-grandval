let userPassword = prompt("Quel est votre mot de passe ? Il doit contenir entre 5 à 12 caractères !");
let userPasswordMinLength = Number(5);
let userPasswordMaxLength = Number(12);

if (userPassword.length < userPasswordMinLength || userPassword.length > userPasswordMaxLength) {
      console.log("Mot de passe invalide");
      if (userPassword.length < userPasswordMinLength) {
            document.write(`Votre mot de passe ${userPassword} contient ${userPassword.length} caractères, il lui manque donc ${userPasswordMinLength - userPassword.length} caractères`);
      } else {
            document.write(`Votre mot de passe ${userPassword} contient ${userPassword.length} caractères, il a donc ${userPassword.length - userPasswordMaxLength} caractères de trop`);
      }
} else {
      console.log("Mot de passe valide");
      document.write(`Votre mot de passe ${userPassword} contient ${userPassword.length} caractères`);
}

// Exemples de résultats attendus dans la console :

// Mot de passe valide
// Mot de passe invalide