

// DEF :-  Object methods are functions declared inside object, performing specific operations on the data present inside the object. 


let rectangle = {

l: 10, 

w: 20, 

peri: function (){
    // 2*(l+b); 

    console.log("Perimeter of Rectangle = ",2*( this.l + this.w ))
}
,
area: function(){
    console.log("Area of Rectangle = ",this.l * this.w);
}

}
rectangle.peri(); 
rectangle.area();