// how to reverse a string 
function reverse(str){ 
    let bag=" ";
    for(i=str.length-1; i>=0; i--){
        bag+=str[i]+" ";
    }
    console.log(bag);
}
reverse("naman");