---
title: "Power Automate und Office-Skripte"
language: "de"
published: true
tags:
  [
    "FH Aachen",
    "Teaching",
    "Cloud",
    "Microsoft",
    "Power Automate",
    "Office Script",
  ]
---

## Einführung

Im vorherigen Wintersemester 2022/23 haben wir (Muteba Kayembe und Ahmed Wafi) am
Modul “Cloud Basierte Informationssysteme” teilgenommen, welches vom Professor Christian
Drumm unterrichtet wird. Wir arbeiteten gemeinsam mit 2 weiteren Kommilitonen in
einem Projekt mit der DKV mit Unterstützung von Felix Mausberg.

## Was macht DKV Mobility?

Die DKV Mobility ist ein Unternehmen, das sich auf Mobilitätslösungen für Geschäfts-
und Privatkunden spezialisiert hat.

Die DKV Mobility hat sich auf die Entwicklung von Mobilitätslösungen spezialisiert,
die auf die individuellen Anforderungen ihrer Kunden zugeschnitten sind. Sie bietet
eine breite Palette von Produkten und Dienstleistungen an, um den Kunden eine möglichst
nahtlose Mobilität zu ermöglichen. Hierzu zählen unter anderem:

- Tankkarten: Die DKV Mobility bietet Tankkarten an, mit denen Kunden an Tankstellen
  in ganz Europa bargeldlos tanken können. Dadurch werden zeitraubende Zahlungsprozesse
  vermieden und es besteht die Möglichkeit, von Rabatten und Sonderangeboten zu profitieren.
- Mautabrechnungssysteme: Die DKV Mobility bietet Mautabrechnungssysteme an, die
  es Kunden ermöglichen, Mautgebühren und Straßenbenutzungsgebühren in verschiedenen
  Ländern zu bezahlen. Dadurch werden unnötige Verzögerungen vermieden und die Mobilität
  der Kunden wird verbessert.
- Parklösungen: Die DKV Mobility bietet auch Parklösungen an, mit denen Kunden Parkgebühren
  bargeldlos bezahlen können. Hierzu zählen sowohl Parkhaus- als auch Straßenparkplätze.

  Insgesamt bietet die DKV Mobility ihren Kunden eine Vielzahl von Produkten und Dienstleistungen, um ihre Mobilität zu optimieren und zu erleichtern.

## Unser Projekt

Um den Kunden verschiedene Dienstleistungen anzubieten, benötigt DKV Mobility mehrere
Informationen über den neuen Kunden, wie beispielsweise die Adresse, die Umsatzsteuer
-Identifikationsnummer, der Umsatz, die Mitarbeiteranzahl, etc. Diese Informationen
sind notwendig, um den Kunden identifizieren zu können und ihm passende Angebote
zu machen.

Ziel des Projekts war es, mithilfe von cloudbasierten Informationssystemen automatisiert
Informationen über neue Kunden auf verschiedenen Websites zu scrapen, diese zu filtern
und dann an die API der DKV zu senden, sodass sie weiterverarbeitet werden können.
Dazu wurden verschiedene Skripte und Tools entwickelt, die in der Lage sind, die
Daten effizient und genau zu extrahieren und zu verarbeiten.

Durch die Verwendung von automatisierten Prozessen wird der Zeitaufwand für die Kunden
minimiert, da sie nicht mehr manuell alle notwendigen Informationen eingeben müssen.
Stattdessen genügt, wie uns
unserem Fall, nur der Name des Unternehmens und die Telefonnummer und der Rest wird automatisch
erledigt. Dies erhöht nicht nur die Kundenzufriedenheit, sondern auch die Effizienz
des Unternehmens.

## OfficeSkripte und Power Automate

Um den Prozess der Extraktion und Verarbeitung von Daten effizienter zu gestalten,
haben wir uns auf die Automatisierung mit Office-Skripten und Power Automate fokussiert.
Office-Skripte sind leistungsstarke Tools, die es uns ermöglichen, die Datenextraktion
und -verarbeitung zu automatisieren und so die Zeit und Ressourcen zu reduzieren,
die für manuelle Prozesse benötigt werden. Mit Power Automate können wir Workflows
erstellen, die verschiedene Schritte automatisieren, wie z.B. das Verschieben von
Daten zwischen verschiedenen Anwendungen oder das Ausführen von Aktionen basierend
auf bestimmten Bedingungen. Durch die Kombination von Office-Skripten und Power Automate
wollten wir sicherstellen, dass unser Extraktions- und Verarbeitungsprozess reibungslos
abläuft und wir die bestmöglichen Ergebnisse erzielen.

