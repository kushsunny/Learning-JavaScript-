// Given an array of Intergers, Find the count of such occurrence of elements in the array where one of the neighbours of the element is a prime number 
let arr=[23,53,24,75,32,46,86,32,45]; //Input
for(let i=0; i<=arr.length-1; i++){
    let count=0;  
    for(let j=1; j<=arr[i]; j++){
        if(arr[i]%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(arr[i],"is prime");
    }else{
        console.log("Not a prime");
    }
}

// check weather num is prime or not 

// let num=53; 
// let count=0
// for(let i=1; i<=num; i++){
//     if(num%i==0){
//         count++
//     }
// }
// if(count==2){
//     console.log("Number ",num,"is prime");
// }else{
//     console.log("Number is Not Prime");
// }