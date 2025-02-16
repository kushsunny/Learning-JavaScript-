let arr = [4,2,6,8,3,5,7,1]; 
// let arr = [4,2];
for(let i=0; i<=arr.length-1; i++){
    if(arr[i]>arr[i+1]){
        let temp;
        temp=arr[i]
        arr[i]=arr[i+1]; 
        arr[i+1]=temp;
    }
}
console.log(arr);