//We have literals mostly in the form of objects to simplify the needs of variables

var Name = "Kim"; //Name1, Name2
var Age = 20
var Address = "Somewhere on earth"

console.log(Name, Age, Address)

var User = {
    name : "Tohney",
    age : 22,
    address : "somewhere in US"
}

console.log(User)


var UserToan = {
    name : "Toan",
    age : 19,
    address : "somewhere in US"
}

console.log(UserToan)

console.log(UserToan.name)
UserToan.name = "Abinaya";
console.log(UserToan.name)