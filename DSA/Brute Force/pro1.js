
// check given number is prime or not
// let num=121; 
function checkPrime(num){
for(let i=2; i<=Math.sqrt(num); i++){
    if(num%i==0){
        // console.log("false");
        return false 
    }
}
return true;
}
checkPrime(9);