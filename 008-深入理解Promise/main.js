function myPromise(callback){
    this.callbacks=[];
    let resolve=function(){
        callbacks[0]();
    }
    let reject=function(){
        callbacks[1]();
    }
    callback(resolve,reject);
}

myPromise.prototype.then={
    then:function(func1,func2){
        this.callbacks.push(func1,func2);
    }
}

let promise=new myPromise(function(resolve,reject){
    console.log("1245");
    setTimeout(()=>{
        resolve();
    },3000)
}).then(function(){
    console.log("shijiandao")
});
