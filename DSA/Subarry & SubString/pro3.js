
// Sub-array 


let arr = [1,2,3]; 
let count=0;
for(let i=0;i<arr.length; i++){
    let bag=[]; 
    for(let j=i; j<arr.length; j++){
        bag.push(arr[j]);
        console.log(bag); 
        if(bag[0]==bag[bag.length-1]){
            count++;
        }
    }
}
console.log("Count of same element -: ",count);