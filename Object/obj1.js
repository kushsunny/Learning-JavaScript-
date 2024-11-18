let obj = { 
    name: "Harsh Tyagi",
    Roll_no: 45,
    location: "Ghaziabad",
    pincode: 208012, 
    math: 54,
    eng: 50, 
    phy: 45
};

for(let key in obj){
    // console.log(obj.key);
    console.log(key,obj[key])
}