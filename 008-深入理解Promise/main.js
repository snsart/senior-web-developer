function Promise(callback){
    
}

Promise.prototype.then=function(callback){
    callback();
}

let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },1000)    
}).then(function(){

})