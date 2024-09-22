// Check number is Palindrome or not 

let num=121;

let temp=num; 
let rev=0; 

while(num>0){
    rem=num%10; 
    rev=rev*10+rem; 
    num=Math.floor(num/10);
}
console.log(num);
if(temp==rev){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome");
}


// Check String is Palindrome Or Not 

// let str="sneha"; 
// bag="";
// for(let i=str.length-1; i>=0; i--){
//     bag+=str[i]+""
// }
// if(bag==str){
//     console.log("This string is palindrome");
// }else{
//     console.log("Not a palindrome");
// }