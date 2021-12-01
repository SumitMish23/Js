


var boot='hi';        //Global Scope
function hello()
{
    let a="BLOCK";    // Local  Scope
}


{
    let a=9; //BLOCK LEVEL SCOPE (Works Only on Let and Val)
   
    // ----------------1)let and val are block level scope----------------------------
//                     2)Block scope is within curly brackets.
}


var x=15;
{
    var x=10;
    console.log(x); //10
}
console.log(x); //10 (Which is wrong as 10 is decalred inside local scope)

// 1)Var is function level
// 2)Function scope is within the function.
// 3)Calling Var Outside the function gives error.
