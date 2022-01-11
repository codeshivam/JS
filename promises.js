//calback concept is required
//used for file loading and with settimeout
/*
"I Promise a Result!"

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code and consuming code
*/

//declare promise object

let p = new Promise(function(resolve,reject){
    let a = 1+1;
    if(a == 2)
        resolve("success");
    else
        reject("Fail");
});

p.then(
    function(msg){
        console.log(msg);
    },
    function(msg){
        console.log(msg);
    }
);