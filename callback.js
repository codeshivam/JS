//JavaScript functions are executed in the sequence 
//they are called. Not in the sequence they are defined

/*
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
*/

function add(a,b, callback){
    display( a + b);
}
const result = add(5,7, display);


function display(result){
    console.log(result);
}