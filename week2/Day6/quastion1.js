const squareList = arr => {
    // Only change code below this line
    return arr
      .filter(num => Number.isInteger(num) && num > 0) // Filter out non-integer and negative numbers
      .map(num => num ** 2); // Square the remaining positive integers
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);