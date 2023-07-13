function sumRange(start, end) {
    
    if (start === end) {
      return start;
    }
  
    
    return start + sumRange(start + 1, end);
  }
  
  // Examples of usage
  console.log(sumRange(2, 6)); 
  console.log(sumRange(3, 9)); 
  