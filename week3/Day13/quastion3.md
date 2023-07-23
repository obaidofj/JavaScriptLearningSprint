
# Scope & Function Expressions:
## QUESTION:
Consider the 2 following examples and distinguish the different output in each one with them with a reasoning.

Example 1:
```javascript
function outer1() {
  var x = 10;

  var inner1 = function() {
    console.log(x);
  };

  inner1();
}

outer1(); // Output: 10
```
Reasoning for example 1's output:
.................................................................................
## my reasoning :
the inner function is a clousur function and it preserve the access to the x varaiable and its value here is 10
when outer called the inner excuted and log the preserved value of x which is 10

Example 2:
```javascript
function outer2() {
  var x = 10;

  var inner2 = function() {
    var x = 20;
    console.log(x);
  };

  inner2();
}

outer2(); // Output: 20
```
Reasoning for example 2's output:
.................................................................................
## my reasoning :
the inner function is a clousur function here also and it preserve the access to the x varaiable and becuase it is redeclared here it has a new value of 20
so when the outer called the inner excuted and log the last preserved value of x which is 20