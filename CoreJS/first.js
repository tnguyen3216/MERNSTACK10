console.log("This is the first code in server")

Test("Hoisting")


function Test(params) {
    console.log(params);

    // function TestChild(params) {
    //     name
    // }
    return params;
}

Test(new Date())
console.log(Test(17457))
Test("Toan Ngyuen")

// int myval = 25;
// String mystring = new String("")

//undefined, string, number, boolean, null, object

console.log(myval); // undefined - the default variable value in js
console.log(typeof myval)

var myval = "Toan";
console.log(myval)
console.log(typeof myval)

myval = 51;

console.log(myval)
console.log(typeof myval)

var myval = true;
console.log(myval)
console.log(typeof myval)

myval = {name : "Toan"}
console.log(myval)
console.log(typeof myval)

myval = null; //value is null
console.log(myval)
console.log(typeof myval) // type object