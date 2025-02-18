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

let arr = [1,2,3,4,5,6,7]; 
let count=0; 
for(let i=0; i<arr.length; i++){
    if((arr[i]%2==1) && (arr[i-1]%2==0 || arr[i+1]%2==0)){
        count++;
    }
}
console.log(count);