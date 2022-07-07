// OOP's fundamentals -
//1. Inheritance - constructor function in es5 and then classes in es6
//2. Encapsulation - data hiding can be done through closures
//3. Polymorphism - Overriding (it supports in function as well in classes) and OverLoading (doesnot support overloading)
//4. Abstraction - 

CalArea() // undefined

function CalArea(param) {
    console.log("Area Of Circle "+ 3.14*param*param)    
}

CalArea(2) //12.56

function CalArea(p1,p2) {
    console.log("Area of Rectangle "+ p1*p2)    
}

CalArea(2,3) //6

function CalArea(p1,p2,p3) {
    console.log("Volume of cube "+ p1*p2*p3)    
}

CalArea(2,3,4) //24
// No overloading but overwriting


var CalArea = function () {
    console.log("Function Expression")
}

CalArea() // when function and func expression are there we have function as priority

// create an example of printing student details using overloading - 1(name),2(name, age),3(name, age, address),