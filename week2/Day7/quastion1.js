function calculateAverage(nums) {
    return function () {
      const sum = nums.reduce((acc, num) => acc + num, 0);
      return sum / nums.length;
    };
  }
  
  // Example of usage
  const avg1 = calculateAverage([2, 2, 3, 4, 5]);
  console.log(avg1()); // Output: 3.2
  
  const avg2 = calculateAverage([16, 22, 30, 40, 51]);
  console.log(avg2()); // Output: 31.8
  