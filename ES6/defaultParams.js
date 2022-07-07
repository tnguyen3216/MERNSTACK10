// default params - are the parameter values that we set as default at the time of function definition

// var name = undefined
// var price = undefined
// var brandValue = undefined

function GetVehicleDetails(name = "Default Vehicle", price = "$0", brandValue = "Default Normal") {
    console.log(`
        Name : ${name}
        Price : ${price}
        Brand Value : ${brandValue}    
    `)
}

//GetVehicleDetails();
//GetVehicleDetails("BMW", "$5000", "Amazing");
//GetVehicleDetails("Toyota","$5000");


function Divide(param1 = 1, param2 = 1) {
    //return isNaN(param1/param2);
    // if (typeof param1 != undefined && typeof param2 != undefined) {
        
    // }
    //let output =  param1 && param2 ? param1/param2 : "The values are not provided"

    //return output;
    
    return param1/param2;
}

console.log(Divide())

console.log(Divide(80, -80))