// Given a string of only lower-case English alphabets, print all the characters in the string whose next element(right neighbour) is a vowel. If no such character exists print "Not Found"

let str="character";
let bag="";
let count=0; 
for(let i=0; i<=str.length-1; i++){
    if(str[i+1]=="a" || str[i+1]=="e" || str[i+1]=="i" || str[i+1]=="o" || str[i+1]=="u"){
        bag=bag+str[i]+"";
        count++;
    }
}
if(count==0){
    console.log("Not Found");
}else{
    console.log(bag);
}