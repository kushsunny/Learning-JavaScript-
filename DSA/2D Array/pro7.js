// print the arr matrix in column wise in this manner
// [ a e i  ]
// [ b f j  ]
// [ c g k  ]
// [ d h l  ]
let arr = [
    ["a","b","c","d"],
    ["e","f","g","h"],
    ["i","j","k","l"]
];
let C=4; //Column 
let R=3; //Row
for(let i=0; i<C; i++){
    let bag="";
    for(let j=0; j<R; j++){
        bag+=arr[j][i]+" ";
    }
    console.log("[",bag,"]");
}