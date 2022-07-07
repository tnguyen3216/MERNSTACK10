//arrow functions or fat arrow functions are the most important updates/features of es6
// two thing we achieve with arrow functions as -

//1. easy way of writing functions -- ()=>

function name(params) {
    console.log(params)
}
//name("Toan")

let arrowName = (params)=>{
    console.log(params)
}
//let arrowName = (params) => console.log(params)
//arrowName("Nguyen")

// let add = (a,b)=>{
//     return a+b
// }
let add = (a, b)=>a+b
//console.log(add(5,6))

//2. it helps resolving the issue of context, basically the bind stuff
// it resolves the context of a function by copying the context of immediate parent

var SoftwareEnggineer = {
    Name : "XYZ Zukerberg",
    Age : 25,
    Skill : "JS, ES6, nodejs",
    
    GetSkills : function() {
        //console.log("Skill " + this.Skill) //this -will be the SoftwareEnggineer object

        //by using bind
        // setTimeout(function() {
        //     //console.log(this)//this - refers to the dynamic context and here we have it as Timeout Object

        //     console.log("Skill Inside SetTimeOut " + this.Skill)
        // }.bind(this), 3000);

        //arrow function supplies the conext by coppying it from the parent function
        setTimeout(()=>{
            console.log("Skill Inside SetTimeOut Arrow Function " + this.Skill)
        }, 4000)
    }
}

SoftwareEnggineer.GetSkills();

//change calculator methods into arrow function