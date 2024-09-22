
// write function for finding sum of array
function sumFun(arr){

    // let arr=[1,2,3,4,5,6,7,8,9]; 
    let sum=0; 
    for(let i=0; i<=arr.length-1; i++){
        sum+=arr[i];
    }
    console.log(sum);

}
sumFun([1,2,3,4,5,6,7,8,9]);
sumFun([1,2,3,4,5,6,7,8,9]);
// sumFun(1,2,3,4,5,6) for that we use rest operator ...arr inside the function