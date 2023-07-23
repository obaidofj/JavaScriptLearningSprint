# ADVANCED SCOPE:
## QUESTION #3
Given the following code snippet and explain what's happening.

```javascript
let functions = [];

for (var i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}
functions.forEach((func) => func());
```

The current output is:

"Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5"

The output should be:

"Current value of i is: 0" "Current value of i is: 1" "Current value of i is: 2" "Current value of i is: 3" "Current value of i is: 4"

Provide a solution to fix it.


## my solution:
her are the solution to make the output as desiered:

```javascript
let functions = [];

for (var i = 0; i < 5; i++) {
  let j=i;
  functions.push(() => {
    console.log("Current value of i is:", j);
  });
}
functions.forEach((func) => func());
```
and this fix it by provide a new var for each push not the same variable which is i .