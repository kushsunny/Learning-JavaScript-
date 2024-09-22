// using the above determine the numbers divisible by 3 in a limit of 1 and 100

function check(num){
    if(num%3==0){
        return true; 
    }else{
        return false;
    }
}
for(let i=1; i<=100; i++){
    let ans=check(i);
    // console.log(ans)
     if(ans==true){
        console.log(i,"is divisible by 3")
     }
    }

