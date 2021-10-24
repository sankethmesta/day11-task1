var promise= new Promise(function(resolve,reject){
    var a=1+1;
    if(a==2)
        resolve("sucess")
    
});

async function asynfun(){
    var result = await promise;
    console.log(result);
}
asynfun();

var promise1 = new Promise(function(resolve,reject){
        var b=2+2;
        if(b==8){
            resolve("succes")
        }
        else{
            reject("failed");
        }
});
async function async2(){
    var out=await promise1;

}
promise1.then(function success(result){
    console.log(result);
})
.catch(function failed(result){
    console.log(result);
})
async2()

