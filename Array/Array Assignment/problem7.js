// Even Array Sum

// Even Sum = 6

let arr=[1,2,3,4,5]

let sum=0; 
for(let i=0; i<=arr.length-1; i++){
    if(arr[i]%2==0){
        sum+=arr[i];
    }
}
console.log("Even Sum = "+sum);