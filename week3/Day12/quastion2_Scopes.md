
# Day 12 : SCOPE & HOISTING QUESTIONS
## - day :one: :tow:


This day about varables scopes and how they specified and the diffrence between them



## Coding Examples

```javascript

function testScope3() {
  console.log(a); // Hoisted variable using 'var' (initialized as undefined)
  console.log(b); // give reference error

  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
    console.log(a); // Prints 1 (inside the block, 'a' is assigned the value 1)
    console.log(b); // Prints 2 (inside the block, 'b' is assigned the value 2)
    console.log(c); // Prints 3 (inside the block, 'c' is assigned the value 3)
  }
  console.log(a); //  1 
  // console.log(b); // ReferenceError 
}

testScope3();


```


## Coding Exercises

### [SCOPE & HOISTING QUESTIONS ,QUESTION #1 :](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day2-tasks/tasks.md)

#### My Solution


```javascript
function testScope2() {
  console.log(a);
  console.log(b);
  console.log(c);
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
}

testScope2();

//Choices:
// A) undefined, ReferenceError
// B) 1, undefined, ReferenceError
// C) undefined, undefined, ReferenceError
// D) 1, ReferenceError

```

the the answer is choise A :

A) undefined, ReferenceError

becuase a is declared later by var so it is in fuction scope and it is hoisted but still not intialized so it is in temporary dead zoon and it has undefiend value 
but c and d are declared later by let and const which means they have block scope and this mean they will not be hoisted and because error is not handled the output will be undefined and then stopes cause of reference error
