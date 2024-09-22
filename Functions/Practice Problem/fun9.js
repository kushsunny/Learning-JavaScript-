// using the previous function Just Count how many numbers are divisible by 3 in the given array. 

let arr=[10,3850,596,65,266,68,6385,985,618,995,26989,5989,6396,599,665,1692];

function checkDiv(num){
    if(num%3==0){
        return true;
    }else{
        return false; 
    }
}
for(let i=0; i<=arr.length-1; i++){
    let ans = checkDiv(arr[i]);
    if(ans==true){
        console.log("arr [",i,"]",ans);
    }
}
