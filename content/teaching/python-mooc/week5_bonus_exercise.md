---
title: "Week 5 Bonus Exercise"
language: "en"
published: true
tags: ["FH Aachen", "Python"]
---

[Prime numbers](https://en.wikipedia.org/wiki/Prime_number) are natural
numbers greater than 1 which are not divisible by any number beside 1 and the
number itself. In other words, the number cannot be composed as a product of
two natural numbers other than 1 and the number itself. There are infinite
prime numbers and the first ones are:

2, 3, 5, 7, 11, ...

Write a program, that gets an integer through input and creates a list
containing all prime numbers until this input. To do so, two functions have to
be implemented:

- The function `is_prime()` gets an integer as input and returns `True` if
  this integer is prime, and `False` if the integer is not prime.
- The function `prime_list()` gets an integer as input and checks each number
  from 2 to input, if it is prime by calling the above function. If a number is
  prime, it is appended to a list. This list is given back as the return value
  of prime_list().

The program finally outputs the list of all prime numbers.

### Example 1:

```zsh
Up to which number do you want all prime numbers: 100
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
```

### Example 2:

```zsh
Up to which number do you want all prime numbers: 13
[2, 3, 5, 7, 11, 13]
```

---

[< Previous unit](/teaching/python-mooc/week5_assignment_exercise_solution) | [Next unit >](/teaching/python-mooc/week5_bonus_exercise_solution) |
[Course Overview](/teaching/python-mooc)
