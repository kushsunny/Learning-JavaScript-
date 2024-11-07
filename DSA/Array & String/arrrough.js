let arr = [1,2,3,4];
let sum=0; 
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        sum+=arr[i];
    }
}
console.log(sum);

// "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

let arr1=[2,4,3,7,6,100,200,150]; 
let count1=0;
for(let i=1; i<arr1.length-1; i++){
    if(arr1[i-1]<arr1[i] && arr1[i]>arr1[i+1]){
        count1++;
    }
}
console.log(count1);

// "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

let arr2=[1,2,3,4,5]; 
let count2=0; 
for(let i=0; i<arr2.length; i++){
    if((arr2[i]%2==1) && (arr2[i-1]%2==0 || arr2[i+1]%2==0)){
        count2++;
    }
}
console.log(count2);

// "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

let str1="rhythm";
let flag1="No"; 
for(let i=0; i<str1.length; i++){
    if(str1[i]=="a"||str1[i]=="e"||str1[i]=="i"||str1[i]=="o"||str1[i]=="u"){
        flag1 = "Yes";
    }
}
console.log(flag1);

// "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"


let str="unicef"; 
let flag="No"
let bag="";
for(let i=0; i<str.length-1; i++){
    if(str[i+1]=="a"||str[i+1]=="e"||str[i+1]=="i"||str[i+1]=="o"||str[i+1]=="u"){
        // console.log(str[i]);
        bag+=str[i];
        flag="Yes";
    }
}
if(flag=="No"){
    console.log("Not Found");
}else{
    console.log(bag)
}

// "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"


