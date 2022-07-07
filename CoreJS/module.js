//Module : a function or a complete file in javascript is termed as module like this is my module.

var Student = {
    Name : "Some Name",
    Age : 101,
    GetStudentDetails : function (id) {
        id >= 0 ? console.log(`Name is ${this.Name} and Age is ${this.Age}`) : console.log(`Please pass a valid Id`)
    }
}

var Account = {
    Name : "Savings Account",
    Number : "12asd3123asd351as3",
    GetStudentDetails : function (id) {
        console.log("id "+ id)
        id >= 0 ? console.log(`Name is ${this.Name} and Age is ${this.Number}`) : console.log(`Please pass a valid Id`)
    }
}

//module.exports = Student;

module.exports = {
    Student,
    Account
}