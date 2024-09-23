



// Given an array find the count of element which themselves are odd but either on of their neighbour are even.

let arr=[1,2,3,4,5,6,7,8];

let count=0;
for(let i=0; i<=arr.length-1; i++){
    if(arr[i]%2!=0 && arr[i+1]%2==0 || arr[i-1]%2==0){
        count++;
    }
}
console.log(count);