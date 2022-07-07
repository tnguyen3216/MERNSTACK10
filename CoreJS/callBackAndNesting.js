// callback functions are the functions that we can pass as parameter to another function 
// the best part is call back function not just hold the definition, but also keep hold the scope

var someGlobalValue = 1500;

function Print(params) {
    console.log("We are printing "+someGlobalValue+" "+ params)
}

function PrintB(params) {
    console.log("We are printing B "+ params)
}


function GetUserName(PrintCallBk, username){
    //console.log(username)
    PrintCallBk(username)
}

function GetUserAge(PrintCallBk, userAge){
    //console.log(userAge)
    PrintCallBk(userAge)
}

// GetUserName("toan")
//GetUserAge(22)

GetUserName(Print, "toan")
GetUserAge(PrintB, 22)

//by using callback function print user details



// nested functions do hold the scope of outerfunctions variables or properties //javascript currying
var e = 15; //global scope 

function sum1(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var sum2 = sum1(1);
var sum3 = sum2(2);
var sum4 = sum3(3);
var result = sum4(4);
console.log(result)


var myFunc = sum(1)(2)(3)(4) //chain of execution
console.log(myFunc)


globalThis.name = "The Global Value"