
function isEmptyValue(value) {
    //write your own code here
    return value===undefined|| value=== null || value ==="";
  }

  console.log("'' is Empty value :",isEmptyValue(''));
  console.log("null is Empty value :",isEmptyValue(null));
  console.log("undefined is Empty value :",isEmptyValue(undefined));
  console.log("'undefined' is Empty value :",isEmptyValue('undefined'));
  console.log("'abc' is Empty value :",isEmptyValue('abc'));
  console.log("24 is Empty value :",isEmptyValue(24));
  console.log("'23' is Empty value :",isEmptyValue('23'));
  console.log("' ' is Empty value :",isEmptyValue(' '));