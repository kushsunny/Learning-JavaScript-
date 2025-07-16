 function brush(){
    console.log("Please Brush your teeth first")
}

function eatBreakfast(item,time){
    brush()
    console.log("i am eating",item,"","at",time," ");
}
eatBreakfast("egg","8 o'clock",brush);