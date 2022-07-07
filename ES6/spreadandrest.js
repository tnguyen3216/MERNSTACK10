//spread operator : spreads the array in conservational manner, we also use it for the shallow copy of objet arrays

let arrayOFCities = ["Rome", "New York", "New Delhi", "London"];

// console.log(arrayOFCities[1])
// console.log(arrayOFCities[2])
// console.log(...arrayOFCities)

var User = {
    name : "Kim"
}
var User2 = {
    name : "Jhong"
}

var User3 = {
    ...User, address : "new street"
}

//console.log(User3);

function add(x = 0, y = 0, z = 0){
    //console.log("this + scope + context + execution context ", this)
    console.log(this.name)
    console.log(this.address)
    return x+y+z;
}

//console.log(add(1,2,3))
let arrayNum = [500,600,800];

//console.log("using spread " + add(...arrayNum))

//console.log("using apply " + add.apply(User, arrayNum))

//console.log("using apply " + add.apply(User3, arrayNum))

let Accounts ={
    accountHolderName : "Tohney",
    balance : "$6000",
    address : {
        address1 : "address1",
        address2 : "address2"
    }
}

//let PurhaseOrder = {Accounts,  DeliveryAddress : "address3"};
let PurhaseOrder = {...Accounts,  deliveryAddress : "address3"};
//console.log(PurhaseOrder)

Accounts.accountHolderName = "Toan";
//console.log(PurhaseOrder)

//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread


//rest parameter  ... to attach rest of the elements

function useRestParams(y=0, ...params){
    console.log(params)
}

let arraNm = [1,2,3,4]

//useRestParams(...arraNm)

//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
// generatearray(start, end)
// largesum(...arrayNum) and returns sum

function largesum(...params){ //array rest
    //[1,2,3]
    let summ = params.reduce((prevValue, currentValue, cuurentIndex, arr)=>{
        //console.log(prevValue)
        //console.log(currentValue)
        //console.log(cuurentIndex)

         return prevValue+currentValue;
     },0);
 
     return summ;
 }

 //console.log(largesum(...arrayNum))

 let newArr = [3242,32423,23423,32423,23423,434234,32423,423423423,423,423,4234,23423,423,423,423,423];

 console.log("Using Rest " + largesum(...newArr)) //array spread