const students=[
    {name:"sumit",color:"fair",profession:"coder"},
    {name:"Raj",color:"black",profession:"investor"}
]


function enrollStudent(studentParameter){
    setTimeout(() => {
        students.push(studentParameter); 
    },3000);
}
function getStudents( ){
    setTimeout(() => {
       let str="";
       students.forEach(function(student){
           str+=`<li> ${student.name}</li>`
       });
       document.getElementById('students').innerHTML=str;

    }, 1000);
}
let std= {name:"Anurag",color:"fair",profession:"kids"}
enrollStudent(std);
getStudents();