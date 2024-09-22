// print table of any number using function 

// function table(value){
//     for(let i=1; i<=10; i++){
//         value=i*value;
//     }
//     console.log(value); 
// }
// table(5)


//WAP to determine if the number is divisible by 3 or not ? if yes then return true else return false. 

function check(num){
    if(num%3==0){
        return "true";
    }else{
        return "false";
    }
}
let sam=check(33);
console.log(sam);