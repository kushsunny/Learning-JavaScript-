// x = 22; 
// y = 3; 
// let sum = x + y; 
// console.log(sum);           

// function print(x,y){
//     return x-y;
// }
// let useAnswer = print(12,2); 
// for(let i=1; i<=useAnswer; i++){
//     console.log("2 x",i,"= "+(2*i));
// }

/*
function ram(x,y){
    return x+y;
}
let add = ram(10,10); 
function shyam(add){
    return add*5;
}
let multi = shyam(add); 
function raju(multi){
    return multi/10; 
}
let divid = raju(multi); 
function added(divid){
    return divid+10; 
}
let result = added(divid);
console.log(result);
*/
/*
function checkDiv(num){
    if(num%3==0){
        return true; 
    }else{
        return false; 
    }
}
let answer = checkDiv(23); 
console.log(answer);
*/
/*
function checkNum(num){
    if(num%3==0){
        return true; 
    }else{
        return false;
    }
}
for(let i=1; i<=100; i++){
   let answer = checkNum(i);
    if(answer==true){
        console.log(i,"is divisible by 3")
    }
}
*/
/*
let count=0; 
function checkDiv(...arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%3==0){
            count++;
        }
    }
    console.log(count);
}
checkDiv(2,3,5,6,7,8,9,12,15,20);
*/

/*
let str = "chunnu"; 
let newStr = ""; 
for(let i=str.length-1; i>=0; i--){
    newStr+=str[i];
}
console.log(newStr);
*/

/*
let str = "Donald"; 

let arr = []; 

for(let i=0; i<str.length; i++){
    arr.push(str[i]);
    if(arr[i]=="D"){
        arr[i]="R"
    } 
}
bag=""
for(let j=0; j<arr.length; j++){
    bag+=arr[j];
}
console.log(bag)
*/

/*

let num = 121; 
let rev = 0; 
let temp = num; 
while (num>0){
    rem = num % 10; 
    rev = rev*10 + rem; 
    num = Math.floor(num / 10);
}
if(temp == rev){
    console.log("Palindrom Number "); 
}else { 
    console.log("Not a Palindrom Number ");
}
    */

/*
let name = "racecar"; 

function checkPalindrom(pass){
    let newName = ""; 
    for(let i=pass.length-1; i>=0; i--){
        newName+=pass[i];
    }
    if (newName==pass){
        return true; 
    }else{
        return false; 
    }
}

let answer = checkPalindrom(name);
console.log(answer);
*/

/*
function addNum(x=10,y=10){
    return x+y;
}
let result = addNum(20,20);
console.log(result);
*/

/*
let num = 125; 
let que = 25
let ans = 2; 
console.log(Math.cbrt(num));

console.log(Math.sqrt(que))
console.log(Math.log10(ans))
*/

let str = "sunny"; 
let newStr = "SUNNY"; 
console.log(str.toUpperCase());
console.log(newStr.toLowerCase());