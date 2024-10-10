function masaiPalSubString(S){
    //write code here
    let longest=0; 
    for(let i=0; i<S.length; i++){
        let bag=""
        for(let j=i; j<S.length; j++){
            bag+=S[j];
            // console.log(bag)
            let rev=""; 
            for(let k=bag.length-1; k>=0; k--){
                rev+=bag[k];
                if(bag==rev && bag.length > longest){
                    // console.log(bag.length);
                    longest=bag.length;
                }
            }
        }
    }
    console.log(longest)
    
}
masaiPalSubString("thisracecarisgood");