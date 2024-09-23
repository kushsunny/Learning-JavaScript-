



//  check palindrom number 

let num=212; 

let temp=num; 
let rev=0; 

while(num>0){
        rem=num%10; 
        rev=rev*10+rem;
        num=Math.floor(num/10);
} 
if(temp == rev){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome")
}
