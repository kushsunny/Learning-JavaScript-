

// let string = "character"; 
let string = "unicef"
// let string = "rhythm"
let bag="";
let count=0; 
for(let i=0; i<=string.length-1; i++){
    if(string[i+1]=="a"||string[i+1]=="e"||string[i+1]=="i"||string[i+1]=="o"||string[i+1]=="u"){
        bag+=string[i];
        count++;
    }
}
if(count>=1){
console.log(bag);
}else{
    console.log("Not Found");
}