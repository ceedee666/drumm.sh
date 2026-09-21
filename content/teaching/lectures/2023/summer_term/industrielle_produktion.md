---
lastmod: 2023-03-27
title: "Industrielle Produktion"
language: "de"
published: true
tags:
  ["FH Aachen", "Teaching", "Industrielle Produktion", "Python", "MicroPython"]
---

## Inhalte

Das Modul wird zusammen mit Prof. Meinecke und Prof. Luft durchgeführt.
In meinem Teil dieses Moduls werden Sie unter Verwendung von:

- Python 🐍
- Microcontrollern und Sensoren
- [Amazon Web Service](https://aws.amazon.com/)

einen Prototypen entwickeln, um Daten zu erfassen und zu analysieren. Zur Entwicklung Ihres Prototypen benötigen Sie folgende Hardware:

- [ESP8266 Microcontroller](https://www.amazon.de/dp/B06Y1LZLLY)
- [Breadboard und Kabel](https://www.amazon.de/dp/B01N4VCYUK)
- [Sensorkit](https://www.amazon.de/dp/B01M30ZWQR/)

Bitte beschaffen Sie die Hardware **rechtzeitig** vor Beginn der Vorlesungen!

Der Inhalt der ersten Vorlesung zur Programmierung des Microcontroller in Python sind als [Github Repository](https://github.com/ceedee666/iot_introduction)
verfügbar.

## Python

Zur Programmierung der Microcontroller wird die Programmiersprache Python verwendet. Falls Sie keine Python-Kenntnisse besitzen
oder Ihre Kenntnisse auffrischen möchten, können Sie dazu den MOOC [Python for Beginners](https://open.sap.com/courses/python1) verwenden.

Um die Microcontroller mit Python programmieren zu können, muss auf diesen die [MicroPython](https://micropython.org/) Firmware installiert werden. Eine Anleitung
zur Installation finden Sie [hier](https://randomnerdtutorials.com/flash-upload-micropython-firmware-esp32-esp8266/).

Nützliche Links zu MicroPython:

- [MicroPython Dokumentation](http://docs.micropython.org/en/latest/)
- [MicroPython Schnellstart für den ESP8266](http://docs.micropython.org/en/latest/esp8266/quickref.html)
- Liste von [MicroPython Bibliotheken](http://awesome-micropython.com/)

Zur Entwicklung der Python-Programme für den Microcontroller können Sie eine beliebige IDE oder Editor verwenden. PyCharm und uPyCraft bieten jedoch nützliche
Funktionen zur Übertragung Ihrer Programme auf den Microcontroller:

- [PyCharm IDE](https://www.jetbrains.com/pycharm/)
- [MicroPython Plugin](https://github.com/vlasovskikh/intellij-micropython#installation)
- [uPyCraft IDE](https://github.com/DFRobot/uPyCraft)

## Videos

Auf meinem [YouTube Kanal](https://www.youtube.com/c/christiandrumm) finden Sie eine [Playlist](https://youtube.com/playlist?list=PLl09U8aTDcv1hw7fKlLS2gv9_rz1twPr4)
mit einigen Videos zur Vorlesung. In diesen Videos zeige ich z.B. wie Sie die [PyCharm IDE mit dem Microcontroller](https://youtu.be/CMgT60wM7tw) verbinden
können oder wie Sie Daten vom Microcontroller zu den [AWS IoT Service](https://youtu.be/0N3XAKuAGec) senden können.

## AWS

Im Rahmen des Moduls werden wir [Amazon Web Service (AWS)](https://aws.amazon.com/) benutzen, um Daten von Sensoren
zu erfassen. Da Amazon leider keine Budgets für Hochschulen mehr bereitstellt und das [AWS Educate](https://aws.amazon.com/education/awseducate/)
nicht die notwendigen Services enthält, benötigt jeder Teilnehmer einen AWS Account. Führen
Sie hierzu die im Tutorial [Control Your AWS Costs](https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/)
beschriebenen Schritte durch (insbesondere die Schritte 2 und 4). Ich empfehle Ihnen die Vorlage "Zero spend budget" in Schritt 4 zu verwenden.
