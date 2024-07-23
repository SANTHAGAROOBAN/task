var left = document.getElementById("left");
var right = document.getElementById("right");
var wrapper=document.querySelector(".wrapper");
var ab=[0,-700,-1400,-2100,-2800]
var span=document.querySelectorAll("span");

var l=0;
left.onclick= ()=>{
    l += 700;
    if(l>0){
        // l= -2800;
        l=0;
    }
    wrapper.style.transform = `translateX(${l}px)`;
    console.log(l)
    changedotclr()
}

right.onclick= ()=>{
    l -= 700;
    console.log(l)
    if(l < -2800){
        // l=0;
        l= -2800;
    }
    wrapper.style.transform = `translateX(${l}px)`;
    changedotclr()
}
document.onkeyup = (e)=>{
    console.log(e.key);
    if(e.key=='ArrowLeft'){
        l += 700;
    if(l>0){
        // l= -2800;
        l=0;
    }
    wrapper.style.transform = `translateX(${l}px)`;
    changedotclr()
    }
    if(e.key=='ArrowRight'){
        l -= 700;
    console.log(l)
    if(l < -2800){
        // l=0;
        l= -2800;
    }
    wrapper.style.transform = `translateX(${l}px)`;
    changedotclr()
    }
}

function changedotclr(){
    switch(l){
        case 0:
            span[0].classList.add('active');
            span[1].classList.remove('active');
            span[2].classList.remove('active');
            span[3].classList.remove('active');
            span[4].classList.remove('active');
            break;
        case -700:
            span[0].classList.remove('active');
            span[1].classList.add('active');
            span[2].classList.remove('active');
            span[3].classList.remove('active');
            span[4].classList.remove('active');
            break;
        case -1400:
            span[0].classList.remove('active');
            span[1].classList.remove('active');
            span[2].classList.add('active');
            span[3].classList.remove('active');
            span[4].classList.remove('active');
            break;
        case -2100:
            span[0].classList.remove('active');
            span[1].classList.remove('active');
            span[2].classList.remove('active');
            span[3].classList.add('active');
            span[4].classList.remove('active');
            break;
        default:
            span[0].classList.remove('active');
            span[1].classList.remove('active');
            span[2].classList.remove('active');
            span[3].classList.remove('active');
            span[4].classList.add('active');
            break;
    }
}


for(let i=0; i<span.length;i++){
    span[0].classList.add('active');
    span[i].addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${ab[i]}px)`;
        l=ab[i];
        changedotclr()
    })
}


var label=document.getElementById('label-1');
var checkBox=document.getElementById("toggle-btn");
var container=document.querySelector('.container1');

checkBox.onclick= ()=>{
    if(checkBox.checked==true){
        container.classList.add('lab');
        document.body.style.backgroundColor="black";
        document.body.style.color='white'
       for(let i=0;i<span.length;i++){
        span[i].style.border="solid 2px white"
        }
    document.querySelector(".mode").textContent="DARK MODE";

    }
    else{
        container.classList.remove('lab');
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        console.log("not able to work");
        for(let i=0;i<span.length;i++){
            span[i].style.border="solid 2px black"
        }
        document.querySelector(".mode").textContent="LIGHT MODE";
        
    }
}