// Using the previous function just count how many numbers are divisible by 3 in the given array. 

let arr=[2,3,5,6,7,8,9,12,15,20];

function divisible(arr){
    let count=0; 
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i]%3==0){
            count++;
        }
    }
    console.log(count);
}
divisible(arr);