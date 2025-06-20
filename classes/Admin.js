// Factuur Klasse
class Factuur {
  constructor(factuurnummer, datum, bedrag, betaald = false) {
    this.factuurnummer = factuurnummer;
    this.datum = new Date(datum);
    this.bedrag = bedrag;
    this.betaald = betaald;
  }

  markeerAlsBetaald() {
    this.betaald = true;
  }

  toString() {
    return `Factuur ${this.factuurnummer}: €${this.bedrag.toFixed(2)} - ${
      this.betaald ? "Betaald" : "Openstaand"
    }`;
  }
}

// Klant Klasse
class Klant {
  constructor(id, naam, email) {
    this.id = id;
    this.naam = naam;
    this.email = email;
    this.facturen = [];
  }

  voegFactuurToe(factuur) {
    if (factuur instanceof Factuur) {
      this.facturen.push(factuur);
    } else {
      throw new Error(
        "Alleen instanties van Factuur kunnen worden toegevoegd."
      );
    }
  }

  checkBetaald() {
    // kijken of de factuur betaald is en dit een titel geven
    this.facturen.forEach(factuur => {
    if (factuur.betaald) {return("betaald")
    } else {return("openstaand")}
    });
  }

  printFacturen() {
    // de info van de facturen printen
    this.facturen.forEach(factuur => {
      console.log(`Factuur ${factuur.factuurnummer} ${factuur.bedrag} - ${this.checkBetaald()}`);
    });
  }

  getOpenstaandeFacturen() {
    return this.facturen.filter((f) => !f.betaald);
  }

  getTotaalBedragOpenstaand() {
    let totaalprijs = 0
    // bereken het totaal van de facturen die nog niet betaald zijn.
    this.facturen.forEach(factuur => {
      if (factuur.betaald == false) {
        totaalprijs += factuur.bedrag
      }
    });
    return totaalprijs
  }
}

module.exports = {
  Factuur, Klant
};
