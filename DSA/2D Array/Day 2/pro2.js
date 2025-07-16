let arr = [
    [1,2,3], //6
    [4,5,6], //15
    [7,8,9]  //24
]

for(let i=0; i<=arr.length-1; i++){
    let sum = 0; 
    for(let j=0; j<=arr[i].length-1; j++){
        sum += arr[i][j];
    }
    console.log(sum);
}