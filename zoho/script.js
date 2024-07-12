var company=document.querySelector(".company");
var dropdownlist=document.querySelector('.dropdownlist')
var dropdownlistspan=document.querySelector(".company .fa-angle-down")
company.addEventListener("click",()=>{
    dropdownlist.classList.toggle("active")
    dropdownlistspan.classList.toggle("ef")
    company.classList.toggle("color")
});


var searchicon=document.querySelector(".search-icon");
var inputdiv=document.querySelector(".inputdiv")

searchicon.addEventListener("click",()=>{
    inputdiv.classList.toggle("activecl")
})
var sign=document.querySelector('.sign');
var signup=document.querySelector(".signup");



var col=1;
document.onscroll= ()=>{
    if(scrollY>70){
        signup.style.backgroundColor="red";
        sign.style.color="white";
    }
    else{
        signup.style.backgroundColor="transparent";
        sign.style.color="red";
        
    }
    console.log(window.scrollY+"scrolled");

    if(window.scrollY>2435){
        setInterval(incre,80)
        setInterval(increa,80)
        setInterval(increb,80);
        setInterval(increc,80)
        setInterval(incred,80)
    }

    if(scrollY==0){
        signup.addEventListener("mouseenter",()=>{
            signup.style.backgroundColor="red";
            sign.style.color="white";
        })
        signup.addEventListener("mouseleave",()=>{
            signup.style.backgroundColor="transparent";
            sign.style.color="red";
        })
    }
    
    

}
var mil1=document.getElementById("mil1");
var mil2=document.getElementById("mil2");
var mil3=document.getElementById("mil3");
var mil4=document.getElementById("mil4");
var mil5=document.getElementById("mil5");

var s=1;
var sincre;


var a=1;
var aincre;

var b=1;
var bincre;

var c=1;
var cincre;

var d=1;
var dincre;
function incre(){
    if(s<101){
        sincre=s++;
        mil1.textContent=sincre +"M+";    
    }
    if(sincre>=100){
        sincre=100;
    }
}

function increa(){
    if(a<151){
        aincre=a++;
        mil2.textContent=aincre +"+";
    }
    if(aincre>=150){
        aincre=150;
    }
}

function increb(){
    if(b<16){
        bincre=b++;
        mil3.textContent=bincre +"+";
    }
    if(bincre>=15){
        bincre=15;
    }
}
function increc(){
    if(c<151){
        cincre=c++;
        mil4.textContent=cincre +"+";
    }
    if(cincre>=150){
        cincre=150;
    }
}
function incred(){
    if(d<56){
        dincre=d++;
        mil5.textContent=dincre +"+";
    }
    if(dincre>=55){
        dincre=55;
    }
}
var threedot=document.querySelector(".threedots")
threedot.addEventListener("mouseenter",()=>{
    dropdownlist.classList.remove("active");
    dropdownlistspan.classList.remove("ef")
    company.classList.remove("color")
    selectcontainer.classList.remove("sactive")

})

var language=document.querySelector(".language");
var selectcontainer=document.querySelector(".select-container")
language.addEventListener("click",()=>{
    selectcontainer.classList.toggle("sactive")
})