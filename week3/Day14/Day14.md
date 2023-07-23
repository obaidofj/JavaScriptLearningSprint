# Day 11 :
 this day about advance scopes and clousurs


 ## topics :
 - advance scopes
 - clousurs
## Examples:

```javascript
function outerFunction() {
    let outerVar = "I am from the outer function";
  
    function innerFunction1() {
      console.log("Inner function 1 says:", outerVar);
  
      // Nested function within innerFunction1
      function nestedFunction() {
        console.log("Nested function says:", outerVar);
      }
  
      nestedFunction();
    }
  
    function innerFunction2() {
      let innerVar = "I am from innerFunction2";
      console.log("Inner function 2 says:", innerVar);
    }
  
    innerFunction1();
    innerFunction2();
  
    // Block-scoped variable using let
    if (true) {
      let blockVar = "I am block-scoped";
      console.log(blockVar);
    }
  
    // Block-scoped variable using const
    {
      const constVar = "I am also block-scoped";
      console.log(constVar);
    }
  }
  
  outerFunction();
//output :  
// Inner function 1 says: I am from the outer function
// Nested function says: I am from the outer function
// Inner function 2 says: I am from innerFunction2
// I am block-scoped
// I am also block-scoped
```