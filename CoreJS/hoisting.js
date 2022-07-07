//Hoisting : A phenomenon when we are able to get the values in variables or functions even before they are decalred
// this also gives a compilation behaviour to javascript, so this creates a snapshot of all the vars and functions
// variables default value - undefined (variable hositing)
// functions dafault value - function definition (functional hoisting)

console.log(someValue) //undefined

PrintValue(); //

var someValue = "Some Value"

PrintValue();

function PrintValue(params) {
    console.log(someValue)
}

function HoistingFunction(params) {
    console.log(someValue); //hoisting inside the function
    
    //var someValue = "Some Value inside";
    var someValue = "Some Value inside";

    console.log(someValue); 
}

HoistingFunction();


//function expression 

//console.log(functionExpression()) ;//undefined - Error : functionExpression is not a function

var functionExpression = function(){
    console.log(someValue)
}