





let arr = [2,4,3,7,6,100,200,150]; 
let count=0; 
for(let i=1; i<arr.length-1; i++){
    if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
        console.log(arr[i])
        count++;
    }
}
console.log(count);