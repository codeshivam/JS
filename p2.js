function a(b,c,d){
    if(b>c && b>d)
    return b;
    else if (c>b && c>d) {
        return c;
    }
    else
    return d;
}
var x = a;
console.log(x);