---
title: "Übungsaufgaben - SQL"
language: "de"
published: true
tags: ["FH Aachen", "Teaching", "SQL"]
---

## SQL Übungsaufgaben

### SELECT

#### Aufgabe 1

Was ergibt folgende Abfrage?

```sql
SELECT author_name FROM authors WHERE author_id = 'A-003';
```

#### Aufgabe 2

Was ergibt folgende Abfrage?

```sql
SELECT title FROM books WHERE author_id = 'A-001';
```

#### Aufgabe 3

Welche Genres beginnen mit „fiction“?

```sql
SELECT genre FROM genre WHERE genre LIKE 'fiction%';
```

#### Aufgabe 4

Welche Bücher wurden von „Agatha Christie“ geschrieben?

#### Aufgabe 5

Welche Bücher gehören zum Genre „fiction: mystery“?

#### Aufgabe 6

Was ergibt folgende Abfrage?

```sql
SELECT DISTINCT author_id FROM books;
```

#### Aufgabe 7

Wie viele Genres gibt es?

#### Aufgabe 8

Was ergibt folgende Abfrage?

```sql
SELECT title, copies_sold FROM books ORDER BY title LIMIT 3;
```

### INSERT

#### Aufgabe 1

Füge einen neuen Autor "Mustermann, Max" mit ID 'A-999' hinzu.

#### Aufgabe 2

Füge ein neues Genre 'fiction: horror' mit ID 'G-9999' hinzu.

#### Aufgabe 3

Füge ein neues Buch "Blackout" von Autor 'A-010' mit 3 Millionen verkauften Exemplaren ein.

#### Aufgabe 4

Füge für das neue Buch das Genre 'fiction: thriller' hinzu.

#### Aufgabe 5

Füge einen neuen Eintrag mit Genre 'G-0020' für Buch-ID 36 ein.

### UPDATE

#### Aufgabe 1

Setze den Vornamen von Autor 'A-003' auf 'Joanne'.

#### Aufgabe 2

Ändere den Titel des Buches mit ID 1 auf 'LOTR'.

#### Aufgabe 3

Setze die Verkaufszahlen von Buch-ID 1 auf '160 million'.

#### Aufgabe 4

Ändere das Genre mit ID 'G-0002' zu 'literature'.

#### Aufgabe 5

Setze den `author_first_name` von 'A-001' auf NULL.

### DELETE

#### Aufgabe 1

Lösche das Buch mit der ID 61.

#### Aufgabe 2

Lösche alle Bücher von Dan Brown.

#### Aufgabe 3

Lösche den Autor mit der ID 'A-038' (Anne Frank).

#### Aufgabe 4

Lösche alle Genres mit leerem Namen.

#### Aufgabe 5

Lösche alle `book_genre`-Einträge zu Buch-ID 999.
