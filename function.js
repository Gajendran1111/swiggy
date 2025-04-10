// function types 

// syntax 
// function name (){}


function mrg (){

    var a = 10;
var a = 20;
console.log(a);

let b = 22;
 b = 21;
console.log(b);

const c = 30;
console.log(c);

}
mrg();


// function type 

// Function statement and Declaration -> parameter and argument 

// var a = 10;

function box (fu){
    console.log(fu);
}
box("function block");

// Function Expression or Anonymous Function
let fun =function hi (ji){

    console.log(ji);

}
fun("java");

let ct = function  (kill){
    console.log(kill);
    
}
ct("javascript");
// Immediate Invoke Function expression IIFE
(function (iife){
    console.log(iife)
})("iife");
// Arrow Function
// syntax 
// ()=>{}

    let d = (vs)=>{console.log(vs)}
    d("function");