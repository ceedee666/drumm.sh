---
title: "Week 3 Unit 2: Exercise"
language: "en"
published: true
tags: ["FH Aachen", "Python"]
---

One of the nice features of Python is that it supports Unicode. Therefore it
is possible to use emojis just like other characters in strings. In this
exercise you will use this feature to build an emoji translator.

Below is a dictionary that maps English terms to Emojis (broken into multiple
lines for better readability).

```python
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

Use this dictionary to build a program that:

1. Reads a sentence from the user.
1. Replaces all the words in the sentence with the corresponding Emoji.

Below is an example execution of the program:

```zsh
Please enter a sentence: I'm so excited to learn python
I'm so 🤩 to finally learn 🐍
```

### Hint

Use the _.split()_ method to split a sentence into its words. The result of

```python
sentence = "This is a test"
words = sentence.split()
print(words)
```

is

```zsh
["This", "is", "a", "test"]
```

You should also be careful about spaces in the resulting sentence.

---

[< Previous unit](/teaching/python-mooc/week3_unit2_selftest) | [Next unit >](/teaching/python-mooc/week3_unit3_list_dict_tuples) |
[Course Overview](/teaching/python-mooc)
