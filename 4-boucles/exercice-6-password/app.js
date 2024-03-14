let mot = prompt("Insérez un mot de votre choix ( mais pas de vulgarité SVP! ) :")

for (let index = 0; index < mot.length; index++) {
      document.write(`${mot[index]} <br>`);
}

/* Résultat attendu pour le mot "html", dans la console :

h
t
m
l */