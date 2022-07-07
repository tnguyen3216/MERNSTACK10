//bind : changes the context of a function at runtime, and doesn't executes immediately but when required

var SoftwareEnggineer = {
    Name : "XYZ Zukerberg",
    Age : 25,
    Skill : "JS, ES6, nodejs",
    
    GetSkills : function() {
        console.log("Skill " + this.Skill) //this -will be the SoftwareEnggineer object
        var that = this; //copying the scope to that

        //using the copy of parent object
        setTimeout(function() {
            console.log("Skill Inside SetTimeOut Using That " + that.Skill)
        }, 1000);

        //by using bind
        setTimeout(function() {
            //console.log(this)//this - refers to the dynamic context and here we have it as Timeout Object

            console.log("Skill Inside SetTimeOut" + this.Skill)
        }.bind(this), 3000);
    }
}

SoftwareEnggineer.GetSkills();


//html example
{/* <button id="newBtnBind">Practice Div</button> */}
// var btn = document.getElementById("newBtnBind")
// var onclick = function(){alert("The name is "+ this.name)}

// btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
// btn.addEventListener("click", this.onclick, false) //without bind context remains global

// var user1 = {
//     name : "Estben"
// }

// btn.removeEventListener("click",this.onclick)