
//  XXX-------- USE OF FILTER --------XXX

// an array is given to you, create one more array that is containing only even numbers. 


// xxxxx----------     1st Method   ------------xxxx

// let arr=[1,2,3,4,5,6]; 
// let temp_arr=[]
// for(let i=0; i<=arr.length-1; i++){
//     if (arr[i]%2==0){
//         // temp_arr=temp_arr+arr[i]+","
//         temp_arr.push(arr[i]);
//     }
// }
// console.log(temp_arr)

let arr=[1,2,3,4,5,6];

let even_arr=arr.filter(function(item,index){
    return item%2==0;
});
    console.log(even_arr);