---
title: "Week 4 Assignment (Part 1 - Questions)"
language: "en"
published: true
tags: ["FH Aachen", "Thesis"]
---

### Question 1

#### Which of the following statements about file handling in Python are correct?

*Note: There are 3 correct answers to this question.*

<br>

<details>
	<summary>Files can be used to share data between different programs.</summary>
	✅
</details>


<details>
	<summary>Files must only contain the normal characters and digits.</summary>
	❌
</details>


<details>
	<summary>Files must have a name, otherwise they are not "callable".</summary>
	✅
</details>


<details>
	<summary>The rules for naming a file are the same as the rules for naming variables. </summary>
	❌
</details>


<details>
	<summary>Using files, data can be stored persistently, in other words, when the program is stopped or when the computer is switched off, the data is still available.</summary>
	✅
</details>

<br>

### Question 2

#### Which statements about the following code are correct?

<img src=imgs/week4_assignment_f2.png width="450"><br>

*Note: There are 2 correct answers to this question.*

<br>

<details>
	<summary>In this case, it does not matter that the ".close()" method is not executed, as the file is read only.</summary>
	❌
</details>


<details>
	<summary>When a file is opened with the "with" statement, it is not necessary to close it. This is done automatically at the end of the "with" block. </summary>
	✅
</details>


<details>
	<summary>The file will not be stored correctly at the end of the program because it is not closed correctly.</summary>
	❌
</details>


<details>
	<summary>Using the "with" statement in combination with the "open" function limits the number of faults, as the closing of the file is done implicitly.</summary>
	✅
</details>


<details>
	<summary>Using the "with" statement, it does not matter if the file "first_file.txt" exists. In case there is no such file, the program will simply continue and does not raise an error.</summary>
	❌
</details>

<br>

### Question 3

#### Which statements regarding the following program are correct?

<img src=imgs/week4_assignment_f3.png width="450"><br>

*Note: There are 2 correct answers to this question.*

<br>

<details>
	<summary>The line breaks "\n" at the end of each line in the file are automatically deleted by the �with� statement.</summary>
	❌
</details>


<details>
	<summary>The file is not closed correctly at the end of the program.</summary>
	❌
</details>


<details>
	<summary>After the program is executed, the variable "line" is a list.</summary>
	✅
</details>


<details>
	<summary>If the file "lorem_ipsum.txt" does not exist, the program stops with an error.</summary>
	✅
</details>


<details>
	<summary>Only the first line of the file is read into the variable "line".</summary>
	❌
</details>

<br>

### Question 4

#### Which of the following statements about the ```.strip()``` method are correct?

*Note: There are 2 correct answers to this question.*

<br>

<details>
	<summary>Using the string method ".strip()", leading and ending spaces, tabs, line breaks, and so on, are deleted.</summary>
	✅
</details>


<details>
	<summary>To loop through the lines of a file and first ".strip()" the line is a common pattern when dealing with files.</summary>
	✅
</details>


<details>
	<summary>If a file contains only digits, the ".strip()" method cannot be used, as it only works on strings.</summary>
	❌
</details>


<details>
	<summary>The method ".lstrip()" can be used on integers to delete leading zeros.</summary>
	❌
</details>


<details>
	<summary>It is better to use the ".strip()" method multiple times (for example, "string.strip().strip()"), because then even double spaces are deleted.</summary>
	❌
</details>

<br>

### Question 5

#### The following program is intended to write the numbers from 1 to 10 to a file. The numbers should be stored in subsequent lines. What mistakes does the program contain?

<img src=imgs/week4_assignment_f5.png width="450"><br>

*Note: There are 2 correct answers to this question.*

<br>

<details>
	<summary>The variable "i" has to be converted into a string.</summary>
	✅
</details>


<details>
	<summary>The mode "w" has to be a string; the quotation marks are missing.</summary>
	✅
</details>


<details>
	<summary>All data is written to one line and not to subsequent lines.</summary>
	❌
</details>


<details>
	<summary>The range has to be from 1 to 11 as the last value is not taken into account.</summary>
	✅
</details>


<details>
	<summary>The mode "w+" has to be used because new data is stored into the file.</summary>
	❌
</details>

<br>

### Question 6

#### What is the output of the following statements?

<img src=imgs/week4_assignment_f6.png width="450"><br>

<br>

<details>
	<summary>Week 4, Assignment, Question 6</summary>
	❌
</details>


<details>
	<summary>Week 4 � Assignment � Question 6 </summary>
	✅
</details>


<details>
	<summary>Week4�Assignment�Question 6</summary>
	❌
</details>


<details>
	<summary>Week4 Assignment Question 6</summary>
	❌
</details>

<br>

### Question 7

#### What is the output of the following statements?

<img src=imgs/week4_assignment_f7.png width="450"><br>

<br>

<details>
	<summary>Week 4 �<br>Assignment �<br>Question 7 �</summary>
	❌
</details>


<details>
	<summary>Week 4<br>Assignment<br>Question 7</summary>
	❌
</details>


<details>
	<summary>Week 4 � Assignment � Question 7</summary>
	❌
</details>


<details>
	<summary>Week 4 � Assignment � Question 7 �</summary>
	✅
</details>

<br>

### Question 8

#### What is the result of the following statement?

<img src=imgs/week4_assignment_f8.png width="450"><br>

<br>

<details>
	<summary><img src=imgs/week4_assignment_f8.1.png width="135"></summary>
	✅
</details>


<details>
	<summary><img src=imgs/week4_assignment_f8.2.png width="90"></summary>
	❌
</details>


<details>
	<summary><img src=imgs/week4_assignment_f8.3.png width="115"></summary>
	❌
</details>


<details>
	<summary><img src=imgs/week4_assignment_f8.4.png width="85"></summary>
	❌
</details>

<br>

### Question 9

#### What is the result of the following statement?

<img src=imgs/week4_assignment_f9.png width="450"><br>

<br>

<details>
	<summary>John, Paul, George, Ringo</summary>
	✅
</details>


<details>
	<summary>John, Paul, George, Pete</summary>
	❌
</details>


<details>
	<summary>Ringo</summary>
	❌
</details>


<details>
	<summary>Error</summary>
	❌
</details>

<br>

### Question 10

#### What is the result of the following statement?

<img src=imgs/week4_assignment_f10.png width="450"><br>

<br>

<details>
	<summary>"Yesterday", "Let it be", "Help", "Something"</summary>
	❌
</details>


<details>
	<summary>['Yesterday', 'Let', 'it', 'be', 'Help', 'Something']</summary>
	❌
</details>


<details>
	<summary>['Yesterday,', 'Let', 'it', 'be,', 'Help,', 'Something']</summary>
	✅
</details>


<details>
	<summary>['Yesterday', 'Let it be', 'Help', 'Something']</summary>
	❌
</details>

---

[< Previous unit](/teaching/python-mooc/week4_unit6_selftest) | [Next unit >](/teaching/python-mooc/week4_assignment_exercise) |
[Course Overview](/teaching/python-mooc)