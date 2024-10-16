


// Given a string find out the vowels that are missing and print them. 

let input = "masai";

let bag={
    a: 1,
    e: 1, 
    i: 1, 
    o: 1, 
    u: 1
}
for(let i=0; i<input.length; i++){
    let str = input[i];
    delete bag[str];
}
console.log(bag);
let emp=""
for(let key in bag){
    // console.log(key);
    emp+=key; 
}
console.log(emp)