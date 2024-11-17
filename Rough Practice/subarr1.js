let arr=[1,2,5,7,45]; 
let flag="No"; 
for(let i=0; i<arr.length; i++){
    if(arr[i]==45){
        flag="Yes"
    }
}
if(flag=="Yes"){
    console.log("45 is Present in the given array");
}else{
    console.log("data not found");
}