---
title: "Übungsaufgaben - DMN"
language: "de"
published: true
tags: ["FH Aachen", "Teaching", "Informationssysteme", "DMN"]
---

## Schlüsselbegriffe

- Entscheidungstabelle
- Eingabewerte & Ausgabewerte
- Regelreihenfolge
- Hit-Policy

## 1. Versandkostenberechnung

Ein Online-Shop berechnet die Versandkosten basierend auf dem Bestellwert.

- Wenn der Bestellwert unter 50 € liegt, betragen die Versandkosten 5 €.
- Liegt der Bestellwert zwischen 50 € und 100 €, werden Versandkosten von 2 €
  berechnet.
- Ab einem Bestellwert von 100 € entfallen die Versandkosten vollständig.

Modellieren Sie diesen Entscheidungsprozess als DMN-Tabelle.

## 2. Filmempfehlung

Ein Streaming-Dienst möchte seinen Nutzern basierend auf deren Alter eine
Filmempfehlung aussprechen.

- Nutzer unter 12 Jahren erhalten eine Empfehlung für Animationsfilme.
- Nutzer zwischen 12 und 17 Jahren erhalten Empfehlungen für Abenteuerfilme und
  Teenie-Komödien.
- Nutzer zwischen 18 und 64 Jahren bekommen Vorschläge für Action-, Drama- und
  Thriller-Filme.
- Nutzer ab 65 Jahren erhalten Empfehlungen für Klassiker und Dokumentationen.

Modellieren Sie diesen Entscheidungsprozess als DMN-Tabelle.

## 3. Kreditbewertung

Eine Bank entscheidet über die Kreditvergabe basierend auf zwei Kriterien: der
Kreditwürdigkeit und dem monatlichen Einkommen des Antragstellers.

- Die Kreditwürdigkeit kann als hoch, mittel oder niedrig eingestuft werden.
- Das Einkommen wird in drei Bereiche unterteilt: über 3000 €, zwischen 1500 €
  und 3000 €, sowie unter 1500 €.

#### Entscheidungslogik

- Antragsteller mit hoher Kreditwürdigkeit erhalten unabhängig vom Einkommen
  eine Kreditzusage, außer wenn ihr Einkommen unter 1500 € liegt, dann wird ihr
  Antrag geprüft.
- Personen mit mittlerer Kreditwürdigkeit erhalten eine Kreditzusage, sofern
  ihr Einkommen über 3000 € liegt. Liegt ihr Einkommen zwischen 1500 € und 3000
  €, wird der Antrag geprüft. Falls ihr Einkommen unter 1500 € liegt, wird der
  Kredit abgelehnt.
- Personen mit niedriger Kreditwürdigkeit erhalten unabhängig vom Einkommen
  eine Absage.

Modellieren Sie diesen Entscheidungsprozess als DMN-Tabelle.

## 4. Bestellung eines Mobilfunkvertrags

Ein Mobilfunkanbieter bietet verschiedene Tarife basierend auf dem benötigten
Datenvolumen und der Nutzung einer Telefonflatrate an.

- Nutzer mit weniger als 5 GB Datenvolumen und ohne Telefonflatrate erhalten
  den Tarif "Basic" für 9,99 € pro Monat.
- Nutzer mit weniger als 5 GB und einer Telefonflatrate erhalten den Tarif
  "Smart" für 14,99 €.
- Nutzer mit einem Datenvolumen zwischen 5 GB und 20 GB ohne Telefonflatrate
  erhalten den Tarif "Smart" für 19,99 €, während sie mit einer Telefonflatrate
  auf den Tarif "Comfort" für 24,99 € hochgestuft werden.
- Falls das Datenvolumen über 20 GB liegt, erhalten Kunden ohne Telefonflatrate
  den Tarif "Comfort" für 29,99 € und mit Telefonflatrate den Tarif "Premium" für
  39,99 €.

Modellieren Sie diese Entscheidung als DMN-Tabelle.

## 5. Rabattberechnung im Online-Shop

Ein Online-Shop vergibt verschiedene Rabatte basierend auf zwei Faktoren:

- Bestellwert (€)
- Kundenstatus (Normaler Kunde, VIP-Kunde, Mitarbeiter)

#### Entscheidungslogik

- Mitarbeiter erhalten immer einen pauschalen 30 % Rabatt, unabhängig vom
  Bestellwert.
- VIP-Kunden erhalten abhängig vom Bestellwert gestaffelte Rabatte:
  - Ab 500 € → 20 % Rabatt
  - 100 € bis 499 € → 10 % Rabatt
  - Unter 100 € → kein Rabatt
- Normale Kunden erhalten abhängig vom Bestellwert ebenfalls gestaffelte
  Rabatte:
  - Ab 500 € → 10 % Rabatt
  - 100 € bis 499 € → 5 % Rabatt
  - Unter 100 € → kein Rabatt

Falls ein Kunde mehreren Kategorien zugeordnet werden kann (z. B. VIP-Kunde und
Mitarbeiter), hat der höchste Rabatt Vorrang.

Aufgabe: Modellieren Sie diesen Entscheidungsprozess als DMN-Tabelle mit zwei
Eingaben (Bestellwert, Kundenstatus) und einer Ausgabe (Rabatt in %). Verwenden
Sie eine geeinte Hit-Policy, damit Kunden immer den höchsten Rabatt erhalten.
