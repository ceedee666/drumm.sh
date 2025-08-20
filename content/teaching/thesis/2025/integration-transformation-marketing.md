---
title: "Konzeption und Realisierung einer skalierbaren Integrations- und Transformationsarchitektur für digitales Marketing"
language: "de"
published: true
tags: ["FH Aachen", "Thesis", "Intergration", "Marketing"]
---

## Abstract

Das Ziel dieser Arbeit besteht in der Konzeption und Realisierung einer
skalierbaren Integrations- und Transformationsarchitektur für digitales
Marketing. Im Fokus steht die Entwicklung eines Backend-Systems, das
verschiedene externe Datenquellen automatisiert erschließt, verarbeitet und
über eine standardisierte RESTful API (eine Schnittstelle, die den
REST-Prinzipien folgt und Ressourcenzugriffe über HTTP-Methoden wie GET, POST,
PUT oder DELETE ermöglicht) für Web- und App-Frontends sowie andere digitale
Plattformen verfügbar macht.

Die technische Basis bildet das PHP-Framework Laravel, das eine saubere
Trennung von Datenhaltung, Anwendungslogik und API-Schnittstellen ermöglicht.
Zur Steuerung und Orchestrierung der externen Datenquellen wird zusätzlich die
Workflow-Engine n8n eingesetzt, die durch grafische Prozessmodellierung eine
flexible Erweiterbarkeit sicherstellt.

Das geplante System soll es ermöglichen, neue Datenquellen modular zu
integrieren und verschiedene Transformationsprozesse - etwa Zusammenfassungen
von Textinhalten oder Kategorisierungen - als Hintergrundprozesse zu
realisieren. Ein weiteres Ziel ist die Entwicklung eines Admin-Dashboards, über
das Endnutzer Inhalte verwalten und eigene Daten in das System einpflegen
können. Besondere Beachtung finden dabei Aspekte der Sicherheit und des
Datenschutzes, insbesondere durch den Einsatz lokaler Sprachmodelle und die
vollständige Verarbeitung innerhalb der Systemgrenzen.

Die wissenschaftliche Fragestellung lautet:

„Wie kann eine skalierbare Integrations- und Transformationsarchitektur für
digitales Marketing entwickelt werden, die externe Datenquellen effizient
einbindet und dabei hohe Anforderungen an Performance, Datenkonsistenz und
Sicherheit erfüllt?“

Dabei wird bewusst auf die Einbindung aktueller Forschungsarbeiten im Bereich
datengetriebener Marketingstrategien, API-First-Design sowie skalierbarer
Webarchitekturen Bezug genommen.
