[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/se3np40i)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19822480&assignment_repo_type=AssignmentRepo)
# Examen juni 2025

## Classes

/\*\* Maak een klant aan Karel Kleintjes (email: karel.kleintjes@example.com)

- Je maakt onderstaande facturen aan
- Factuur("F2025001", "2025-06-01", 250.0)
- Factuur("F2025002", "2025-03-13", 120.0, true)
- bovenstaande regels maken 2 facturen aan.
- Koppel deze facturen aan Karel Kleintjes als klant.

- Print je zijn facturen uit met de method: printFacturen() --> staat al in de code
- output MOET zoals onderstaande zijn:

```JS
> Facturen voor Karel kleintjes:
> Factuur F2025001: €250.00 - Openstaand
> Factuur F2025002: €120.00 - Betaald
```

- Als laatste zorg je dat dit werkt.
- console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());
- output: Openstaand totaal: 250
  \*/

```JS
// Deze code krijg je
klant1.printFacturen();
console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());

```

## DOM

Zorg ervoor dat:

- Alle klanten in de lijst van klanten komt
- Alle betaalde facturen van de klanten verschijnen van de gekozen klant
- Alle niet betaalde verschijnen
- De facturen kijrgen een kleur op basis van betaald / niet betaald (zie css)
- Klik je op een factuur-regel dan krijg je een popup met de prijs van de factuur
