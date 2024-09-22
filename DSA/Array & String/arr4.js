// Given an array find the count of element which are greater than it's neighbours and as well as at least one neighbour is odd.  

let arr=[24,31,43,56,26,87,43,67,85,23,13,56,75]; 

let count=0; 

for(let i=1; i<arr.length-1; i++){
    if((arr[i-1]<arr[i] && arr[i+1]<arr[i] ) && (arr[i-1]%2!=0||arr[i+1]!=0)){
        count++;
    }
}
console.log(count);