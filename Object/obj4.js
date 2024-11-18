let info={}
info["name"]="Harsh Yadav"; 
info["age"]=22; 
info["location"]="Ghaziabad"; 
console.log(info);
info["location"]="GOA"
delete info["age"]
console.log(info) //updated location 

for(let key in info){
    console.log(info[key])
}