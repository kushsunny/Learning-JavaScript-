let arr = [ 1,4,6,75,12,53,75]; 
// let min = +Infinity; 
let max = -Infinity; 
let min = +Infinity; 

for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log("Max value = ",max,"Min value = ",min); 