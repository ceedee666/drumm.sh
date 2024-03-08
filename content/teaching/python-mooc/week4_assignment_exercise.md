# Python for Beginners

## Week 4 Assignment (Part 2 - Exercise)

There is a file [secret.txt](secret.txt), which contains one character per line. There is a second file [key.txt](key.txt), which contains two lines with one number per line (the number could have several digits). The first number ```col``` represents the number of columns of a grid, the second number ```row``` represents the number of rows of the grid.

The characters of the first file should now be filled into this grid. Take the characters one by one and fill them into a string until the string contains ```col``` characters. Append the string to a list. Then create a new string the same way. Continue, until the number of strings is equal to ```row```. Now, write all the strings into a file ```public.txt```. Open the the file and check the content.

Please note: When programming your solution in CodeOcean, files created by your program will not be visible. If you want to check the content of those files, we suggest to let your code run on your machine (e.g. in a Jupyter Notebook) and check the content of the files there.

### Example

If the file [secret.txt](secret.txt) contains the following input:

```Py
#
#
#
.
#
.
.
#
.
.
#
.
```

<br>

and the file [key.txt](key.txt) contains the following numbers:

```Py
3
4
```

<br>

then the content in the file public.txt should be as follows:

```Py
###
.#.
.#.
.#.
```

<br>

---

[***Continue*** <br> *Week 4 Assignment Solution*](week4_assignment_exercise_solution.md)

[***Return*** <br> *Week 4 Assignment (Part 1 - Questions)*](week4_assignment_questions.md)

<br>

[***Home*** <br>*Table of Contents*](home.md)