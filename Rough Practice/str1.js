let arr = [-7,-8,-10,-20,-90,-3,-50]; 
let max = -Infinity; 
for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);

let str = "Donald"; 
let bag=[]
let str1=""
 for(let i=0; i<str.length; i++){
    bag.push(str[i])
    if(bag[i]=="D"){
        str1+="R"
    }else{
        str1+=bag[i];
    }
}
console.log(str1)

let str="Donald"; 
let bag=""; 
for(let i=0; i<str.length; i++){
    if(i==0){
        bag+="R"
    }else{
        bag+=str[i];
    }
}
console.log(bag);

let arr=["Amit","Nrupul","Varun","Aman","Pulkit","Ajay"]; 
let count=0; 
for(let i=0; i<arr.length; i++){
    if(arr[i][0]=="A"){
        count++;
    }
}
console.log(count);

var name = "Masai";
var output = "";
for(var i=0; i<name.length; i++)
{
if(name[i] != "s")
{
output = output + name[i];
}
}
console.log(output);

console.log(`Sunny`)