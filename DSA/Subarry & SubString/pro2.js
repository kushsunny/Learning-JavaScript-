

// in sub-string count the first and last element of an sub-string if both are same;

let str = "sunny"; 
let count=0;
for(let i=0;i<str.length; i++){
    let bag=""; 
    for(let j=i; j<str.length; j++){
        bag+=str[j]; 
        console.log(bag); 
        if(bag[0]==bag[bag.length-1]){
            count++;
        }
    }
}
console.log("Count of same element -: ",count);