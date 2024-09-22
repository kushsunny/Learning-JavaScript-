// count the names that are starting from "A"; 

let arr=["Aman","Ajay","Nrupul","Pulkit","Naman"]; 

let count=0; 
    for(let i=0; i<=arr.length-1; i++){
            for(let j=0; j<=arr[i].length-1; j++){
                    if(arr[i][j]=="A"){
                        count++;
                    }
            }
        }
        console.log(count);