

function convertStringToNumber(input) {
    return  typeof input!== "string" ? {value:input, type:typeof input}: typeof +input === 'number' && !isNaN(input)? +input:{input:input, type:typeof input};
  }



console.log(convertStringToNumber("43"));
console.log(convertStringToNumber(NaN));
console.log(convertStringToNumber("abcstring"));
console.log(convertStringToNumber(null));