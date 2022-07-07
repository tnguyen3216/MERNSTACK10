// Destructuring is a way to reduce the numbers of variable initializations in our code
//a way to assign data without tracing from object to object and without intializing multiple variables
// let userDetails = ["Tohny",19,"somewhere on earth"]
// let myName = userDetails[0]
// let myage = userDetails[1]
// let myadd = userDetails[2]

// console.log(myName, myadd, myage)

//1. Array Destructuring

//a. declaration reduction

//let [myName, myage, myadd, mysession] = ["Toan",20,"somewhere on california", "MERNStack"]

//console.log(myName, myadd, myage, mysession)

//b. do defaulting of variables

let [myName, myage, myadd, mysession = "Destructuring"] = ["Toan",20,"somewhere on california"]

console.log(myName, myadd, myage, mysession)


//c. assign subset of array's as rest parameter

let [a, b, c, d, e, ...f] = [1,2,3,4,5,6,7,8,9,10]

console.log(a, b, c, d, e, f)

//d. swapping of variables

let [var1, var2] = ["value1", "value2"];

[var1, var2] = [var2, var1]

console.log(var1, var2)

//2. Object Destructuring

let User = {
    name : "Kim",
    address : {
        addres1 : "Somewhere on earth",
        addres2 : "Somewhere in US"
    },
    session : "ES6"
}

// let sessionName = User.session;
// let address = User.address;
// let name = User.name;

// console.log(sessionName, address, name)

let {name,address:{addres2, address3 = "Some where in california"}} = User;

console.log(addres2, address3, name)

//question :

let StudentTest = {
    firstname : "Put your name",
    address : " ??",
    sessionTopics : {
        covered1 : "CoreJS",
        covered2 : "OOJS"
    }
}

//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest