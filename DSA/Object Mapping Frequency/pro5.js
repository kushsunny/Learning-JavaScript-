// Given a str find its value. 
// Value of a str is calculated by summing up the values of each character. Where a-1, b-2, c-3,...,z-26. 

let str = "rajkumarkushwaha" 

let alpha="abcdefghijklmnopqrstuvwxyz"; 
let alpha_value={}; 

for(let i=0; i<alpha.length; i++){
    alpha_value[alpha[i]]=i+1;
}
console.log(alpha_value);

let sum=0; 
for(let j=0; j<str.length; j++){
    sum+=alpha_value[str[j]];
}
console.log(sum);
