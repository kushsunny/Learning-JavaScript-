


let arr = [10,12,13,19,20]; 

let sum=0; 

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]%2==0){
        // console.log(arr[i]);
        sum+=arr[i]
    }
}
console.log(sum);