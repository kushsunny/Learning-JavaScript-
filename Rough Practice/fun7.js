function countt(...arr){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%3==0){
            count++;
        }
    }
    console.log(count);
}
countt(10,20,30,40,50,60,70,80,90,100); 


// let arr=[10,20,30,40,50,60,70,80,90,100]; 
// let count=0; 
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%3==0){
//         count++; 
//     }
// }
// console.log(count);