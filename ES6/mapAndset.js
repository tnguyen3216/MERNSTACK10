//Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
//Allows us to use a lot of short hand methods to get, set, delete and do other operations without much pain
//remembers insertion order so the fetch is always easy compared to any other collection

//{{"key":object},"This is the value"}
let myMap = new Map();

let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "A string value associated to string key");
myMap.set(keyObj, "This is a object type of key")
myMap.set(keyFunc, "This is a function type of key")
myMap.set(keyNum, "This is a numeric type of key");

console.log(myMap.get(keyString));

//console.log(myMap.get({}));
//console.log(myMap.get(function() {}));

console.log(myMap.get(keyObj));

console.log(myMap.delete(keyNum))
console.log(myMap.entries())

console.log(myMap.has(keyFunc))
//console.log(myMap.entries())
console.log(myMap.delete(keyFunc))
//console.log(myMap.entries())

console.log(myMap.has(keyFunc))

//console.log(myMap.get(function() {}));

//console.log(myMap.size)
myMap.set("array",["sda","asdas"])
//myMap.set("array",["sda","asdas"])

console.log(myMap.entries())
//console.log(myMap.size)


//when we need a iterable/collection with unique values
//Set : this maintains a set of unique collection with additional properties and methods like map

let StudentSet = new Set(["Hoian", "Kim", "Cody", "Tohny","Kim"])

console.log(StudentSet.add("Toan"))

console.log(StudentSet.add("Cody"))
console.log(StudentSet.values())


console.log(StudentSet.delete("Kim"))

console.log(StudentSet.values())

//create a map with name student add students, their timezones, session interested as keys