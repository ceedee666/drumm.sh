---
title: "Übungsaufgaben - BPMN: Gateways"
language: "de"
published: true
tags:
  [
    "FH Aachen",
    "Teaching",
    "Relationenmodell",
    "Normalisierung",
    "3. Normalform",
  ]
---

## Normalisierung bis zur 3. Normalform

Überführen Sie die folgenden Tabellen schrittweise in die 3. Normalform.

### Aufgabe 1 – Lieferantentabelle

| LieferantNr | LieferantName | Stadt      | PLZ   | ProduktNr  | ProduktName         | Lieferbedingungen   |
| ----------- | ------------- | ---------- | ----- | ---------- | ------------------- | ------------------- |
| L1          | Müller GmbH   | Köln       | 50667 | P1, P2     | Schraube, Mutter    | Express, Standard   |
| L2          | Schmitt AG    | Aachen     | 52062 | P3         | Bolzen              | Standard            |
| L3          | SchraubenMax  | Bonn       | 53111 | P4, P5     | Nagel, Dübel        | Standard, Overnight |
| L4          | Eisenhandel   | Köln       | 50667 | P6         | Zange               | Express             |
| L5          | TopSupply     | Düsseldorf | 40210 | P7, P8, P9 | Hammer, Säge, Feile | Overnight, Standard |

### Aufgabe 2 – Kursanmeldung

| MatrNr | Name    | Studiengänge          | KursNr | KursName       | DozentID | DozentVorname | DozentNachname | Note |
| ------ | ------- | --------------------- | ------ | -------------- | -------- | ------------- | -------------- | ---- |
| 1001   | Meier   | BWL, Informatik       | K101   | Datenbanken    | D1       | Thomas        | Schmitt        | 1.7  |
| 1002   | Schmidt | BWL                   | K101   | Datenbanken    | D1       | Thomas        | Schmitt        | 2.0  |
| 1003   | Neumann | Wirtschaftsinformatik | K102   | Programmierung | D2       | Maria         | Bauer          | 2.3  |
| 1001   | Meier   | BWL, Informatik       | K102   | Programmierung | D2       | Maria         | Bauer          | 2.7  |
| 1004   | Lange   | Informatik            | K101   | Datenbanken    | D1       | Thomas        | Schmitt        | 1.3  |

### Aufgabe 3 – Kundenaufträge

| AuftragNr | KundeNr | Kundenname | Produkte               | Preise     | Mengen   | Zahlungsart |
| --------- | ------- | ---------- | ---------------------- | ---------- | -------- | ----------- |
| A1        | K1      | Maier      | Laptop                 | 1200       | 1        | Rechnung    |
| A2        | K2      | Schulz     | Monitor, Maus          | 200, 20    | 2, 3     | Vorkasse    |
| A3        | K3      | Becker     | Drucker, Papier, Tinte | 300, 5, 15 | 1, 10, 2 | PayPal      |
| A4        | K1      | Maier      | Tastatur               | 45         | 1        | Rechnung    |
| A5        | K4      | Klein      | Bildschirm, Kabel      | 150, 10    | 1, 2     | Vorkasse    |

### Aufgabe 4 – Filmverleih

| KundeID | Kundenname | Filme             | Verleihdaten           | Rückgabedaten          | Ort     |
| ------- | ---------- | ----------------- | ---------------------- | ---------------------- | ------- |
| K1      | Müller     | Matrix, Inception | 2024-01-10, 2024-01-12 | 2024-01-15, 2024-01-17 | Berlin  |
| K2      | Schulze    | Matrix            | 2024-01-13             | 2024-01-18             | Berlin  |
| K3      | Neumann    | Avatar            | 2024-01-11             | 2024-01-16             | Köln    |
| K1      | Müller     | Star Wars         | 2024-01-20             | 2024-01-25             | Berlin  |
| K4      | Lange      | Herr der Ringe    | 2024-01-22             | 2024-01-27             | Hamburg |

### Aufgabe 5 – Artikelkatalog

| ArtikelNr | ArtikelName | Kategorien | KategorieNamen         | Lagerorte    | Hersteller |
| --------- | ----------- | ---------- | ---------------------- | ------------ | ---------- |
| A1        | USB-Stick   | K1, K3     | Speicher, Zubehör      | A1-02        | TechComp   |
| A2        | Tastatur    | K2         | Eingabe                | A1-03        | KeyMakers  |
| A3        | Maus        | K2, K3     | Eingabe, Zubehör       | A1-03, A1-04 | KeyMakers  |
| A4        | Monitor     | K4         | Anzeige                | A2-01        | ViewBest   |
| A5        | Webcam      | K3, K5     | Zubehör, Kommunikation | A1-01, A2-02 | TechComp   |
