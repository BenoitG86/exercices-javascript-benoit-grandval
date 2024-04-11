let week = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
let index = 0;

// console.log (week.length);
// console.table (week);

for (let day of week) {
      if (index < 6) {
            console.log(`${day}, des patates`)
            index++;
      } else {
            console.log(`${day}, des patates, encore et encore`)
      }
}