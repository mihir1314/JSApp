function sayhilater(){
    var greeting ='hi';
    setTimeout(function(){
        console.log(greeting)
    },3000);
}

sayhilater(); 

function trymewhendone(callback){
    var a = 1000;
    var b = 2000;

    callback();
}

trymewhendone(function(){
    console.log("i ma done");
})

trymewhendone(function(){
    alert("try me when done");
})