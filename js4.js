//anonymous function

(function(){
    console.log("I m");
})();

//Arrow function
//parameters
//arrow notation
//statement

var food = (x,y,z) => {
    return x + y + z
}

console.log(food(10,23,43));
// sigle statement use like this
var food = (x,y,z) => x + y + z

//for single parameter use like this

var food = x => x + 10
console.log(food(21));