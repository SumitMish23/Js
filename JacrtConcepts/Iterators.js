const myArray=['Sumit','Shivam','shailesh','Om'];
//ssconsole.log("My Array is "+myArray);
const fruits=fruitsIterator(myArray);
console.log(fruits.next())
// Iterators 
function fruitsIterator(values)
{
    let nextIndex=0;
    return {
        next:function(){
            if (nextIndex<values.length){
           return {
                values:values[nextIndex++],
                done: false
                
            }
        }
            else{
               return {
                done:true
                }
            }
        }
    }
}
// Using Iterators