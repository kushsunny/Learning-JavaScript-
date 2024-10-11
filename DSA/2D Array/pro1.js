let arr = [
    ["a","b","c","d"],
    ["e","f","g","h"],
    ["i","j","k","l"]
];

let bag=""
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        // console.log(arr[i][j]);
        bag+=arr[i][j]+" ";
    }
}
console.log("[",bag,"]");