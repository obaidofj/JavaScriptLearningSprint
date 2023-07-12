// examples:

function plusThree(num) {
  return num + 3;
}

const ans = plusThree(5);

console.log("function return value:", ans);

function myTest() {
  const loc = "foo";
  console.log("functioin scoop var:", loc);
}

myTest();
//console.log("loc variable:",loc); this gives error

// multiplication assignment operator

//solutions:

// 1- return value from func

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);

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
