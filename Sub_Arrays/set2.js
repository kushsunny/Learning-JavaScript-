function checkPattern(n){
    if(n%2!==0 && n>=3){
        for(let i=1; i<=n+2; i++){
            let row=""; 
            row+="* ";

            for(let j=1; j<=n; j++){
                if(i === Math.floor((n+2)/2)+1){
                    row+="e ";
                }else{
                    row+="  ";
                }
            }

            for(let k=1; k<=n+2; k++){
                if(i!==1 && i!==n+2){
                    row+="* "
                }else{
                    row+="  ";
                }
            }
            
            for(let j1=1; j1<=n; j1++){
                if(i === Math.floor((n+2)/2)+1){
                    row+="e ";
                }else{
                    row+="  ";
                }
            }
            row+="* ";
            console.log(row);
        }
    }else{
        console.log("Wrong Input");
    }
}

checkPattern(5);