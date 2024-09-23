



// Given an array find out the count of such numbers which are greater then both its neighbours.

let arr=[1,4,6,4,4,7,8,4,2,5,8]; 

let count=0;
for(let i=1; i<arr.length-1; i++){
    if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
        count++;
    }
}
console.log(count);