Wir erstellten also ein Office-Skript, das eine CSV-Datei, welche den Namen verschiedener
Unternehmen sowie deren Telefonnummer beinhaltet, auslesen sollte. Ziel war anschließend
folgender Vorgang:
Die CSV-Datei befindet sich in einer Excel-Arbeitsmappe, in der sich weitere Exceltabellen
befinden. Hierbei handelt es sich um Tabellen mit Einträgen verschiedener Unternehmen,
welche durch CompaniesData Cloud bereitgestellt werden. Die Tabellen sind aufgeteilt nach Ländern.
Das Skript ist in der Lage, mithilfe der Vorwahl des Unternehmens in der entsprechenden
Ländertabelle nach dem Unternehmen zu suchen. Sobald das Unternehmen gefunden wurde,
fügt das Skript die Informationen automatisch in einer Result-CSV-Datei ein. Da dieses
Vorgehen sehr zeitsparend ist, kann man sich währenddessen auf andere Aufgaben konzentrieren,
während das Skript die Arbeit erledigt. Außerdem muss man sich keine Sorgen um
die Richtigkeit der Informationen machen, da das Skript die Daten direkt aus der
Tabelle liest und in die CSV-Datei einfügt.

Der Power Automate sollte einen Flow enthalten, welcher folgende Aktionen ermöglicht.

- Schleifen, sodass mehrere CSV Dateien mit Unternehmenseinträgen nacheinander verarbeitet werden können
- Datenvorverarbeitung: Bereinigung oder Filterung der Daten, bevor diese an die API gesendet oder mithilfe der Skripte verarbeitet werden
- Zeitpläne: Flow kann so eingestellt werden, dass er automatisch zu bestimmten Zeitpunkten ausgeführt wird
- Fehlerbehandlung: Flow kann so konfiguriert werden, dass er bei Auftreten von Fehlern bestimmte Aktionen ausführt, z.B. Benachrichtigung sendet oder automatisch erneut ausgeführt wird.
- Nach Beenden des Prozesses sollen die einzelnen Einträge der Result-CSV an die API gesendet werden

Bei der Nutzung von Power Automate Cloud haben wir feststellen müssen, dass obwohl
viele Funktionen zur Verfügung stehen, einige spezielle Funktionen, die wir benötigten,
nicht verfügbar waren.
Als Alternative ergab sich Microsoft Azure, die eine breite Palette von Diensten
und Tools zur Automatisierung von Geschäftsprozessen und Bereitstellung von Anwendungen
und Systemen anbietet.
Da jedoch unsere Bankdaten für die Verwendung benötigt wurden, haben wir uns dagegen
entschieden und sind auf Power Automate Desktop umgestiegen.

## Unsere Alternative

Somit haben wir uns schlussendlich aufgrund der Funktionseinschränkungen von Power
Automate Cloud für Power Automate Desktop entscheiden müssen, der auf dem lokalen
Computer eines Benutzers installiert und ausgeführt wird und somit nicht cloudbasiert
ist.
Da in unserer finalen Lösung keine Office-Skripte ausgeführt werden konnten, mussten
wir unsere Skripte anpassen. Wir entschieden uns, statt Office-Skripten nun Python-Skripte
zu verwenden, da wir so mehr Flexibilität bei der Ausführung und Anpassung der Skripte
hatten. Das Umschreiben der Skripte war eine anspruchsvolle Aufgabe, die viel Zeit
und Sorgfalt erforderte. Wir mussten sicherstellen, dass die Funktionalität der ursprünglichen
Skripte erhalten blieb und gleichzeitig neue Funktionen hinzufügen, um unsere Anforderungen
zu erfüllen.

Obwohl PA Desktop Python-Skripte ausführen kann, hatten wir Schwierigkeiten damit
und sind somit auf PowerShell-Skripte umgestiegen, die ein auf dem lokalen Computer
gespeichertes Python-Skript ausführen. Dabei stellten wir fest, dass unzählige Anwendungen
mithilfe von PowerShell-Skripten durchgeführt werden können - diese Möglichkeit gibt
es bei Power Automate Cloud nicht.
Mithilfe von PA-Desktop konnten definitiv die Funktionseinschränkungen beseitigt
werden, jedoch hat PA- Desktop vor Allem folgende Nachteile:

- Keine webbasierte Benutzeroberfläche, was bedeutet dass der Workflow sich nur im lokalen Computer ausführen lässt
- Kein zentralisiertes Management: Power Automate Desktop bietet keine Möglichkeiten für ein zentralisiertes Management von Workflows, was bedeutet dass man manuell jeden Workflow auf jedem Computer überwachen muss, auf dem er ausgeführt wird. Die Cloud-Version bietet dagegen ein zentrales Managementportal, mit dem man Workflows überwachen, verwalten und ausführen können.

## Fazit

In Anbetracht dessen, dass Unternehmen zunehmend Prozessoptimierung anstreben, ist
es unerlässlich, Tools zu verwenden, die dabei helfen, Routineaufgaben zu automatisieren.
In diesem Zusammenhang können sich Power Automate und Office-Skripte als hervorragende
Lösungen erwiesen, wenn die benötigten Funktionen für den Workflow verfügbar sind.
Also gibt es bei Power Automate in der Cloud noch Verbesserungsbedarf, um eine nahtlose
Automatisierung von Prozessen in der Cloud zu ermöglichen, ohne auf den Power Automate
Desktop zurückgreifen zu müssen. Eine Möglichkeit zur Verbesserung wäre die Erweiterung
der Funktionalitäten, um eine breitere Palette von Aufgaben zu automatisieren, die
in der Cloud ausgeführt werden können.
