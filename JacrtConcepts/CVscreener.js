console.log('This is CV Screener');


const data=[
{
    name:'Rohan Das',
    age:18,
    city:'Kolkata',
    language:'Python',
    framework:'Django',
    image:"https://randomuser.me/api/portraits/men/75.jpg"

},
{
    name:'Sumit',
    age:28,
    city:'Kolkata',
    language:'Py',
    framework:'NodeJs',
    image:"https://randomuser.me/api/portraits/women/76.jpg"

},
{
    name:'Sumww',
    age:28,
    city:'Delhi',
    language:'Py',
    framework:'ernJs',
    image:"https://randomuser.me/api/portraits/men/70.jpg"

},


]
 
function cv(profiles){
    let nextIndex=0;
    return{
        next:function()
        {
    return nextIndex<profiles.length ? {value:profiles[nextIndex++],done:false}:{done:true}
        }
    };

}

const next=document.getElementById("nextid");
next.addEventListener('click',nextCV);

const candidates=cv(data);
function nextCV(){
    const CurrentCandidate=candidates.next().value;
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    image.innerHTML=`<img src='${CurrentCandidate.image}'>`;

    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name:${CurrentCandidate.name}</li>
    <li class="list-group-item">${CurrentCandidate.age}</li>
    <li class="list-group-item">lives in ${CurrentCandidate.city}</li>
    <li class="list-group-item">${CurrentCandidate.language} </li>
    <li class="list-group-item">primarily works on ${CurrentCandidate.framework}</li>
  </ul>`
}