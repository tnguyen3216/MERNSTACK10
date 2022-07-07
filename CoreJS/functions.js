//Functions : Javascript is functional programming language and functions are the first class member citizens.

//Name Functions

function NewFunc(params) {
    //open and closed bracket represent the scope of a function and function definition
    //functions must return something, if not returning anything then JS returns (undefined) in place

    return params;  
}

console.log(NewFunc("Toan"))
NewFunc()


//function expression
var myVarFunc = function (params) {
    //
};

//IIFE - Immediately Executable Function Expression

(function IIFEFunc(params) {
    console.log(params)   
})("IIEF Execution")

//IIFEFunc();

//create an iife without params


//nesting of functions
function A(params) {
    var a;
    //console.log(c) //can't access as accessibility is from top to bottom
    function B(params) {
        console.log(a)
        function C(params) {
            var c = ""
            console.log(a)
        }
    }    
}