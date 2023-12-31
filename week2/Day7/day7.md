
# Day 7 : JavaScript: The Hard Parts, V2 : Closures
## -day :seven:

this day a bout clouser functions which keep access to the variables of its enclosing scope after they returned

## Lesson Summary
this about clouser functions and about how to compose functions and how to make compasable functions


## Coding Examples

```javascript
const outerFunction = () => {
  let x = 10;

  const innerFunction = () => {
    return x;
  };

  return innerFunction;
};

const innerFunction = outerFunction();
console.log(innerFunction()); // 10

```


## Coding Exercises

### [ ](https://www.freecodecamp.org/learn/)

#### My Solution

1. ### [Quastion 1 about closures](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md)

```javascript
function calculateAverage(nums) {
    return function () {
      const sum = nums.reduce((acc, num) => acc + num, 0);
      return sum / nums.length;
    };
  }
  
  // Example of usage
  const avg1 = calculateAverage([2, 2, 3, 4, 5]);
  console.log(avg1()); // Output: 3.2
  
  const avg2 = calculateAverage([16, 22, 30, 40, 51]);
  console.log(avg2()); // Output: 31.8
  

```

2. ### [Quastion 2 about closures](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md)

```javascript
function calculateAverage(nums) {
    return function () {
      const sum = nums.reduce((acc, num) => acc + num, 0);
      return sum / nums.length;
    };
  }
  
  // Example of usage
  const avg1 = calculateAverage([2, 2, 3, 4, 5]);
  console.log(avg1()); // Output: 3.2
  
  const avg2 = calculateAverage([16, 22, 30, 40, 51]);
  console.log(avg2()); // Output: 31.8
  

```

3. ### [Quastion 3 about closures](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md)

```javascript
function powerOf(base) {
    return function (exp) {
      return Math.pow(base, exp);
    };
  }
  
  //Example 
  const powerOfTwo = powerOf(2);
  console.log(powerOfTwo(3)); 

```

4. ### [Quastion 4 about closures](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md)

```javascript
function compose(...functions) {
    return function(arg) {
      let result = arg;
      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i]( result);
      }
      return result;
    };
  }

  
  function plusTwo(x) {
    return x + 2;
  }
  
  function multiplyByThree(x) {
    return x * 3;
  }
  
  function subtractTwo(x) {
    return x - 2;
  }
  
  const composedFn = compose(subtractTwo, multiplyByThree, plusTwo);
  console.log(composedFn(5)); // Output: 19 - 5+2 => 7*3 => 21-2 =19

  

```
