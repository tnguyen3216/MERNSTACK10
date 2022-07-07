//problem - callback hell : due to un modularised or too many callbacks 

// function SigninSignUp(AuthenticationCallback, AuthorizationCallback, NavigationCallback) {
//     let ValidUser =  AuthenticationCallback(userid, password); //making a server call - ajax (in async)
//         if (ValidUser) {
//             let userRole = AuthorizationCallback(ValidUser); //making a server call - ajax (in async)            
//             //userRole.whatisTheOutput //success or failed -- promise
//             if (userRole) { 
//                 let nextPage = NavigationCallback(userRole) //making a server call - ajax (in async)
//             } else {
//                 //check again for the user validity
//                 SigninSignUp(...callbacks);
//             }
//         } else {
//             //send him on forgot password 
//         }
// }
// SigninSignUp(AuthenticationFunc, AuthorizationFunc, NavigationFunc)

//Promises : These are the proxy objects that give us a control to check the status of promise and 
// upon revelant status we also get the type, payload associated with that in response
// promise will have 3 states - pending, fullfilled/resolved (then), rejected (catch)

let promiseOfLunch = new Promise((resolve, reject)=> {

    //in place of settimeout we can put ajax call or any time taking call
                        setTimeout(()=>{
                            resolve({
                                "Promised By" : "Toan",
                                "status" : "Success",
                                "Lunch Attendees" : "Toan, Trainer"
                            })
                        },5000)

                        // setTimeout(()=>{
                        //     reject({
                        //         "Promised By" : "Toan",
                        //         "status" : "Failed",
                        //         "Lunch Attendees" : "Toan, Trainer"
                        //     })
                        // },3000)
                    })

console.log(promiseOfLunch);

console.log("Promise Execution Starts")

promiseOfLunch.then((data)=>{
    //console.log("Then or Resolved Condition ", data)
    return {...data, primeValue : "Done"}
}).then((data)=>{
    console.log("Then.Then ", data)
}).catch((err)=>{
    console.log("Catch or Rejected Condition ", err)
})

console.log("Promise Execution Ends")


// create a promise object with name student on 2 seconds student is pass and set status stating learnt es6
// then for rejected case set that status - i am progressing