// let str = "Yadav"; 
// // change y to p 
// let bag="";
// for(let i=0; i<str.length; i++){
//     if(str[i]=="Y"){
//         bag+="P";
//     }else{
//         bag+=str[i];
//     }
// }
// console.log(bag);

let arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupak"];
let obj={}
for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]==undefined){
        obj=arr[i];
    }
}
console.log(obj);