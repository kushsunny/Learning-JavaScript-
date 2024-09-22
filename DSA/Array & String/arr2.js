let arr=[20,45,92,45,67,84,23,65];

let sum=0; 

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]%2==0){
        sum+=arr[i];
    }
}
console.log(sum);