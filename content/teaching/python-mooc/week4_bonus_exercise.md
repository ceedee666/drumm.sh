---
title: "Week 4 Bonus Exercise"
language: "en"
published: true
tags: ["FH Aachen", "Thesis"]
---

You probably know the game [“Rock, Paper, Scissors”](https://en.wikipedia.org/wiki/Rock_paper_scissors). A game for two players. Each player has three options, namely rock, paper, scissors, which are formed by the player’s hand. The rules are quite easy:

+ rock beats scissors
+ scissors beats paper
+ paper beats rock.

If both players have chosen the same object, it’s a draw.

In the following, we play 100 consecutive games. Each player has to hand in a file consisting of one letter per line. The letters are either “R”, “P” or “S”.

Write a Python program that reads two files [player1.txt](files/player1.txt) and [player2.txt](files/player2.txt). These files are organized according to the above rules. The program should compare both inputs and calculate how many games have been won by player1, by player2 and how many games ended in a draw. The results are written into a file ```result.txt``` which looks as follows:

```Py
Player1 wins: 23
Player2 wins: 48
Draws: 29
```

<br>

The sum should always be 100.

---

[< Previous unit](/teaching/python-mooc/week4_bonus_exercise_solution) | [Next unit >](/teaching/python-mooc/week4_assignment_exercise_solution) |
[Course Overview](/teaching/python-mooc)