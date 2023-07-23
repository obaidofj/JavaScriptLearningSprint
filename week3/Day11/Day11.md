# Day 11 :
 this day about data types, coercion , object and values such as null, undefiened , NaN and the difference between them and how to check for them


 ## topics :
 - primitive types
 - corecion
 - equality

## Examples:

```javascript
let nullVar = null;
let uninitalizedVar;

console.log(nullVar); // Output: null
console.log(typeof nullVar); // Output: "object"


console.log(uninitalizedVar); // Output: undefined
console.log(typeof uninitalizedVar); // Output: "undefined"

let obj = {};
console.log(obj.property); // Output: undefined

let result = "hello" / 2;

console.log(result); // Output: NaN
console.log(typeof result); // Output: "number"

console.log(5 == "5"); // Output: true
console.log(null == undefined); // Output: true
console.log(null == 0); // Output: false 

console.log(5 === "5"); // Output: false
console.log(null === undefined); // Output: false
console.log(null === 0); // Output: false

```