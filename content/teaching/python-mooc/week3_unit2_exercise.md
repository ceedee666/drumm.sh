# Python for Beginners

## Week 3 Unit 2: Exercise

One of the nice features of Python is that it supports Unicode. Therefore it is possible to use emojis just like other characters in strings. In this exercise you will use this feature to build an emoji translator.

Below is a dictionary that maps English terms to Emojis (broken into multiple lines for better readability).

```Py
{
"happy": "😃",
"heart": "😍",
"rotfl": "🤣",
"smile": "😊",
"crying": "😭",
"kiss": "😘",
"clap": "👏",
"grin": "😁",
"fire": "🔥",
"broken": "💔",
"think": "🤔",
"excited": "🤩",
"boring": "🙄",
"winking": "😉",
"ok": "👌",
"hug": "🤗",
"cool": "😎",
"angry": "😠",
"python": "🐍"
}
```

<br>

Use this dictionary to build a program that:

1. Reads a sentence from the user.
1. Replaces all the words in the sentence with the corresponding Emoji.

Below is an example execution of the program:

```Py
Please enter a sentence: I'm so excited to learn python
I'm so 🤩 to finally learn 🐍
```

### Hint

Use the *.split()* method to split a sentence into its words. The result of

```Py
sentence = "This is a test"
words = sentence.split()
print(words)
```

<br>

is

```Py
["This", "is", "a", "test"]
```

<br>

You should also be careful about spaces in the resulting sentence.

<br>

---

[***Continue*** <br> *Week 3 Unit 3: When to use lists, dictionaries, and tuples*](week3_unit3_list_dict_tuples.md)

[***Return*** <br> *Week 3 Unit 2: Self-test*](week3_unit2_selftest.md)

<br>

[***Home*** <br>*Table of Contents*](home.md)