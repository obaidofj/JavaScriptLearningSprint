# Day 4 :

## -day :four:

this day about ternary operator , switch statment  and array map and filter function

## Lesson Summary

i learned how to use ternary operator in a more complex form so after the : i put another test with ? again also 
i used switch statment so the swich will be for true value so the case will evaluate the condition in it to see if it is true or not
also i used array map and filter functions 

## Coding Examples

```javascript
//1- Using Multiple Conditional (Ternary) Operators
// this if else code :
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  } else if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}
//can be done like this :
function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}

// 2- I used switch statment in golfe score example and here is an example for it :

let num = 4;

function checkNumber() {
  switch (true) {
    case num > 0:
      return "positive";
      break;
    case num === 0:
      return "zero";
      break;
    case num < 0:
      return "negative";
      break;
  }
}

console.log(checkNumber(num));

//3- array mab function

const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 }
];

const names = users.map((user) => user.name);
console.log("names from users object: ", names);

//4-array filter function
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); 
```

## Coding Exercises

### 1- [Use Multiple Conditional (Ternary) Operators ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)

### 2- [Golf Score](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)

### 3- [Use the map Method to Extract Data from an Array ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)

### 4- [Use the filter Method to Extract Data from an Array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)

#### My Solution

**1- Use Multiple Conditional (Ternary) Operators :**

```javascript
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign("10", 10);
```

**2- Golf Score :**

```javascript
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!"
];

function golfScore(par, strokes) {
  // Only change code below this line
  let result;

  switch (true) {
    case strokes == 1:
      result = names[0];
      break;
    case strokes <= par - 2:
      result = names[1];
      break;
    case strokes === par - 1:
      result = names[2];
      break;
    case strokes === par:
      result = names[3];
      break;
    case strokes === par + 1:
      result = names[4];
      break;
    case strokes === par + 2:
      result = names[5];
      break;
    case strokes >= par + 3:
      result = names[6];
      break;
  }
  return result;
  // Only change code above this line
}

golfScore(5, 4);
```

**3- Use the map Method to Extract Data from an Array**

```javascript
const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True"
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True"
  }
];

const ratings = watchList.map((obj) => ({
  title: obj["Title"],
  rating: obj["imdbRating"]
}));

// Only change code above this line

console.log("rating of movies from moves object : ",JSON.stringify(ratings));
```

**4- Use the filter Method to Extract Data from an Array**

```javascript
const filteredList = watchList.filter((obj)=>(Number(obj.imdbRating)>=8)).map((obj)=>({'title': obj["Title"], 'rating' : obj["imdbRating"]})) ;

console.log("filteredList:",JSON.stringify(filteredList));
```
