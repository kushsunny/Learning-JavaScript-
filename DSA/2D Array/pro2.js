
// print in this manner 
// [ a b c d  ]
// [ e f g h  ]
// [ i j k l  ]

let arr = [
    ["a","b","c","d"],
    ["e","f","g","h"],
    ["i","j","k","l"]
];

for(let i=0; i<arr.length; i++){
    let bag=""
    for(let j=0; j<arr[i].length; j++){
        bag+=arr[i][j]+" ";
    }
    console.log("[",bag,"]");
}