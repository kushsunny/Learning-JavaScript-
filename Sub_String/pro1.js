// let str = "monmfasi";
// let flag = "No" 
// for(let i=0; i<str.length; i++){
//     if(str[i]=="a"){
//         flag = "Yes";
//     }
// }
// console.log(flag);

/**let str = "rhythm"; 
let flag = "No"; 

for(let i=0; i<str.length; i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
        flag = "Yes";
    }
}
console.log(flag);
*/

/**let str = "chrctr"; 
let bag = "";
let count =0;
for(let i=0; i<str.length; i++){
    if(str[i+1]=="a"||str[i+1]=="e"||str[i+1]=="o"||str[i+1]=="u"||str[i+1]=="i"){
        bag+=str[i];
    }else{
        count++;
    }
}
if(count==str.length){
    console.log("Not Found");
}else{
    console.log(bag);
}
    */
/** 
let str = "madam"; 
let bag ="";
for(let i=str.length-1; i>=0; i--){
    bag+=str[i];
}
if(str == bag){
    console.log("Is a Palindrom String");
}else{
    console.log("Is not a Palindrom String");
}
    */
/** 
let num = 121; 
let rev = 0; 
let temp=num;
while (num>0){
    rem = num%10; 
    rev = rev*10+rem; 
    num = Math.floor(num/10);
}
if(rev==temp){
    console.log("Is a Palindrom Number");
}else{
    console.log("Not a Palindrom Number");
}
*/