let arr = [-7,-8,-10,-20,-90,-3,-50]; 

let max = +Infinity ; 

for(let i=0; i<arr.length; i++){
    if(max > arr[i]){
        max=arr[i];
    }
   
}
console.log(max);

// let str = "sunny"; 
// console.log(str)