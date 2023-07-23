
## QUESTION #2
Given the following code snippet and explain what's happening.

```javascript
for (let i = 0; i < 5; i++) {
   let array = [];
   array.push(i);
   console.log("Current array is: ", array)
}
```

The current output is:

"Current array is: [ 0 ]" "Current array is: [ 1 ]" "Current array is: [ 2 ]" "Current array is: [ 3 ]" "Current array is: [ 4 ]".

The output should be: "Current array is: [0, 1, 2, 3, 4]".

Provide a solution to fix it.

## my solution :
```javascript
const array = [];
for (let i = 0; i < 5; i++) { 
    array.push(i);
    console.log("Current array is: ", array)
 }
 ```
 here we do not rediclare array each time, so we declared it outside the for loop then it we keep add to same variable array
 but before each array was a new declared variable