//call : is used to change the context of any function at runtime, and then it executes the function immediately

 name = "outer session name"

var SessionInfo = {name : "CoreJS", duration : "10 days", concepts: " Multiple"}
var SessionInfo2 = {name : "CoreJS2", duration : "12 days", concepts: " None"}


function PrintName(param1, param2, param3) {
    console.log(this.name) //this - the context in which we want to execute our function
    console.log(param1)
    console.log(param2)
    console.log(param3)
    return "Print Name Executed!!"
}
// PrintName.call(null,"Executing Session Info","Param2","Param3")
// PrintName.call(SessionInfo,"Executing Session Info","Param2","Param3")
// PrintName.call(SessionInfo2,"Executing Session Info2","Param2","Param3")

// Apply : is used the same way call is used but, we can pass the parameters in the form of array
// Apply : is the inbuilt method used to change the context of a function at runtime, but it accepts function parameters in array format

var BMW = {name : "BMW", hatchback : "Yes", price : "2000", openRoof : "Yes"}
var SomeCar = {name : "Toyota", hatchback : "No", price : "1000", openRoof : "No"}

function GetVehicleInfo(authorised, noOfWheels, crashTest, highSpeed, countryMake) {
    console.log(`
        Vehicle Name ${this.name}
        Vehicle hatchback ${this.hatchback}
        Vehicle price ${this.price}
        Vehicle openRoof ${this.openRoof}
    `)

    console.log(`
        Vehicle authorised ${authorised}
        Vehicle noOfWheels ${noOfWheels}
        Vehicle crashTest ${crashTest}
        Vehicle highSpeed ${highSpeed}
        Vehicle countryMake ${countryMake}
    `)
}
//GetVehicleInfo.apply(BMW,["Yes","5","4","Yes","US"])
//GetVehicleInfo.apply(SomeCar,["Yes","5","4","Yes","India"])


var User = {
    name : "some name",
    getName : function () {
        console.log("this ", this)
        //console.log("name - outer ", this.name);  
        
        setTimeout(function () {
            //console.log("name - inner after one second ", this.name)
            console.log("this ", this)
        }, 1000)
    }
}

User.getName()