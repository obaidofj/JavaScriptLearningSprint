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

  