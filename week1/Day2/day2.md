
# Day 2 :
## -day :two:

in this day we show how to deal with objects and some array methods and issues , the slice method and the spread operator to combine tow arrays



## Lesson Summary
In this day i learnde about how to deal with objects and arrays and in first
challeng was how to lookup about object property from aray of objects and i used 
array find method wich need a function as parameter for it to it to know how to find.
in secound challenge was about array slicing by .slice() method which take 2 parameters first is start index to slice from it and
second the end index and it is excluded
third challenge is using  spread operator which is mainly to flat elements and we can use it to combine array with another one


## Coding Examples

```javascript
// dealing with array of objects
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

```


## Coding Exercises

### [Profile Lookup ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)
### [Copy Array Items Using slice() ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

### [Combine Arrays with the Spread Operator ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)

#### My Solution

** 1- Profile Lookup : **

```javascript
 function lookUpProfile(name, prop) {
    
    const foundContact = contacts.find((contact) => contact.firstName === name );
 
    if (!foundContact)
    return "No such contact";
    else if (foundContact[prop] && foundContact )
      return foundContact[prop];
    else if (!foundContact[prop])
      return "No such property";
   
  }
```

** 2- Copy Array Items Using slice() : **

```javascript
function forecast(arr) {
  
   return arr.slice(2, 4);
   
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

```

** 3- Combine Arrays with the Spread Operator : **

```javascript
 function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence =['learning',...fragment,'is', 'fun'];
    return sentence;
  }
  
  console.log(spreadOut());
  ```


