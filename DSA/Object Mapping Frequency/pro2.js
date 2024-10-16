
// Update some value 

let person = { 
    name: "Chunnu",
    age: 15, 
    salary: "50 LPA"
}
person["salary"]="99 LPA"; 
console.log(person)
console.log(person["salary"])
person["address"] = "Kanpur"
person["salary"] = 50000;
console.log(person);
let x = "name"; 
console.log(person[x]);

let animal = {
    type: "Cat",
    sound: "Meow"
}
console.log(animal["color"]);