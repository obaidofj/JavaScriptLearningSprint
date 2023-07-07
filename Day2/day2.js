// arrays and objects
// examples:
let arrOfObjects=[{name:"ahmad",age:43},{name:"mohammed"}]
console.log(arrOfObjects[0]["name"])

let serRes=arrOfObjects.find(obj=>obj.name=='ahmad');
console.log(serRes);

//array slice method 

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

console.log(todaysWeather);


//combine arrays

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

console.log(thatArray);

//solutions:

// 1- Profile Lookup :
console.log("1- Profile Lookup ---------->");
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    const foundContact = contacts.find((contact) => contact.firstName === name );
 
    if (!foundContact)
    return "No such contact";
    else if (foundContact[prop] && foundContact )
      return foundContact[prop];
    else if (!foundContact[prop])
      return "No such property";
   
    // Only change code above this line
  }
  
  let res=lookUpProfile("Bob", "number");
    
  
  // running tests
  lookUpProfile("Bob", "number")
console.log('lookUpProfile("Bob", "number") : ',res);
let res2=lookUpProfile("Akira", "likes");
console.log('lookUpProfile("Akira", "likes") :',res2);
let res3=lookUpProfile("AkiraAAWWW", "likes");
console.log('lookUpProfile("AkiraAAWWW", "likes") :',res3);


// Copy Array Items Using slice()

console.log("2- Copy Array Items Using slice ---------->");


function forecast(arr) {
    // Only change code below this line
     return arr.slice(2, 4);
     
  }
  
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


  //3- Combine Arrays with the Spread Operator

  console.log("3- Combine Arrays with the Spread Operator ---------->");


  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence =['learning',...fragment,'is', 'fun'];
    return sentence;
  }
  
  console.log(spreadOut());