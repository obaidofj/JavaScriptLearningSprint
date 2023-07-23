function powerOf(base) {
    return function (exp) {
      return Math.pow(base, exp);
    };
  }
  
  //Example 
  const powerOfTwo = powerOf(2);
  console.log(powerOfTwo(3)); 
  
