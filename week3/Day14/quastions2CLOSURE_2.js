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