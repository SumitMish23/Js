console.log("HI SUMIT");
let friends=['Sumit','Shailesh','Raj'];


// for (let index = 0; index < friends.length; index++) //For Loop Iterating Single Element At a time
//  {
//     const element = friends[index];
//     console.log(element)
// }
//{========== Iterating Object Using For Loop===================}
let obj = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
    
// }


// {======Iterating Object Using For in Loop========}
for(let key in friends)
{
    
    console.log(friends[key]);
}
// for in  in strings to loop Through all the characters
string1="This is string";
for (let index = 0; index < string1.length; index++) {
    const element = string1[index];
    console.log(element);
    
}
// for(let key in string1)
// {
//     console.log(string1[key]);
// }