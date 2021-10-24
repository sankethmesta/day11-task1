// create promise
let completed = true;
let promise = new Promise(function(resolve,reject){
    if(completed){
        resolve("finished with js");
    }
    else{
        reject("not Finished with js");
    }
});
console.log(promise);

// using then()
console.log("-------------------")
let completed1=true;
let promise1=new Promise(function(resolve,reject){
    resolve("promise resolved");
});
promise1.then(function success(result){
    console.log(result);
}).then(function success(){
    console.log("call some other function");
});
console.log(promise1);

// promise reject
console.log("-------------------")
let completed2=true;
let promise2=new Promise(function(resolve,reject){
    reject("promise not resolved");
});
promise2.then(function success(result){
    console.log(result);
}).then(function success(){
    console.log("call some other function");
});
console.log(promise2);

// using catch
console.log("---------")

let completed3=true;
let promise3=new Promise(function(resolve,reject){
    reject("reject");
});
promise3
.then(function success(result){
    console.log(result);
}).catch(function error(result){
    console.log(result);
});
console.log(promise3);

// using finaly
let completed4=true;
let promise4=new Promise(function(resolve,reject){
    resolve("promise resolved");
});
promise4.finally(function greet(){
    console.log("proceed");
});
console.log(promise2);
