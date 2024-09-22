// given a string check is it a palindrome or not ? using the reverse function 

function reverse(str){
    let bag="";
    for(let i=str.length-1; i>=0; i--){
        bag+=str[i];
    }
    if(bag==str){
        return 'this is palaindrom ';
    }else{
        return "not a palaindrom";
    }
}

let rev=reverse("oyo");
console.log(rev);