//function constructor

let func = new Function('x','y', 'return x*y;');
console.log(func(5,6));
let aR = 98;
let aT = 32;
let x = new Function('a','b','return a*b');
console.log(x(aR,aT));