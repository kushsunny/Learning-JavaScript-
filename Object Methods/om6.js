

let obj = {

    name: "sunny", 
    age:23, 

    print: function(){
        console.log(this.name,this.age);
    }

}
obj.print();
obj.name="rishi"; 
obj.print();
obj.age=20
obj.print();