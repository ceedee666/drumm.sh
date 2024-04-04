---
title: "Week 1 Assignment (Part 2 - Exercise)"
language: "en"
published: true
tags: ["FH Aachen", "Thesis"]
---

[Triangles](https://en.wikipedia.org/wiki/Triangle#Types_of_triangle) can be classified based on their angles.
+ A right triangle has one angle of 90°
+ A obtuse triangle has one angle of more than 90°
+ A triangle is acute if all three angles are less than 90°

Write a program that asks the user for the values of three angles in degrees. First check if the entered values are valid. The values are only valid if they are >0 and if their sum is 180°. If the entered values are valid, classify the triangle as right, acute or obtuse.

Below are two example executions of the program with invalid values:

```
Please enter the first angle: 60
Please enter the second angle: 60
Please enter the third angle: 100
The entered values are not valid.

Please enter the first angle: 200
Please enter the second angle: -10
Please enter the third angle: -10
Angles smaller than 0 are not valid.
```

Here is another example execution of the program:

```
Please enter the first angle: 60
Please enter the second angle: 30
Please enter the third angle: 90
The triangle is a right triangle.
```

---

[< Previous unit](/teaching/python-mooc/week1_assignment_exercise_solution) | [Next unit >](/teaching/python-mooc/week1_assignment_questions) |
[Course Overview](/teaching/python-mooc)