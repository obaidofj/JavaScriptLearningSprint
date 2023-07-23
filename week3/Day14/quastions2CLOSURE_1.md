# CLOSURE:
## QUESTION #1
Create a function called privateCounter() that behaves like a private counter. The function should not have any public variables, and the count should only be accessible through a closure. It should have two methods: increment() and getCount(). The increment() method should increment the count, and getCount() should return the current count.

# my solution :
this is the answer for the above quastion :
```javascript
function Counter() {
  let count = 0; 
 
  return {
    increment: ()=> count++ ,
    getCount: ()=> count
  };
}

const counter = Counter();

counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2

counter.increment();
console.log(counter.getCount()); // Output: 3
```