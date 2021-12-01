// Promise:-
// 3 Situations can be there..
// 1.Resolve
// 2.Reject
// 3.Pending



function fun1(){
    return new Promise(function(resolve,reject){


        setTimeout(function(){
            const error=true;
            if(!error){
        console.log('Your Promise has been resolved !');
        resolve();
            }
            else{
                console.log('Your Promise hasnt resolved !');
                reject("Sorry :(");
            }
        },2000);



    })


}


fun1().then(function(){
    console.lo("Sumit Promise has been resolved !");
}).catch(function(){
    console.log("Sumit:very bad")
})