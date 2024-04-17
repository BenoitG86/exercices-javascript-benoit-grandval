function nuclearLaunchCode() { 
      let agreed = confirm(`Avez vous les droits pour accéder aux codes nucléaires ? Soyez honnête s’il vous plait, cela peut être dangereux.`);
      if (agreed) {
            alert(`Azy voilà les codes : 1234!!`)
      } else {
            alert(`Vous n'avez pas les droits !!`)
      }
}
nuclearLaunchCode();