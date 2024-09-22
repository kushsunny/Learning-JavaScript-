// how to reverse a string

let str="sunny"

function palindrom(str){
    let bag=""
    for(let i=str.length-1; i>=0; i--){
        bag+=str[i];
    }
    console.log(bag);
}
palindrom(str);