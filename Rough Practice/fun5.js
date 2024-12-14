function isOdd(num){
    if(num%2==0){
        return true; 
    }else{
        return false; 
    }
}
for(let i=1; i<=5; i++){
let result=isOdd(i);
console.log(result)
}