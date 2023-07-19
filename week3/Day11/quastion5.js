const complexCoercion = (input) => {
    if (typeof input === "number") {
      return Boolean(String(input));
    } else if (typeof input === "string") {
      return Boolean(input);
    } else if (input === null || input === undefined) {
      return false;
    } else {
      return input;
    }
  };

  
console.log("complexCoercion(42) :",complexCoercion(42)); // Output: true
console.log("complexCoercion(0) :",complexCoercion(0)); // Output: true
console.log("complexCoercion(-10) :",complexCoercion(-10)); // Output: true
console.log("complexCoercion('Hello') :",complexCoercion("Hello")); // Output: true
console.log("complexCoercion('') :",complexCoercion("")); // Output: false
console.log("complexCoercion(null) :",complexCoercion(null)); // Output: false
console.log("complexCoercion(undefined) :",complexCoercion(undefined)); // Output: false
console.log("complexCoercion(true) :",complexCoercion(true)); // Output: true
console.log("complexCoercion(false) :",complexCoercion(false)); // Output: false
console.log("complexCoercion({ a: 42 }) :",complexCoercion({ a: 42 })); // Output: { a: 42 }
