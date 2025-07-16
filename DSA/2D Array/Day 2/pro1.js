// When arrays holds inside the arrays. 
// [ [], [], [], [] ] it looking uggly so that we use a tabluar method 
/**
 * [
 * [],
 * [],
 * []
 * ]
 */
// tabluar form 

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]; 
// for(let i=0; i<=arr[0].length-1; i++){
//     console.log(arr[0][i]);
// }

let arr = [
    ['a','b','c','d'],
    ['e','f','g','h'],
    ['i','j','k','l']
]; 
for(let i=0; i<=arr.length-1; i++){
    let empArr=[]
    for(let j=0; j<=arr[i].length-1; j++){
        empArr.push(arr[i][j]); 
    }
    console.log(empArr);
}