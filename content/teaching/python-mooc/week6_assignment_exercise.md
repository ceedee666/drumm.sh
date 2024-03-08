# Python for Beginners

## Week 6 Assignment (Part 2 - Exercise)

### Accessing the Apple iTunes Search Service

In this assignment you are going to build a Python program to access the [Apple iTunes Search Service](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html). This service can be used to search information about musicians, albums, songs and so on.

Using the following URL, a search for the term *ramones* and for the entity type *album* is performed: https://itunes.apple.com/search?term=ramones&entity=album

Other possible entity types are musicArtist, musicTrack or song. Below is an (abbreviated) example result of the service:

```Python
{
"resultCount": 1,
"results": [
    {
    "wrapperType": "collection",
    "collectionType": "Album",
    "artistId": 60715,
    "amgArtistId": 5223,
    "artistName": "Ramones",
    "collectionName": "Ramones",
    "collectionPrice": 9.99,
    "collectionExplicitness": "notExplicit",
    "trackCount": 14,
    "copyright": "℗ 1976 Sire Records. Marketed by Rhino Entertainment Company, a Warner Music Group Company.",
    "country": "USA",
    "currency": "USD",
    "releaseDate": "1976-04-23T08:00:00Z",
    "primaryGenreName": "Punk"
    }
]
}
```

The response in the example above consists of one result (```resultCount``` is 1). This result is the album “Ramones” (element ```collectionName```) by the artist “Ramones” (element ```artistName```). The response is in [JSON](https://en.wikipedia.org/wiki/JSON) format.

The [Requests](https://docs.python-requests.org/en/latest/) library can be used to invoke the Apple iTunes Search Service. In order to perform a search, a [GET request](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) needs to be performed. This is done using the ```get()``` function of the Requests library. After that, the method ```json()``` of the Requests library can be used to map the response from [JSON](https://en.wikipedia.org/wiki/JSON) to the Python 🐍 data types ```dict``` and ```list```.

### Assignment

Write a program that asks the user for a search term. Perform a search using the iTunes search service for the entity type album. The program should then print how many search results where returned. For each result print the artist name, the album name and track count.

Below is an example execution of the program. Note that the output is abbreviated.

```Py
Please enter a search term: cash
The search returned 50 results.
Artist: Luke Bryan - Album: Crash My Party - Track Count: 13
Artist: Johnny Cash - Album: The Essential Johnny Cash - Track Count: 36
Artist: Dave Matthews Band - Album: Crash - Track Count: 12
```

<br>

---

[***Continue*** <br> *Week 6 Assignment Solution*](week6_assignment_exercise_solution.md)

[***Return*** <br> *Week 6 Assignment (Part 1 - Questions)*](week6_assignment_questions.md)

<br>[***Home*** <br>*Table of Contents*](home.md)