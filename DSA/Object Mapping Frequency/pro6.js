

// Given some str of symbols find its value. 

// %:1, #:2, *:3, &:4; 

let str = "**%#&"; 
let sym = {
    "%": 1, 
    "#": 2,
    "*": 3, 
    "&": 4 
}
let sum=0; 
for(let i=0; i<str.length; i++){
    sum+=sym[str[i]]; 
}
console.log(sum);