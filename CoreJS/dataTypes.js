//datatype for different set of values 
//basic types - 
//primitive-types : string, number, boolean, undefined, null
//non-primitive type : Object


console.log(myValue) //undefined : default value for identifiers

var myValue = "Hoyan";

console.log(myValue)
console.log(typeof myValue)

//var myValue = 2500; //re-declaration is allowed for var
myValue = 2500; //re-assignment //dynamic typing

console.log(myValue)
console.log(typeof myValue)

//myValue = 2.50000; 
//console.log(typeof myValue) //number is common for all ints, decimals and other numeric value

myValue = true;

console.log(myValue)
console.log(typeof myValue)

myValue = null;

console.log(myValue)
console.log(typeof myValue) //object

myValue = undefined; //undefined

console.log(myValue)
console.log(typeof myValue)

myValue = {}; //object

console.log(myValue)
console.log(typeof myValue)


//symbol data introduced in ES6
var mySym = Symbol("New Value");
console.log("Symbol ", mySym);
console.log("TypeOf Symbol ", typeof mySym);