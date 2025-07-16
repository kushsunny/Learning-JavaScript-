let arr = [
    [1,2,3,4,5], 
    [6,7,8,9,10], 
    [11,12,13,14,15],
    [16,17,18,19,20]
]

for(let i=0; i<=arr.length-1; i++){
    let empArry=[]
    for(let j=0; j<=arr[i].length-1; j++){
        // console.log(arr[i][j]);
        empArry.push(arr[i][j]);
    }
    console.log(empArry);
}