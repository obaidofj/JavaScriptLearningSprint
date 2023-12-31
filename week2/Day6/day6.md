
# Day 6: JavaScript: The Hard Parts, V2 : Map , Filter and Reduce
## - day :six:

this day about :
 - Map higher order function(HOF) which take a function as parameter and apply it for each element and return a new array.
 - Filter HOF which take a function as parameter and that function applied to each elment to check if the result is true or false if ture the element will be returned in the result
 - Reduce HOF which take a starter number and a two arguments function as parameter and that function applied to each elment using accumelator also and the first value of accumulator assigned to the starter number.

## Lesson Summary
 this day about the higher-order function which is a function that takes one or more functions as arguments, 
 or returns a function as its result. 
 and they can be used as a powerful tool that can be used to make complex logic and make code more reusable.
 examples of HOF are Map , Filter and Reduce .


## Coding Example

```javascript
//map
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

//filter
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

//reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // 15


```

#### My Solution

1. ### [Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)

```javascript
const squareList = arr => {
    // Only change code below this line
    return arr
      .filter(num => Number.isInteger(num) && num > 0) // Filter out non-integer and negative numbers
      .map(num => num ** 2); // Square the remaining positive integers
    // Only change code above this line
  };
```

2. ### [Apply Functional Programming to Convert Strings to URL Slugs](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)

```javascript
// Only change code below this line
function urlSlug(title) {
  return title.trim()
    .split(/\s+/) 
    .map(word => word.toLowerCase()) 
    .join('-'); 

}
// Only change code above this line
```

3. ### [Exercises for functions and callbacks Question 1](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day1-tasks/tasks.md)

```javascript
const mapAsync = (arr, callback) => {
  return new Promise((resolve, reject) => {
    if (Array.isArray(arr)) {
      resolve(arr.map(async item => await callback(item)));
    } else {
      reject("error in parameters");
    }
  });
};

mapAsync([1, 2, 3, 4, 5], item => item + 4)
  .then(res => console.log(res))
  .catch(err => console.log(err));

```

3. ### [Exercises for functions and callbacks Question 2](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day1-tasks/tasks.md)

```javascript
function sumRange(start, end) {
    
    if (start === end) {
      return start;
    }
  
    
    return start + sumRange(start + 1, end);
  }
  
  // Examples of usage
  console.log(sumRange(2, 6)); 
  console.log(sumRange(3, 9)); 
```