---
title: "More Bitwarden CLI Shell Scripting"
date: "2021-08-31"
language: "en"
published: true
tags: ["Bitwarden", "Shell", "Script", "fzf", "jq", "CLI"]
description: "In this blog post I continue my adventures in the realm of shell scripting by adapting the Bitwarden CLI to my needs."
---

In my previous [blog post](/blog/bw-cli) I started to explore shell scripting
by adapting the [Bitwarden](https://bitwarden.com/) [CLI](https://bitwarden.com/help/article/cli/)
to my needs. Luckily, [DJ](https://twitter.com/qmacro) and [markhepburn](https://github.com/markhepburn)
also wrote blog posts on the topic (cf. [here](https://qmacro.org/2021/08/26/learning-by-rewriting/)
and [here](https://blog.markhepburn.com/posts/automating-ssh-login-involving-totp-codes/)).
Based on their ideas I tried a few more ideas. Finally, I was able to improve
my initial shell script a bit (at least in my opinion 😉).

## Additional Requirements

After reading DJ's and Mark's blog post I added the following requirements to
my [initial list](http://localhost:8000/blog/bw-cli#my-requirements).

1. If a [TOTP](https://en.wikipedia.org/wiki/Time-based_One-Time_Password) token
is available for an entry, my custom CLI should also copy this token.
1. Simply my shell script by using some to the features DJ used in his script.
1. Distinguish between different username / passwords for the same Web site.

These requirements didn't look like much work. However, especially the first
one required me to change the approach I took in the shell script.

## My New Solution

Before going into more details here is the resulting script.

```zsh {numberLines}
#!/bin/zsh

set -e

copy_data () {
  local id=$1
  local login=$2
  local sessionkey=$3
  local totp

  echo "Name: $(jq -r ".name" <<< $login)"

  # Copy the username to the clipboard
  echo "> Copying Username"
  jq -r ".login.username" <<< $login | pbcopy

  # Wait for user input before coping the password
  echo "> Press any key to copy password..."
  read

  # Copy the password to the clipboard
  echo "> Copying Password"
  jq -r ".login.password" <<< $login | pbcopy

  # Copy a TOTP Token if available
  totp=$(jq -r ".login.totp" <<< $login)

  if [[ $totp != "null" ]]; then
    # Wait for user input before coping the totp token
    echo "> Press any key to copy TOTP Token..."
    read
    echo "> Copying TOTP Token"
    bw get totp $id --session $sessionkey | pbcopy
  fi
}

main() {
  local searchterm=$1
  local sessionkey logins login id

  #Unlock the vault an store the session key
  sessionkey=$(bw unlock --raw)

  # Search for passwords using the search term
  logins=$(bw list items --search $searchterm --session $sessionkey)

  id=$(jq -r '.[] | "\(.name)\t\(.login.username)\t\(.id)"' <<< $logins \
    | fzf --reverse --with-nth=1,2 --delimiter="\t" --select-1 --exit-0 \
    | awk -F"\t" '{print $3}'
  )

  if [[ -n $id ]]; then
    login="$(jq ".[] | select(.id == \"$id\")" <<< $logins)"
    copy_data $id $login $sessionkey
  fi
}

main "$@"
```

## Main Function

The first change I implemented is to introduce a `main` function
(cf. lines 37 &ndash; 56).
This idea I copied directly from DJs [blog post](https://qmacro.org/2021/08/26/learning-by-rewriting/).
The execution of the script starts in line 58 by invoking this `main` function.
The special parameter `$@` is used to pass all parameters of the script to the
main function.

Besides that, I also qualified all the variables with `local`
(cf. lines 6 &ndash; 9 and 38 &ndash; 39). Also coping the positional
parameters (e.g. `$1` or `$2`) to a local variable at the beginning of the
function seems to be a good idea (cf. lines 6 &ndash; 8).

## fzf-Features

In the initial script I used a conditional to distinguish between the
situations that one or many results are returned by the
search. This complexity is removed in the current version of the script.
Instead, the parameter `--select-1` is used to tell fzf to immediately return
when only one

## Here String <<<

## More Bitwarden CLI

Whenever the
password vault is locked and a command like [get](https://bitwarden.com/help/article/cli/#get)
or [list](https://bitwarden.com/help/article/cli/#list) is executed,
the [Bitwarden CLI](https://bitwarden.com/help/article/cli/) asks for the
password to unlock the vault. In my initial script
this was not a problem. It only accessed the fault one using `bw list <searchterm>`.
The JSON data returned by this command doesn't contain the current TOTP
token for an entry. To get a TOTP token `bw get totop <ID>` needs to be
executed with the ID of a vault entry. As I don't want to enter my password
multiple times for one entry the script needs to use
the [log in](https://bitwarden.com/help/article/cli/#session-management) functionality
of the CLI.
