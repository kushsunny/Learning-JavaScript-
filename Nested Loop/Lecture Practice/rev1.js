// for(let farm=1; farm<=5; farm++){
//     let bag="";
//     for(let seeds=1; seeds<=5; seeds++){
//         bag+=seeds+" ";
//     }
//     console.log("Farm : "+farm+" "+"Planted Seeds No :"+bag);
// }

// for(let farm=1; farm<=5; farm++){
//     let bag=" ";
//     let bag1=" ";
//     for(let seeds=1; seeds<=farm; seeds++){
//         bag+="*"+" "
//         bag1+=seeds+" ";
//     }
//     console.log(bag1);
//     console.log(bag);
// }
// console.log("Farm_No : "+farm+" "+"Planted Seeds : "+seeds);

// let arr = ["Aman","Ajay","Nrupul","Pulkit","Naman"];
// let count=0; 
// for(let i=0; i<arr.length; i++){
//     if(arr[i][0]=="A"){
//         count++;
//     }
// }
// console.log(count);

let arr = ["Aman","Ajay","Nrupul","Pulkit","Naman"];
let count=0; 

for(let i=0; i<arr.length; i++){
    // let count = 0;
    for(let j=0; j<arr[i].length; j++){
        if(arr[i][j]=="A"||arr[i][j]=="a"){
            count++;
        }
    }
}
console.log(count);






