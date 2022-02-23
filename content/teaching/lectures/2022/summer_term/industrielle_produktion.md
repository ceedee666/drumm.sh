---
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
- Mikrocontrollern und Sensoren
- [Amazon Web Service](https://aws.amazon.com/)

einen Prototypen entwickeln, um Daten zu erfassen und zu analysieren.
Die Entwicklung des Prototypen wird auf Basis eines ESP8266 Mikrocontrollers
([D1 mini](https://www.wemos.cc/en/latest/d1/d1_mini.html))
erfolgen. Diesen Mikrocontroller, sowie ein
[Breadbord](https://en.wikipedia.org/wiki/Breadboard) und einige LEDs können Sie sich in der Woche vor
Blockvorlesung ausleihen. Zusätzlich benötigen Sie noch folgende Hardware:

- [DHT11 Temperatursensor](https://www.amazon.de/dp/B07TYPT2NJ)

Bitte beschaffen Sie den Sensor **rechtzeitig** vor Beginn der Vorlesungen!

Der Inhalt der Blockvorlesung zur Programmierung des Mikrocontroller in Python sind als
[Github Repository](https://github.com/ceedee666/iot_introduction) verfügbar.

### Hybride Vorlesung

Ich werde alle meine Vorlesungen in diesem Semester hybrid anbieten. Das heißt
Sie können auch online Teilnehmen. Falls Sie online teilnehmen und
die Hardware nicht ausleihen können benötigen Sie zusätzlich noch folgende Komponenten:

- [ESP8266 Mikrocontroller](https://www.amazon.de/dp/B06Y1LZLLY)
- [Breadboard und Kabel](https://www.amazon.de/dp/B01N4VCYUK)
- einen der im nächsten Abschnitt beschriebene Sensor-Kits.

### Ausblick

Für die Entwicklung ihres Prototypen werden Sie noch weiter Sensoren benötigen. In
Vorbereitung darauf können sich
alternativ zum DHT11 Temperatursensor auch einen der folgenden Sensor-Kits beschaffen:

- [AZDeliver 16-in-1 Kit](https://www.amazon.de/dp/B071GV6L41)
- [ELEGOO 37-in-1 Kit](https://www.amazon.de/dp/B01M30ZWQR)

## Python

Zur Programmierung der Mikrocontroller wird die Programmiersprache Python 🐍 verwendet.
Falls Sie keine Python-Kenntnisse besitzen oder Ihre Kenntnisse auffrischen möchten,
können Sie dazu diese [Jupyter-Notebooks](https://mybinder.org/v2/gh/ceedee666/python_intro_lecture/v1.6) verwenden.

Um die Mikrocontroller mit Python programmieren zu können, muss auf diesen die
[MicroPython](https://micropython.org/) Firmware installiert werden. Eine Anleitung
zur Installation finden Sie
[hier](https://randomnerdtutorials.com/flash-upload-micropython-firmware-esp32-esp8266/).

Nützliche Links zu MicroPython:

- [MicroPython Dokumentation](http://docs.micropython.org/en/latest/)
- [MicroPython Schnellstart für den ESP8266](http://docs.micropython.org/en/latest/esp8266/quickref.html)
- Liste von [MicroPython Bibliotheken](http://awesome-micropython.com/)

Zur Entwicklung der Python-Programme für den Mikrocontroller können Sie eine beliebige
IDE oder Editor verwenden. PyCharm und uPyCraft bieten jedoch nützliche
Funktionen zur Übertragung Ihrer Programme auf den Mikrocontroller:

- [PyCharm IDE](https://www.jetbrains.com/pycharm/)
- [MicroPython Plugin](https://github.com/vlasovskikh/intellij-micropython#installation)
- [uPyCraft IDE](https://github.com/DFRobot/uPyCraft)

## Videos

Auf meinem [YouTube Kanal](https://www.youtube.com/c/christiandrumm) finden Sie eine
[Playlist](https://youtube.com/playlist?list=PLl09U8aTDcv0M5ogljDDZQibgpg-XbwPv)
mit einigen Videos zur Vorlesung. In diesen Videos zeige ich z.B. wie Sie
die [PyCharm IDE mit dem Mikrocontroller](https://youtu.be/CMgT60wM7tw) verbinden
können oder wie Sie Daten vom Mikrocontroller zu den
[AWS IoT Service](https://youtu.be/0N3XAKuAGec) senden können.
