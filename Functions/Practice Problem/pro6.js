// Given a string check is it a palindrome or not? using the reverse function

let str="naman"

function palindrome(str){
    let temp=str;
    let bag=""
    for(let i=str.length-1; i>=0; i--){
        bag+=str[i];
    }
    if(bag==temp){
        return true;
    }else{
        return false;
    }
}
let ans=palindrome(str);
    if(ans==true){
        console.log("Palindrome");
    }else{
        console.log("Not a Palindrome");
    }