function maximumOccuringElement(A,N){
    //write code here

        let obj={};
    for(let i=0; i<A.length; i++){
        if(obj[A[i]]==undefined){
            obj[A[i]]=1; 
        }else{
            obj[A[i]]++;
        }
    }
    console.log(obj);
    
}
maximumOccuringElement([0,2,0,6,5],5)