# Day14 , ADVANCED SCOPE:
## QUESTION #1
Given the following code snippet and explain what's happening.
```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("value of [i] is: ", i);
    }, 100);
}
```
The current output is: "value of [i] is: 5" five times.

The output should be:

"value of [i] is: ", 0 "value of [i] is: ", 1 "value of [i] is: ", 2 "value of [i] is: ", 3 "value of [i] is: ", 4

Without changing anything in the for loop's code itself, provide a solution to fix it.

## my solution :
if we change the inside for loop as follows it will be as desired:
```javascript
for (var i = 0; i < 5; i++) {
    let j=i;
    setTimeout(function() {
      console.log("value of [i] is: ", j);
    }, 100);
}
```
and this because there will be a different variable for each call (by rediclaring it by let each time) not the same variable i .