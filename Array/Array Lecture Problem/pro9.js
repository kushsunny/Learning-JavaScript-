//Given a character in lower case print the upper case character


let lowerCase=["a","e","i","o","u"]; 
let upperCase=["A","E","I","O","U"]
for(let i=0; i<=lowerCase.length-1; i++){
    if(lowerCase[0]=="a"||lowerCase[1]=="e"||lowerCase[2]=="i"||lowerCase[3]=="o"||lowerCase[4]=="u"){
        lowerCase[i]=upperCase[i]; 
    }
}
console.log(lowerCase)