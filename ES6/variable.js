//ES5 - released in 2009 and works on ecmascript base standards also called plain javascript, vanila javascript
//ES6 - released in 2015 and support ecmascript 6 standards to give us advance features closer to class based progm lang

//ES5 - var : functional scope hoisted variable
//ES6 - let and const : block scoped variables or lexical variables

//1. var is a functional scope, let and const are block scope (lexical scope) and doesn't support hoisting

// function name(params) {
//     var x = 8;
// }

var x = 9;
let x_let = 9.1
const x_const = 9.2

{
    var y = 10;
    let y_let = 9.12; //block scoped variable
    const y_const = 9.21 //block scoped variable
}

//console.log(x,y)
//console.log(x_let,x_const)
//console.log(y_let,y_const) // could not be accessd out side the block {}

//2. we can declare and assign var multple times, however let can be declared only once and can be assigned multiple times
// whereas const needs to be defined and declared at the same time and can't be reassigned again

var x = 99;
console.log(x)

//let x_let = 9.23; //error : redeclartion is not allowed

x_let = 9.23; //re-assignment of values is possible
console.log(x_let)

//for const we can't redeclare and re-assgin any value to it
//const x_const = 9.23; //error : redeclartion is not allowed

//x_const = 9.32 // reassignment is also not allowed

// we are required to assign the value as soon as we declare/define const
//const someConst; // not allowed  const someConst = 3.14;

//Hack : in case of reference variables, we can change/reassign the value to refernce
const User = {name : "Toan",  session : "MERNSTack"}

//User = {name : "Abinaya",  session : "MERNSTack"} //not allowed

User.name = "Abinaya" // changing value to the reference pointer
console.log(User.name)


//3. let/const resolve issues due to functional scope hold with var

var index = undefined; //gets hoisted
for (index = 0; index < 5; index++) {
    setTimeout(() => {
        //console.log(`index value ${index}`)//in case of var the value associated with it gets evaluated at the time of execution
    }, 1000);    
}

//console.log(index)


for (let k = 0; k < 5; k++) {
    setTimeout(() => {
        console.log(`index value ${k}`)//in case of var the value associated with it gets evaluated at the time of execution
    }, 1000);    
}

//console.log(k)