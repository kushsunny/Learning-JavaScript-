/**let arr =[1,2,3,4]; 
let sum=0; 
for(let i=0; i<arr.length; i++){
    sum+=arr[i];
}
console.log(sum);
*/


/**let arr = [1,2,3,4]; 
let evenSum=0; 
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        evenSum+=arr[i];
    }
}
console.log(evenSum);*/

/**let arr = [2,4,3,7,6,100,200,150];
let count=0; 

for(let i=1; i<arr.length-1; i++){
    if((arr[i-1]<arr[i])&&(arr[i]>arr[i+1])){
        count++;
    }
}
console.log(count);*/

/**
let arr = [1,2,3,4,5,6,7]; 
let count=0; 
for(let i=0; i<arr.length; i++){
    if((arr[i]%2==1) && (arr[i-1]%2==0 || arr[i+1]%2==0)){
        count++;
    }
}
console.log(count);
*/

// let arr = [2,6,7,12,19,10]; 
// for(let i=1; i<arr.length; i++){
// }

// let num = 31; 
// let count=0; 
// for(let i=1; i<=num; i++){
//     if(num%i==0){
//         count++;
//     }
// }
// if(count==2){
//     console.log(num,"is a even number");
// }else{
//     console.log(num,"is a odd number")
// }

// let arr = [2,6,7,12,19,10,55,13,11,17];
// let countOfPrimeNumber=0; 
// for(let i=0; i<arr.length; i++){
//     let count=0;  
//     for(let j=1; j<=arr[i]; j++){
//         if(arr[i]%j==0){
//             count++;
//         }
//     }
//     if(count==2){
//         countOfPrimeNumber++;
//     }
// }
// console.log(countOfPrimeNumber);

