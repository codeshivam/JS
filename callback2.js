const userLeft = true;
const  userSeen = false;

function watchCallback(callback, errorCallback){
    if (userLeft){
        errorCallback({
            name : "shivam"
        });
    }else if (userSeen) {
        errorCallback({
            name : "serial"
        });
    }
    else
        callback("Cheers");
}

watchCallback((msg) =>console.log(msg),
(error)=>console.log(error.name)
);