let arr=[1,3,2,5,7,4,6,2,87,65,4,8]; 
// print only unique numbers 
let obj={ }
for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1; 
    }else{
        obj[arr[i]]++; 
    }
}
// console.log(obj)
let arr1=[]
for(let key in obj){
    if(obj[key]==1){
        arr1.push((Number(key)));
    }
}
let bag=""
for(let j=0; j<arr1.length; j++){
    bag+=arr1[j]+" ";
}
console.log(typeof Number(bag));