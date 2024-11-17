let str="bicky"; 
let flag="No"; 

for(let i=0; i<str.length; i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            flag="true"
    }
}
if(flag=="true"){
    console.log("vowel is present in the given string"); 
}else{
    console.log("vowel not present");
}