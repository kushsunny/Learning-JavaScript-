function product(...arr){
    let bag=""; 
    for(let i=0; i<=arr.length-1; i++){
        bag+=arr[i]+" ";
    }
    console.log(bag)
}
product(10,20,30,40,50,60,70,80,90)