const input=document.querySelector(".input");

function calculate(num){
    input.value+=num;
}

function cle(){
    input.value="";
}
function cr(){
    input.value=input.value.slice(0,-1);
}
function pieFunction(){
    var pi=Math.PI;
    input.value+=pi;
}
function power(){  
 
   var power="**";
   input.value+=power;

   
}
function root(){
    var root=Math.sqrt(input.value)
    input.value=root;
}
function plusorminus(){
    var plusorminus=Math.sign(input.value)
    input.value=plusorminus;
}
function ln(){
    var ln=Math.LN2;
    input.value+=ln;
}
function cos(){
    var cos=Math.cos(input.value);
    input.value=cos;
    // var cos=(input.value*Math.PI/180);
    // input.value=cos;

}
function sin(){
    var sin=Math.sin(input.value);
    input.value=sin;

}
function tan(){
    var tan=Math.tan(input.value);
    input.value=tan;
}
function equal(){
    input.value=eval(input.value)
}

