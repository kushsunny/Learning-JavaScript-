


//  Given an array find the sum of all even numbers. 

let arr=[1,4,2,6,8,3,5,8,3,43]; 

let sum=0; 

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]%2==0){
        sum+=arr[i];
    }
}

console.log(sum);