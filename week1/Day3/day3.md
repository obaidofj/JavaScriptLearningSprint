
# Day 3 :
## - day :three:

this day about how to return a Value from a Function and
the differance between var let and const (Global Scope and Functions) and
Local Scope and Functions and 
Global vs. Local Scope in Functions

## Lesson Summary

this about how is global variable or variables defined by var also regarded as global variables 
and about function scope variable which defined by let or const 

## Coding Examples

```javascript
// Return value from function
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);

//Local Scope and Functions
function myTest() {
  const loc = "foo";
  console.log(loc);
}

console.log("loc variable:",loc);

// queu by array
let testArr = [1, 2, 3, 4, 5];
console.log("original testArr: ",testArr);
testArr.push(6);
console.log("testArr after push: ",testArr);
let vr=arr.shift();
console.log("vr= ",vr);
console.log("testArr after shift: ",testArr);


```


## Coding Exercises

### 1- [Return a Value from a Function with Return ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)
### 2- [Global Scope and Functions ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)
### 3- [Local Scope and Functions ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)
### 4- [Global vs. Local Scope in Functions ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)
### 5- [Stand in Line qoueu](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)

#### My Solution

**1- Return a Value from a Function with Return**

```javascript
// 1- return value from func

function timesFive (num){
  return num*5;
}

// 2-  var let and const kewords deffirent

// Declare the myGlobal variable below this line

let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// 3- Local Scope and Functions

function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log('outside myLocalScope', myVar); // this will give error

//4- Global vs. Local Scope in Functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

console.log("outerWear = ", myOutfit());

//5- Stand in Line :

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

```


