---
title: "Übungsaufgaben - BPMN: Gateways"
language: "de"
published: true
tags:
  [
    "FH Aachen",
    "Teaching",
    "Informationssysteme",
    "BPMN",
    "Pools",
    "Lanes",
    "Schleifen",
  ]
---

## Schlüsselbegriffe

- Schleifen
- Pools & Lanes

## 1. Matchmaking in einem Online-Spiel

Modellieren Sie folgenden Prozess mit BPMN. Verwenden Sie dazu die Ihnen
bekannten BPMN-Elemente.

Ein Spielerin sucht in einem Online-Spiel (z. B. Fortnite oder League of
Legends) nach einem Match. Der Prozess beginnt, wenn die Spielerin die
Matchmaking-Suche startet. Das System überprüft kontinuierlich, ob genügend
Mitspielerinnen gefunden wurden. Falls ja, startet das Match. Falls nicht, wird
der Suchprozess wiederholt, bis eine Mindestanzahl an Spielerinnen erreicht
ist. Falls nach einer bestimmten Zeit kein vollständiges Match zustande kommt,
erhält die Spielerin die Möglichkeit, die Suche abzubrechen.

Hinweis: Verwenden Sie eine Schleife für die wiederholte Match-Suche.

## 2. Automatische Mahnung bei verspäteten Rückgaben

Modellieren Sie folgenden Prozess mit BPMN. Verwenden Sie dazu die Ihnen
bekannten BPMN-Elemente.

Eine Bibliothek überprüft täglich, ob ausgeliehene Bücher überfällig sind. Der
Prozess beginnt mit der Auswahl aller ausgeliehenen Bücher. Für jedes Buch wird
überprüft, ob die Leihfrist überschritten ist. Falls ja, wird eine Mahnung an
den entsprechenden Nutzer gesendet. Danach wird das nächste Buch überprüft.
Dieser Vorgang wird wiederholt, bis alle ausgeliehenen Bücher geprüft wurden.

Hinweis: Nutzen Sie eine Schleife, um jedes ausgeliehene Buch zu überprüfen.
Verwenden Sie Pools & Lanes, um die beteiligten Rollen darzustellen.

## 3. Terminfindung mit Doodle

Modellieren Sie folgenden Prozess mit BPMN. Verwenden Sie dazu die Ihnen
bekannten BPMN-Elemente.

Ein Nutzerin organisiert eine Terminfindung über die Plattform Doodle. Der
Prozess beginnt mit der Erstellung einer neuen Umfrage durch die Initiatorin.
Danach erhalten die Teilnehmerinnen eine Einladung und geben ihre verfügbaren
Zeiten an. Das System sammelt die Antworten und bestimmt die meistgewählte
Option. Anschließend erhält die Initiatorin eine Übersicht der Ergebnisse und
bestätigt den endgültigen Termin.

Hinweis: Verwenden Sie Pools & Lanes, um die beteiligten Rollen darzustellen.

## 4. Essensausgabe in einer Mensa

Modellieren Sie folgenden Prozess mit BPMN. Verwenden Sie dazu die Ihnen
bekannten BPMN-Elemente.

Eine Kundin holt sich in einer Mensa sein Essen. Der Prozess beginnt, wenn die
Kundin ein Tablett nimmt. Anschließend entscheidet sie sich für eine
Essensoption: normales Gericht, Salatbar oder Wok. Falls die Kundin ein normales
Gericht wählt, muss sie zwischen verschiedenen Gerichten auswählen. Danach kann
sie eine Nachspeise nehmen und schließlich an der Kasse bezahlen.

Hinweis: Verwenden Sie Pools & Lanes, um die beteiligten Rollen darzustellen.
