// print the arr matrix in Reverse Column wise in this manner
// [ i e a  ]
// [ j f b  ]
// [ k g c  ]
// [ l h d  ]
let arr = [
    ["a","b","c","d"],
    ["e","f","g","h"],
    ["i","j","k","l"]
];
let C=4; //Column 
let R=3; //Row
for(let i=0; i<C; i++){
    let bag="";
    for(let j=R-1; j>=0; j--){
        bag+=arr[j][i]+" ";
    }
    console.log("[",bag,"]");
}