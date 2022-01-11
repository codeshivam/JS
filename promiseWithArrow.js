let promise = new Promise((resolve, reject)=>{
    let a = "Shivam";
    if(a.toLowerCase == "hivam"){
        resolve("Success");
    }
    else
        reject("error");
});

promise.then(msg =>
console.log(msg),
msg => console.log(msg)
);