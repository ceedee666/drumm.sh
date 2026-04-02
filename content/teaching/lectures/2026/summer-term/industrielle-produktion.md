---
title: "Industrielle Produktion"
language: "de"
published: true
tags:
  ["FH Aachen", "Teaching", "Industrielle Produktion", "ESPHome", "IoT", "MQTT"]
---

## Internet-of-Things MVP

Dieses Modul wird gemeinsam mit Prof. Meinecke durchgeführt. Die Aufgabe im Module ist Entwicklung eines Internet-of-Things MVP.

### Kontext & Zielsetzung

In diesem Projekt übernehmen Sie die Rolle eines Systemarchitekten. Ziel ist
es, ein Minimum Viable Product (MVP) im Bereich Internet-of-Things (IoT) zu
konzipieren und umzusetzen, welches ein relevantes Problem im privaten oder
industriellen Umfeld adressiert. Da die reine Codierung dank moderner
KI-Werkzeuge (ChatGPT, Claude Code, GitHub Copilot etc.) beschleunigt wird,
liegt Ihr Fokus in dieser Veranstaltung auf:

1. Systemarchitektur: Die saubere Trennung von Datenakquise, Verarbeitung und
   Service-Logik.
1. KI-Methodenkompetenz: Der strukturierte, reflektierte und effiziente Einsatz
   von KI-Tools zur Problemlösung.

### Technische Anforderungen (Architektur-Vorgabe)

Ihr System muss zwingend in drei logische, funktional getrennte Schichten
unterteilt sein, die über Schnittstellen kommunizieren:

1. Layer 1: Datenaufnahme (Edge)
   - Einsatz eines Microcontrollers (z. B. ESP32, Raspberry Pi Pico).
   - Physische Aufnahme von Sensordaten (z. B. Temperatur, Vibration, Licht,
     Kamerabild)
   - Vorverarbeitung und Übermittlung der Daten an das Backend.
1. Layer 2: Datenverarbeitung (Backend)
   - Ein vom Microcontroller getrenntes System (lokaler Server, Cloud-Instanz
     oder PC).
   - Empfang, Speicherung und Weiterverarbeitung der Daten.
1. Layer 3: Anwendung (Service Layer)
   - Bereitstellen einer Funktionalität auf Basis der verarbeiteten Daten.
   - Mindestanforderung: Nachrichten/Alerts bei Schwellenwertüberschreitung.
     Schwellwert wird aus der Kombination mehrerer Sensordaten erzeugt
   - Optimum: Automatisierte Regelkreise (z. B. Aktor-Ansteuerung) oder
     vorausschauende Analysen.

## Beispielarchitektur

Die Datenaufnahme soll mit Hilfe von Mikrocontrollern und Sensoren umgesetzt
werden. Ein Möglichkeit ist die Verwendung von:

- Mikrocontrollern
- [ESPHome](https://esphome.io/)
- dem [IoT Stack](https://codeberg.org/ceedee666/simple-iot-stack).

### Videos

Auf meinem [YouTube-Kanal](https://www.youtube.com/c/christiandrumm) finden Sie
eine
[Playlist](https://www.youtube.com/playlist?list=PLl09U8aTDcv0vQ-IPRWS0XJuftaNxViSB)
mit Videos. In diesen zeige ich beispielsweise, wie Sie ESPHome
auf dem [Mikrocontroller installieren](https://youtu.be/C-klK8bkEC8) oder wie
Sie [Daten vom Mikrocontroller zum
IoT-Stack](https://youtu.be/6pIvFdLZ-2c?si=EXxJlPWdLc2OX6rS) senden können.

### Virtuelle Maschine in der Cloud

Falls Sie für die Datenaufnahme einen Server benötigen können Sie [Oracle
Cloud](https://www.oracle.com/cloud/) bzw. die [Google Cloud
Platform](https://console.cloud.google.com/) nutzen, um eine virtuelle Maschine
zu hosten.

Alternative können Sie z.B. auch einen Einplatinencomputer (z.B. einen
[Raspberry Pi](https://www.raspberrypi.com/)) als Server verwenden.

### Mikrocontroller

Ein guter Ausgangspunkt um mit Mikrocontrollern und Sensoren zu starten sind
folgende Komponenten:

- D1 Mini (z.B. [D1 Mini V3 NodeMCU](https://www.az-delivery.de/products/d1-mini-v3))
- [Breadboard](https://www.az-delivery.de/products/breadboard) und [Kabel](https://www.az-delivery.de/products/3er-set-40-stk-jumper-wire-m2m-f2m-f2f)
- Sensoren, beispielsweise ein
  [Sensorkit](https://www.az-delivery.de/collections/bausaetze-kits/products/16-in-1-kit-zubehorset-fur-raspberry-pi-arduino-und-andere-mikrocontroller)

Bitte beschaffen Sie die Hardware **rechtzeitig** vor Beginn der Vorlesungen!

In diesem
[Codeberg-Repository](https://codeberg.org/ceedee666/iot-introduction) finden
Sie Informationen um mit dem Mikrocontroller zu starten.

## Deliverables

| Deliverable                     | Inhalt                                                                                                                                                                                         |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Konzeptpräsentation**         | Problembeschreibung: Welches industrielle Problem lösen Sie?                                                                                                                                   |
|                                 | Lösungskonzept: Skizze des geplanten MVPs.                                                                                                                                                     |
|                                 | Architektur-Diagramm: Darstellung der 3 Layer und der Kommunikationsprotokolle (z. B. MQTT, HTTP, WebSockets).                                                                                 |
|                                 | KI-Strategie: Welche KI-Tools planen Sie für welche Aufgaben ein (z. B. Architekturberatung, Code-Generierung, Erstellung von Testdaten)?                                                      |
| **Ergebnispräsentation & Demo** | Live-Demo: Vorführung des funktionierenden Systems.                                                                                                                                            |
|                                 | Technischer Durchstich: Nachweis der Datenfluss-Kette vom Sensor bis zum Service.                                                                                                              |
|                                 | Vergleich: Abgleich der erreichten Ergebnisse mit der ursprünglichen Zielsetzung aus Deliverable 1.                                                                                            |
| **KI-Reflektion**               | In dieser separaten Kurzpräsentation (oder einem dedizierten Teil der Abschlussdokumentation) reflektieren Sie Ihren Arbeitsprozess mit der KI.                                                |
|                                 | Prompt-Engineering: Zeigen Sie Beispiele für besonders erfolgreiche (oder gescheiterte) Prompts. Wie haben Sie die KI-Werkzeuge instruiert, um die Hardware-Integration zu lösen?              |
|                                 | Fehlerkultur & Debugging: Wo haben die KI-Werkzeuge Fehler gemacht (Halluzinationen, veraltete Bibliotheken)? Wie haben Sie diese Fehler identifiziert und behoben?                            |
|                                 | Mensch-Maschine-Arbeitsteilung: Welche Architektur-Entscheidungen mussten Sie aktiv treffen, weil die KI-Werkzeuge keine Übersicht über das Gesamtsystem hatte?                                |
|                                 | Efficiency Analysis & Kosten: Schätzen Sie den Zeitgewinn durch die KI-Werkzeuge ein. Wo war sie eine Bremse (z.B. durch komplizierten Code)? Welche Kosten sind durch die Nutzung entstanden? |
