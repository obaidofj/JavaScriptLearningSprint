
# Day 12 : SCOPE & HOISTING QUESTIONS
## - day :one: :tow:


This day about varables scopes and how they specified



## Coding Examples

```javascript
console.log(outerName); //undefiened
var outerName = "global"; 
console.log(outerName); //global

function someFunction() {
  console.log(outerName);

  if (true) {
    var outerName="inside";
    let localVar = "in block scope"; 
    console.log(localVar); //in block scope
  }
}

someFunction();
console.log(outerName); //inside

```


## Coding Exercises

### [SCOPE & HOISTING QUESTIONS ,QUESTION #1 :](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day2-tasks/tasks.md)

#### My Solution


```javascript
function testScope3() {
  var a = 36;
  let b = 100;
  const c = 45;

  console.log([a, b, c]);

  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log([a, b, c]);
  }

  console.log([a, b, c]);
}

testScope3();

// choices:
// A) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 36, 2, 3 ]
// B) [ 36, 100, 45 ] | [1, 2, 3 ] | [ 36, 100, 45 ]
// C) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 1,100, 45 ]
// D) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 1, 2, 3 ]
```

the the answer is choise C :

C) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 1,100, 45 ]

first 
console.log([a, b, c]);
will print 36, 100, 45] as a,b and c are declared before globaly and has 36, 100, 45 values acoordicly but then in local scope var a redeclared and reinitalized to 1 (and this will initalize global a to 1)
so next console.log in the block prints
 [ 1, 2, 3 ]
 and because only variable a rediclred by var (function scope not block scope)so it is rediclared globaly and now has the value of 1 then
 the last console.log will print
 [ 1,100, 45 ]
