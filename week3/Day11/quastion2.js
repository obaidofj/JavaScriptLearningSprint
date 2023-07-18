const checkNaN = (value) => {
    //write your own code here
    return value!==value; //or return isNaN(value); or return Object.is(value,NaN); 
    
    
  }


  console.log("NaN is NaN:" , checkNaN(NaN));
  console.log("'aabcstr' is NaN:" , checkNaN('aabcstr'));
  console.log("34 is NaN:" , checkNaN(34));
  console.log("'34' is NaN:" , checkNaN('34'));