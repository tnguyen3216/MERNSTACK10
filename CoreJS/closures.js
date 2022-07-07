// Encapsulation : Without access modifiers JS follows a paradigm in which we have two functions
// one is parent and another one is child function and upon execution parent function returns child function with some set data
// where as doesn't returns another set of data


// function Parent(params) {
//     //things we specify to make private and public

//     return function Child(params) {
//         // stuffs that are retuned would be public
//     }
// }


function Account(name, age) {
    var name= name; //public
    var age = age; //Public
    //var accountnumber = accountnumber; //public
    var accountBalance = "2000$"; //private
    var password = "xyzm9asd"; //private

    var Child = function(accountnumber, getBalance, isAdmin) {
        var retObj = {
            //name : name //short hand : if the key and value from the variable we are reading are same, then we refer to one
            name,
            age,
            accountnumber            
        };

        var retObjBal = {
            //name : name //short hand : if the key and value from the variable we are reading are same, then we refer to one
            name,
            age,
            accountnumber,
            accountBalance
        }

        return getBalance ? retObjBal : retObj;
    }

    return Child;
}

var AccObj = Account("Toan", 19);
//console.log(AccObj)
console.log(AccObj(254625))
console.log(AccObj(254625, true))