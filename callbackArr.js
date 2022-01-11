function show(a,callback){
    a++;
    callback(a);
}

show(5, a => console.log(a+14));