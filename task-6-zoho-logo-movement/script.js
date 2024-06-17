var Move=document.querySelector(".Move");
var container=document.querySelector(".container");
var img=document.querySelector(".img");
Move.addEventListener("click",myfunction);
var hellosetin;
var i=1;


console.log(window.innerWidth)
function Movefunction(){
    var j=(i++)*10;
    console.log("i",i);

    console.log(j);
    if(j>850){
        img.style.transform = `translateX(${-850})px`;
        console.log("if")
        i=-3;
    }
    else if(j<850){
        img.style.transform =`translateX(${(j)}px)`;
        img.style.transition="0.5s";

    }
}
function myfunction(){
hellosetin=setInterval(Movefunction,200);
}

var Pause=document.querySelector(".Pause");

Pause.addEventListener("click",myfunctiontwo);

function myfunctiontwo(){
    clearInterval(hellosetin);
}
var reset=document.querySelector(".reset");

reset.addEventListener("click",()=>{
    location.reload();
})