const res = (result,callback)=>{
    result++;
    console.log(result);
    foo(result);
}
const foo = (result) =>{
    result += 5;
    console.log(result)
}
res(4, foo)
