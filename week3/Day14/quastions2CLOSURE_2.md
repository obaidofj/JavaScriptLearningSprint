CLOSURE:
QUESTION #2
Write a JavaScript function called generateFibonacci(count) that returns a closure. The closure should generate the next number in the Fibonacci sequence each time it is called. The generateFibonacci function should take a parameter count that determines how many times the closure will generate the next number, and it should use recursion for this purpose.

# my solution :

```javascript
function generateseqonacci(count) {
    let currentCount = 0;
    let seqPrev = 0;
    let seqCurr = 1;
  
    function seqonacciClosure() {
      if (currentCount >= count) {
        return ;
      }
  
      currentCount++;
      const result = seqPrev;
      const nextseq = seqPrev + seqCurr;
      seqPrev = seqCurr;
      seqCurr = nextseq;
  
      return result;
    }
  
    return seqonacciClosure;
}


const generateNextFibonacci = generateseqonacci(10);

for (let i = 0; i < 10; i++) {
  console.log(generateNextFibonacci()); 
}
```

