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