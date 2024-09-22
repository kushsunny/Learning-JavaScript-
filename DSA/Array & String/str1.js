// given a string find out if it countains the letter "a" in it

let str=['m','a','s','a','i'];

let flag="No";
for(let i=0; i<=str.length-1; i++){
    if(str[i]=='a'){
        flag="Yes";
    }
}
console.log(flag);