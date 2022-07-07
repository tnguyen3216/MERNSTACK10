//EventLoop : all those calls which are expected to have delays due to 
//transactions taking time like settimeout, setinterval, server calls (XHR) or file read (async) 
//or any registered callback using Promises
//server - (XHR) XMLHttpRequest api used to make server call


console.log("Hi! Event Loop!")

setTimeout(function() {
    console.log("I am first call back")//

    setTimeout(function() {
        console.log("I am first call back's callback")//
    }, 0); //0                          //1000

}, 1000); 

setTimeout(function() {
    console.log("I am second call back")//
}, 1000);//1000 //2000                 //2000

setTimeout(function() {
    console.log("I am third call back")//
}, 1000);//1000 //3000                 //3000

console.log("We did it!")


const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(i_local) {
    return function () {
        console.log('Index: ' + i_local + ', element: ' + arr[i_local]);    
    }    
  }(i), 3000);
}

//const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + I_local + ', element: ' + arr[I_local]);    
//   }, 3000);
// }
































//15,10,5 - Toan, Abinaya, Estban  => 30 - Restaurant - A
//15,10,5 - Toan, Abinaya, Estban => 15 - Restaurant - B (non-blocking js) - (event loop)

// function increment(){
//     for (let i = 0; i < 100; i++) {
//         console.log(i)        
//     }
// }
// console.log("Before Increment")
// increment(); //blocking set of execution
// console.log("After Increment")

// console.log("Before Before Setimeout")
// setTimeout(increment,2000) //non-blocking set of execution
// console.log("After SetTimeOut")