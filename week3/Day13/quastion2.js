const obj = {
    name: 'John',
    greet: function (greeting) {
      console.log(`${greeting}, ${this.name}!`);
    }
  };
  
  const preserveThis = (func) => {
    return func.bind(obj);
  };
  
  const preservedGreet = preserveThis(obj.greet);
  
  preservedGreet('Hello'); 
  