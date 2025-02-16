/**let details = {
    name: "Sunny",
    age: 55, 
    address: "106/322",
    location: "Gandhi Nagar, Kanpur",
    pincode: 208012
}
details["name"]="Rahul";
details["Country"] = "India";
console.log(details["name"]);
console.log(details["age"])
console.log(details.location);
console.log(details);*/

let obj={}
obj.name="Sunny Kushwaha"; 
obj.age=23; 
obj.location="Kanpur"; 
obj.isMarried="No"; 
obj.location="Goa"; 
  
// console.log(obj);
for(let x in obj){
    console.log(x,": ",obj[x]);
}