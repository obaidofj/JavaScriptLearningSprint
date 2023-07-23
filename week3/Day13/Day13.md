# Day 11 :
 this day about high order functions which take functions as argument and this make them as more powerfull than normal functions and about clousurs which are functions that keep access for variables.


 ## topics :
 - Higher Order Functions(HOF)
 - clousurs


## Examples:

```javascript
//clousers
function outerFunction() {
  let outerVar = 10;

  function innerFunction() {
    console.log(" outerVar:", outerVar);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: "outerVar: 10"

//higher order function


function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }



function calculator(a, b, ...calculatingFunctions) {
    const results = {};
    results['arguments']='a= '+a+' , b= '+b ;
    calculatingFunctions.forEach((func) => {
      if (typeof func === "function") {
        const functionName = func.name;
        results[functionName] = func(a, b);
      } else {
        console.log("Invalid function:", func);
      }
    });
  
    return results;
  }
  
  const result = calculator(5, 3, add, subtract, multiply);
  console.log(result); //{ arguments: 'a= 5 , b= 3', add: 8, subtract: 2, multiply: 15 }
```

