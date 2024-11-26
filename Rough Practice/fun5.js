// function diff(x,y){
//     return Math.abs(x-y);
// }
// let result=diff(4,18); 
// console.log(result);

function isOdd(num){
    for(let i=1; i<=num; i++){
        if(i%2==0){
            return false; 
        }else{
            return true; 
        }
    }
}
let result=isOdd(5);
console.log(result)