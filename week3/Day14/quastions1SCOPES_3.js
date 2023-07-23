let functions = [];

for (var i = 0; i < 5; i++) {
  let j=i;
  functions.push(() => {
    console.log("Current value of i is:", j);
  });
}
functions.forEach((func) => func());