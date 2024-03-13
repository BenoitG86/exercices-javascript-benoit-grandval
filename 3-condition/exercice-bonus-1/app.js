let day = parseInt(prompt("On est quel jour hui ?"));

switch (day) {
      case 1:
            document.write(`Apparemment nous sommes lundi, soit le jour n° ${day} de la semaine`);
            break;
      case 2:
            document.write(`Apparemment nous sommes mardi, soit le jour n° ${day} de la semaine`);
            break;
      case 3:
            document.write(`Apparemment nous sommes mercredi, soit le jour n° ${day} de la semaine`);
            break;
      case 4:
            document.write(`Apparemment nous sommes jeudi, soit le jour n° ${day} de la semaine`);
            break;
      case 5:
            document.write(`Apparemment nous sommes vendredi, soit le jour n° ${day} de la semaine`);
            break;
      case 6:
            document.write(`Apparemment nous sommes samedi, soit le jour n° ${day} de la semaine`);
            break;
      case 7:
            document.write(`Apparemment nous sommes dimanche, soit le jour n° ${day} de la semaine`);
            break;
      default:
            document.write(`Apparemment vous avez écrit nawak`);
}

// Exemples de résultat attendu dans la console :

// Pour 1
// Lundi
// pour 2
// Mardi
// etc.