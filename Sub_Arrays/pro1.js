let arr = [1,2,3,4]; 

for(let i=0; i<arr.length; i++){
    let newArray = [];
    let bag = " ";
    for(let j=i; j<arr.length; j++){
        newArray.push(arr[j]);
        console.log(newArray);
    }
}