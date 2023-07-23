# Day 12 :
 this day about Static types which require variables to be explicitly declared with a specific data type before they can be used or when they first used
 and about scope and type of scopes and which scope of a varaible


 ## topics :
 - Static Typing
 - Scope

## Examples:

```javascript
const globalVar = " global variable";

function test1() {
  console.log(globalVar); // Accessible here
}

test1();

function test2() {
  const localVar = "local variable";
  console.log(localVar); // Accessible here
}

test2();
console.log(localVar); // Error: localVar is not defined


```