let week = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

for (let index = 0; index < week.length; index++) {

      if (index === week.length - 1) {
            document.write(`Le jour ${index + 1} de la semaine est ${week[index]} et le ${week[index]} c'est gratuit. <br>`);
      } else {
            document.write(`Le jour ${index + 1} de la semaine est ${week[index]}<br>`);
      }

}

