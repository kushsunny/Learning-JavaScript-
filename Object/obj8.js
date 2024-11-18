// find sum of element whose occurance is 2;
let arr=[1,1,3,4,5,5,6,7,8,8]; 
let sum=0;
let obj={}; 
for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1; 
    }else{
        obj[arr[i]]++;
    }
}
console.log(obj)
for(let key in obj){
    if(obj[key]==2){
        sum+=Number(key);
    }
}
console.log(sum);