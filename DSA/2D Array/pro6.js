// sum of each array individually
let arr = [
    [1,2,3,4], //10
    [5,6,7,8], //26
    [9,10,11,12] //42
];

for(let i=0; i<arr.length; i++){
    let sum=0; 
    for(let j=0; j<arr[i].length; j++){
        sum+=arr[i][j];
    }
    console.log("arr 1 = ",arr[i],"=",sum)
}