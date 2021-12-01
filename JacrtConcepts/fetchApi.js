console.log("Fetching API Program..........");

let btn1=document.getElementById('btn1');
let div=document.getElementById('content');


// Using Sumit.txt file //

/*function getData(){
    url="sumit.txt";
    console.log("Started Runnning..")
    fetch(url).then((response)=>{
        console.log("Inside First Then")
        return response.text();
    }).then((data)=>{
        console.log("Inside second Then")
        console.log(data);
    })
}*/
funct
console.log("Before Running the get data");
getData();
console.log("After Running the get data");

// function postData(){
//     url="https://dummy.restapiexample.com/api/v1/create";
//     data='{"name":"test33","salary":"123","age":"23"}'; 
//     params={method:"post",headers:{'Content-Type':'application json'},body: data};
//     console.log("Started Runnning...")
//     fetch(url).then(response=>
//         // Arrrow Function
//         response.json()
//     ).then(data=>console.log(data)
//     )
// }
// postData()