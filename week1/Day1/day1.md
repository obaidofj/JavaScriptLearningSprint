
# Day 1 :

## - day :one:

This day is about Multiplication Assignment operator
and Concatenating Strings with the Plus Equals Operator
and Use Bracket Notation to Find the Nth-to-Last Character in a String

## Lesson Summary

the multiplication assignment operator is to simplify using arithmitice operator with equal operator to 
do arithmic on the variable and assining the change at the same time in one operator, 
and we can use the arithmitic pluse operator with equal operator to concatinate two stings togther,
also for strings we can use brackets to access any character as any character in a string has index and it starts
from 0 to the length-1 of the string

## Coding Examples

```javascript
let a=8;
let strValue="first part";
let name="mohammed";
// multiplication assignment operator 
a*= 4; // now a value is 8 * 4 = 32  

// Concatinating string with += operator
strValue+=" second."; // now the value of strValue varaible = 'first part second.'

// using brackets to access the 3rd to last character
console.log(name[name.length-3]);

```


## Coding Exercises

### 1- [Compound Assignment With Augmented Multiplication](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)

### 2- [Concatenating Strings with the Plus Equals Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)

### 3- [Use Bracket Notation to Find the Nth-to-Last Character in a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)

### 4- [Profile Lookup ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)
### 5- [Copy Array Items Using slice() ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

### 6- [Combine Arrays with the Spread Operator ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)



#### My Solution


**1- Solution for Multiplication Assignment operator :**
---

```javascript
a *=  5;
b *=  3;
c *=  10;
```

**2- Solution for concatinatiog string by adding Assignment operator :**
---

```javascript
let myStr;
myStr="This is the first sentence. ";
myStr+="This is the second sentence.";
```

**3- Solution for concatinatiog string by adding Assignment operator :**
---

```javascript
const secondToLastLetterOfLastName = lastName[lastName.length-2];
```