let arr = [7,8,2,5,10,3,50]; 
let max=0;
for(let i=0; i<arr.length; i++){
    if(max < arr[i]){
        max=arr[i];
    }
}