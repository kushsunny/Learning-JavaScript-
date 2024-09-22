// count the names that are starting from "A"; 

let arr=["Aman","Ajay","Nrupul","Pulkit","Naman"]; 

let count=0; 
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i][0]=="A"){
            count++;
        }
    }
    console.log(count);