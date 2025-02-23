let num = 133; 
let rev = 0; 
let temp = num; 

while (num>0){
    rem = num % 10; 
    rev = rev*10+rem; 
    num = Math.floor(num/10)
}
if(rev == temp){
    console.log(temp, "is a prime number");
}else{
    console.log(temp,"is not a prime number");
}