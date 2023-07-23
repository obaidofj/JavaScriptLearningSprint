
# Day 12 : SCOPE & HOISTING QUESTIONS
## - day :one: :tow:


This day about varables scopes and how they specified



## Coding Examples

```javascript

var globalVar = "in  global scope";

function Func() {
 
  var functionVar = "in function scope";

  if (true) {
    // Block Scope 
    let blockVar = "I am in the block scope";
    const constantVar = "I am also in the block scope";

    console.log("Inside the block:");
    console.log(blockVar);
    console.log(constantVar);
  }

  console.log("still inside the function:");
  console.log(functionVar);
  // blockVar is not accessible here.
  // constantVar  is not accessible here.
}

console.log("in the global scope:");
console.log(globalVar);
// functionVar is not accessible here.
// blockVar is not accesseble
// constantVar is not accesseble

Func();

```


## Coding Exercises

### [SCOPE & HOISTING QUESTIONS ,QUESTION #1 :](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day2-tasks/tasks.md)

#### My Solution


```javascript
function testScope1() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}

testScope1();

```
''''Choices: 

A) undefined, undefined, undefined
B) 1, undefined, ReferenceError
C) 1, ReferenceError, ReferenceError
D) 1, ReferenceError''''

the the answer is choise D :

D) 1, ReferenceError

becuase let and const has block scope so there is no reference for them and each one will give reference error but becuase error not handled it will print 1 then give refrence error.
but a has function scope which if not defiend localy it will go to upper level or until reach global level here and defined there
