// Given an array find the count of element which themselves are odd but one of their neighbours are even. 

let arr=[12,32,43,53,67,43,14,67,43]; 
let count=0; 
for(let i=0; i<arr.length-1; i++){
    if(arr[i]%2==1 && arr[i+1]%2==0){
        count++;
    }
}
console.log(count);