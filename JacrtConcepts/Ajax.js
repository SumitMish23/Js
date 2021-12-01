console.log("Ajax tutorial in one video !")


let fetch=document.getElementById('fetchs');
fetch.addEventListener('click', btnHandler);


function btnHandler()
{
    console.log('clicked the button')
    // Instantiating an xhr object
    const xhr=new XMLHttpRequest(); 

    // Open the Object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded');
    
    xhr.onprogress=function(){
        console.log('On Progress...');
    }
    xhr.onload=function()
    {
        if(this.status===200)
        {
        console.log(this.responseText);
        }
        else{
            console.log("Error");
        }
    }
    xhr.send();
}