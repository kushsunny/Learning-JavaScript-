
// given array find the count of numbers that are greater then it's both the neigbhours.  

let arr=[22,43,67,42,87,49,75,24,75,37]; 
let count=0; 
for(let i=1; i<arr.length-1; i++){
    if(arr[i-1]<arr[i] && arr[i+1]<arr[i]){
        count++;
    }
}
console.log(count);