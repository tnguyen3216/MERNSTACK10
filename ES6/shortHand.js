// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow",
dog = "Woof",
bird = "Chrip",
lion = "roar";

let animalSoundES5 = {
    cat : cat,
    dog : dog,
    bird : bird,
    lion : lion
 }

 //console.log("animalSoundES5 " + animalSoundES5) // [object object]

 //console.log("animalSoundES5 " + JSON.stringify(animalSoundES5))

 console.log("animalSoundES5 ", animalSoundES5) //it auto parses value into JSON string /JSON

 let animalSoundES6 = {
    cat ,
    dog ,
    bird ,
    lion 
 }
 console.log("animalSoundES6 ", animalSoundES6)


 module.exports = animalSoundES6;