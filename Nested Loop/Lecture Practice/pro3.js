// let bag=" ";
//     for(let i=1; i<=5; i++){
//         for(let j=1; j<=5; j++){
//             bag+=j; 
//         }
//         console.log(bag);
//     }

//  Patter Question 
// 1 
// *
// 1 2
// * *
// 1 2 3
// * * *
// 1 2 3 4
// * * * *
// 1 2 3 4 5
// * * * * *


    for(let farm=1; farm<=5; farm++){
        let bag="";
        let count="";
        for(let seeds=1; seeds<=farm; seeds++){
            count+=seeds+" ";
            bag+="*"+" ";
        }
        // console.log(count,"\n",bag);
        console.log(count); 
        console.log(bag);
    }