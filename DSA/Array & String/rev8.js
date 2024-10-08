

    // let Num=123
   function check(Num){
    let rev=0; 
    let temp=Num; 

    while(Num>0){
        rem=Num%10; 
        rev=rev*10+rem; 
        Num=Math.floor(Num/10);
    }
    if(rev==temp){
        console.log("Yes,palindrom"); 
    }else{
        console.log("Not,a palindrom");
    }
   }
   check(121)
