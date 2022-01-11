const userLeft = true;
const  userSeen = false;
function watchPromise(){
    return new Promise((resolve,reject)=>{
        if (userLeft){
            reject({
                name : "shivam"
            });
        }else if (userSeen) {
            reject({
                name : "serial"
            });
        }
        else
            resolve("Cheers");
    });
}

watchPromise().then((Pass)=>console.log(pass),
(fail)=>console.log(fail.name)
);
