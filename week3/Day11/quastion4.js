function compareObjects(input1, input2) {
    if (typeof input1 !== "object" || typeof input2 !== "object") {
      return [input1, input2];
    }
  
    const keys1 = Object.keys(input1);
    const keys2 = Object.keys(input2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (!input2.hasOwnProperty(key) || input1[key] !== input2[key]) {
        return false;
      }
    }
  
    return true;
  }

  
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };
const obj3 = { name: "Jane", age: 25 };
const obj4 = { name: "Jane", age: 25 , grade: '6th' };
const str = "Hello";
const num = 42;

console.log("\ncompareObjects({ name: 'John', age: 30 }, { name: 'John', age: 30 }) : \t",compareObjects(obj1, obj2)); 
console.log("\ncompareObjects({ name: 'John', age: 30 }, { name: 'Jane', age: 25 }) : \t",compareObjects(obj1, obj3)); 
console.log("\ncompareObjects({ name: 'Jane', age: 30 }, { name: 'Jane', age: 25 , grade: '6th'}) : \t",compareObjects(obj3, obj4)); 
console.log("\ncompareObjects({ name: 'John', age: 30 }, 'Hello') : \t",compareObjects(obj1, str)); 
console.log("\ncompareObjects({ name: 'John', age: 30 }, 42) : \t",compareObjects(obj1, num)); 
