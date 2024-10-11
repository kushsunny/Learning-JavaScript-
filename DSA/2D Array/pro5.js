// count total number of vowels 
let arr = [
    ["a","b","c","d"],
    ["e","f","g","h"],
    ["i","j","k","l"]
];
let vo_count=0;
let co_count=0;
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        if(arr[i][j]=="a"||arr[i][j]=="e"||arr[i][j]=="i"||arr[i][j]=="o"||arr[i][j]=="u"){
            vo_count++;
        }else{
            co_count++;
        }
    }
}
console.log("Vowels =",vo_count,"Consonent =",co_count)