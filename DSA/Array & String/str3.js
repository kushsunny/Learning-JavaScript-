let value="sneha"; 
// let flag="false";
let count=0; 
for(let i=0; i<=value.length-1; i++){
    if(value[i]=="a" || value[i]=="e" || value[i]=="i"|| value[i]=="o"|| value[i]=="u"){
        // flag="true"
        count++;
    }
}
if(count>=1){
    console.log("true");
}else{
    console.log("false");
}
// console.log(flag);