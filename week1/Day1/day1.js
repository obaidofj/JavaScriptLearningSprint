// examples:

let aa=8;
let strValue="first part";
let name="mohammed";
// multiplication assignment operator 
aa*= 4; // now a value is 8 * 4 = 32  

// Concatinating string with += operator
strValue+=" second."; // now the value of strValue varaible = 'first part second.'

// using brackets to access the 3rd to last character
console.log(name[name.length-3]); // the output will be m (the m before e )

//solutions:

//** 1- Solution for Multiplication Assignment operator :
let a=2,b=4,c=6;
a *=  5;
b *=  3;
c *=  10;
console.log("a=",a,"b=",b,"c=",c);

//** 2- Solution for concatinatiog string by adding Assignment operator :



let myStr;
myStr="This is the first sentence. ";
myStr+="This is the second sentence.";


//** 3- Solution for concatinatiog string by adding Assignment operator :

let lastName="ahmad"

const secondToLastLetterOfLastName = lastName[lastName.length-2];

console.log("secondToLastLetterOfLastName = ", secondToLastLetterOfLastName);