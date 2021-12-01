console.log("Async Await......");
// Normal Function
/*function Sumit()
{
    return "Sumit";
}
let s=Sumit();
 console.log(s); */


//  Async Function Returns Promise:-
async function Sumit()
{
    const response=await fetch('https://api.github.com/users');
    // Awaits=>Function returns back and executes the other JS file.
    console.log("Before response--------4");
    const users=await response.json();
    console.log("users resolved !-------5");

    return users;
}


let s=Sumit();
console.log("Await Function Coming Back--3")
 console.log(s);
 s.then(data=>console.log(data))
 console.log("The last line of function is executed and then control return to (4)")