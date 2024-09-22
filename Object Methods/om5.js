


let form={

    name: "Aman",
    age:23, 
    mobile: 7704933193,
    location: "kanpur", 

    submit: function (){
        console.log(this.name);
        console.log(this.age); 
        console.log(this.mobile); 
        console.log(this.location);
    },

    clear: function(){
        this.name=""; 
        this.age=""; 
        this.mobile=""; 
        this.location="";
        console.log("Name",this.name);
        console.log("Age",this.age);
        console.log("Mobile",this.mobile);
        console.log("Location",this.location);
    }
    
}
// form.submit();
form.clear();