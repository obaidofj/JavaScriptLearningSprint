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
console.log("complexCoercion(42) :",complexCoercion(0)); // Output: false
console.log("complexCoercion(42) :",complexCoercion(-10)); // Output: true
console.log("complexCoercion(42) :",complexCoercion("Hello")); // Output: true
console.log("complexCoercion(42) :",complexCoercion("")); // Output: false
console.log("complexCoercion(42) :",complexCoercion(null)); // Output: false
console.log("complexCoercion(42) :",complexCoercion(undefined)); // Output: false
console.log("complexCoercion(42) :",complexCoercion(true)); // Output: true
console.log("complexCoercion(42) :",complexCoercion(false)); // Output: false
console.log("complexCoercion(42) :",complexCoercion({ a: 42 })); // Output: { a: 42 }
