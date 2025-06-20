/** Maak een klant aan Karel Kleintjes (email: karel.kleintjes@example.com)
 * Je maakt onderstaande facturen aan
 * Factuur("F2025001", "2025-06-01", 250.0)
 * Factuur("F2025002", "2025-03-13", 120.0, true)
 * bovenstaande regels maken 2 facturen aan.  V
 * Koppel deze facturen aan Karel Kleintjes als klant.  V
 *
 * Print je zijn facturen uit met de method: printFacturen() --> staat al in de code
 * output MOET zoals onderstaande zijn:
 *     Facturen voor Karel kleintjes:
 *      Factuur F2025001: €250.00 - Openstaand
 *      Factuur F2025002: €120.00 - Betaald
 *
 * Als laatste zorg je dat dit werkt.  V
 * console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());
 * output: Openstaand totaal: 250
 */



const facturen = require("./Admin")

const factuur1 = new facturen.Factuur("F2025001", "2025-06-01", 250.0)
const factuur2 = new facturen.Factuur("F2025002", "2025-03-13", 150)

factuur2.betaald = true

const karel = new facturen.Klant(1, "Karel Kleintjes", "KarelKleintjes@email.com")
karel.facturen = [factuur1, factuur2]

karel.printFacturen();
console.log("Openstaand totaal:",karel.getTotaalBedragOpenstaand());