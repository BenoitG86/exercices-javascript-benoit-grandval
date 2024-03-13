let year = parseInt(prompt("Indiquez l'année dont vous souhaitez connaître la bissextilité :"));

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
      document.write(`L'année ${year} est bissextile ! 🛺🛺🛺`)
} else {
      document.write(`L'année ${year} n'est pas bissextile ! 🚗`)
};

// Exemples de résultat attendu dans la console :

// L'année 2024 est bissextile.
// L'année 2100 n'est pas bissextile.