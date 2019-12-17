function myPromise(callback){
    this.callbacks=[];
    let resolve=function(){
        this.callbacks[0]();
    }
    let reject=function(){
        this.callbacks[1]();
    }
    callback(resolve.bind(this),reject.bind(this));
}

myPromise.prototype={
    then:function(func1,func2){
        this.callbacks.push(func1,func2);
        console.log(this.callbacks)
    }
}

let promise=new myPromise(function(resolve,reject){
    setTimeout(()=>{
        resolve();
    },3000)
}).then(function(){
    console.log("shijiandao")
});
