var setting=document.getElementById("setting");
var settinginfo=document.querySelector(".settinginfo");
var btn=document.getElementById("btn");
var start=document.getElementById("start");
var loginform=document.getElementById("loginform");
var cancelbtn=document.getElementById("cancelbtn");
var form=document.querySelector(".form");
var playbtn=document.getElementById("playbtn");
var inputname=document.getElementById("name");
var mainmenu=document.getElementById("mainmenu");

start.addEventListener("click",()=>{
    loginform.style.visibility="visible";
});
cancelbtn.addEventListener("click",()=>{
    loginform.style.visibility="hidden";
});
setting.addEventListener("click",()=>{
    settinginfo.style.visibility="visible";
});

btn.addEventListener("click",()=>{
    settinginfo.style.visibility="hidden";
});
form.addEventListener("click",(e)=>{
    e.preventDefault();
});
var nameval;
playbtn.addEventListener("click",()=>{
    nameval=inputname.value;

    if(nameval==""){
        alert("please enter the name");
    }
    else{

        mainmenu.style.visibility="hidden";
        loginform.style.visibility="hidden";
        gamecontainer.style.visibility="visible";
        player.textContent=nameval;
        addDivelement();
        createball(); 
        return val=0;
    }
        
    
   

});
var barwidth=200;
var barHeight=20;
class Block{
    constructor(X,Y){
        this.bottomLeft=[X,Y]
        this.bottomRight=[X+barwidth,Y]
        this.topRight=[x+barwidth,Y+barHeight];
        this.topLeft=[X,Y+barHeight]
    }
}
var blockk=[
    new Block(80,270),
    new Block(280,270),
    new Block(480,270),
    new Block(680,270),
    new Block(880,270),
    new Block(1080,270),
    new Block(80,290),
    new Block(280,290),
    new Block(480,290),
    new Block(680,290),
    new Block(880,290),
    new Block(1080,290),
    new Block(80,310),
    new Block(280,310),
    new Block(480,310),
    new Block(680,310),
    new Block(880,310),
    new Block(1080,310),
    new Block(80,330),
    // new Block(280,330),
    new Block(480,330),
    new Block(680,330),
    // new Block(880,330),
    new Block(1080,330),
    new Block(80,350),
    // new Block(280,350),
    new Block(480,350),
    new Block(680,350),
    // new Block(880,350),
    new Block(1080,350),
    new Block(80,370),
    // new Block(280,370),
    new Block(480,370),
    new Block(680,370),
    // new Block(880,370),
    new Block(1080,370),
    new Block(80,390),
    // new Block(280,390),
    new Block(480,390),
    new Block(680,390),
    // new Block(880,390),
    new Block(1080,390),
    new Block(80,410),
    new Block(280,410),
    new Block(480,410),
    new Block(680,410),
    new Block(880,410),
    new Block(1080,410),
    new Block(80,430),
    new Block(280,430),
    new Block(480,430),
    new Block(680,430),
    new Block(880,430),
    new Block(1080,430),
    new Block(80,450),
    new Block(280,450),
    new Block(480,450),
    new Block(680,450),
    new Block(880,450),
    new Block(1080,450)
];
var gamecontainer=document.querySelector(".gameboardcontainer");
var gameboard=document.querySelector(".gameboard");
var player=document.querySelector('.playername')

var barArray;
function addDivelement(){
    // console.log(blockk[0][0]+"k");
    // console.log(blockk[0][1]+"k")
    for(let i=0;i<blockk.length;i++){
        var div=document.createElement("div");
        div.classList.add('break');
        div.style.left=blockk[i].bottomLeft[0] + "px"
        div.style.bottom=blockk[i].bottomLeft[1] +"px"
        gameboard.appendChild(div);
    }
   
}
// addDivelement();

var ballctrl=document.querySelector(".ballctrl");
var ball1;
var ball2;
var ball;
var ballx=640;
var bally=30;
console.log("ballx"+ballx);
console.log("bally"+bally);

ball=document.createElement("div");
ball.setAttribute("id","ball")
ballctrl.append(ball);

ball1=document.createElement('div');
ball1.setAttribute("id","ball");
gameboard.append(ball1);

ball2=document.createElement('div');
ball2.setAttribute("id","ball");
gameboard.append(ball2);

function createball(){
    ball.style.left=ballx +"px";
    ball.style.bottom=bally +"px";

    
}

function balltwo(){
    ball1.style.left= ball1x +"px";
    ball1.style.bottom= ball1y +"px";
    // ball2.style.left=(ball1x+1) +"px";
    // ball2.style.bottom=(ball1y+1) +"px";
}

function ballthree(){
    ball2.style.left= ball2x +"px";
    ball2.style.bottom= ball2y +"px";
}

var ball1x=350;
var ball1y=350; 
var ball2x=950;
var ball2y=350;
var x=2;
var y=2
var moveinter;
var a=2;
var b=2;

var c=2;
var d=2;
var ff=0;

function moveball(){
    
    if(keyboardcontrol.checked==true){
        ff=0;
    }
    if(mousecontrol.checked==true){
        ff=1;
    }

    if(!val){
        ballx += x;
        bally += y;
       
        ball1x += a;
        ball1y += b;

        ball2x +=c;
        ball2y +=d;
    }
    createball();
    balltwo();
    ballthree()
    wallreflect();
    

    if(bb){
        // createball();
        // balltwo();
        // ballthree()
        // alert("you complete level one");
        // le=level++;
        // lvl.innerHTML=le;
        clearInterval(inter)
        alert("you reached level 2");
        location.reload();
    }
    
    
}
   

var inter=setInterval(moveball,20);

var ballwidth=20;
var blockwidth=200;
var blockheight=20;

var scr=document.querySelector(".score");
var livess=document.querySelector(".lives");
var lvl=document.querySelector(".level");
var s=0,v;
var score=0;
var hit=true;
var live=3;
var val=1;
var level=1;
var le;
var bb=0;

function wallreflect(){
    // if(!val){
 
    for(let i=0;i<blockk.length;i++){
        if(ballx > blockk[i].bottomLeft[0] && ballx < blockk[i].bottomRight[0] && ((bally+ ballwidth) > blockk[i].bottomLeft[1] && bally < blockk[i].topLeft[1])){
            var allBlocks=Array.from(document.querySelectorAll('.break'))
            allBlocks[i].classList.remove('break');
            blockk.splice(i,1)
            changedirection();
            
            console.log(s)
            if(hit==false){
                v=s++;
                console.log(v+"v")
                score=score+((v)*10);
                scr.innerHTML=score;
            }
            else{
                score=score+10;
                hit=false;
                scr.innerHTML=score;
                s=1;
            }
           
        }

        if( ball1x > blockk[i].bottomLeft[0] && ball1x < blockk[i].bottomRight[0] && ((ball1y+ ballwidth) > blockk[i].bottomLeft[1] && ball1y < blockk[i].topLeft[1])){
            var allBlocks=Array.from(document.querySelectorAll('.break'))
            allBlocks[i].classList.remove('break');
            blockk.splice(i,1)
            changeball1()
            console.log(s)
            if(hit==false){
                v=s++;
                console.log(v+"v")
                score=score+((v)*10);
                scr.innerHTML=score;
            }
            else{
                score=score+10;
                hit=false;
                scr.innerHTML=score;
                s=1;
            }
        }


        if( ball2x > blockk[i].bottomLeft[0] && ball2x < blockk[i].bottomRight[0] && ((ball2y+ ballwidth) > blockk[i].bottomLeft[1] && ball2y < blockk[i].topLeft[1])){
            var allBlocks=Array.from(document.querySelectorAll('.break'))
            allBlocks[i].classList.remove('break');
            blockk.splice(i,1)
            changeball2();
            console.log(s)
            if(hit==false){
                v=s++;
                console.log(v+"v")
                score=score+((v)*10);
                scr.innerHTML=score;
            }
            else{
                score=score+10;
                hit=false;
                scr.innerHTML=score;
                s=1;
            }
        }
        
        
        
    }
// }
    
    if(ballx>=(gamewidth-ballwidth) || ballx<=0 || bally>(gameheight-ballwidth)){
        changedirection();
    }
    if(ball1x>=(gamewidth-ballwidth) || ball1x<=0 || ball1y>(gameheight-ballwidth)){
        changeball1()
    }
    if(ball2x>=(gamewidth-ballwidth) || ball2x<=0 || ball2y>(gameheight-ballwidth)){
        changeball2()
    }



    if(ballx> controlposition && ballx < controlposition+blockwidth && bally > controlpositiony && bally < controlpositiony + blockheight){
        changedirection();
        s=1;
        hit=true;
        console.log("itsworking")
    }
    if(ball1x> controlposition && ball1x < controlposition+blockwidth && ball1y > controlpositiony && ball1y < controlpositiony + blockheight){
        changeball1()
        s=1;
        hit=true;
        console.log("itsworking")
    }
    if(ball2x> controlposition && ball2x < controlposition+blockwidth && ball2y > controlpositiony && ball2y < controlpositiony + blockheight){
        changeball2()
        s=1;
        hit=true;
        console.log("itsworking")
    }

    if(bally<=0 ){
        console.log("am bally")
        ballx=640;
        bally=30;
        controlposition=550;
        controlpositiony=10;
        live--;
        livess.innerHTML=live;
        createcontrolpad();

        if(live<1){
            alert("game over");
            location.reload();
            clearInterval(inter)
        }

    }
    
    if(ball1y<=0){
        ball1.classList.remove("break");
    }
    if(ball2y<=0){
        ball2.classList.remove("break");
    }

    if(blockk.length<=0){
        bb=1;
    }

}
function changedirection(){
    if(x===2 && y===2){
        y= -2;
        return;
    }
    if(x===2 && y===-2){
        x=-2;
        return;
    }
    if(x===-2 && y===-2){
        y=2;
        return;
    }
    if(x===-2 && y===2){
        x=2;
        return;
    }
}
function changeball1(){
    if(a===2 && b===2){
        b= -2;
        return;
    }
    if(a===2 && b===-2){
        a=-2;
        return;
    }
    if(a===-2 && b===-2){
        b=2;
        return;
    }
    if(a===-2 && b===2){
        a=2;
        return;
    }
}
function changeball2(){
    if(c===2 && d===2){
        d= -2;
        return;
    }
    if(c===2 && d===-2){
        c=-2;
        return;
    }
    if(c===-2 && d===-2){
        d=2;
        return;
    }
    if(c===-2 && d===2){
        c=2;
        return;
    }
}


var control;
var controlposition=550;
var controlpositiony=10;
var gamewidth=window.innerWidth;
var gameheight=window.innerHeight-60;

console.log("gamewidth:"+gamewidth +"gameheight:"+gameheight);

control=document.createElement("div");
control.setAttribute("id","control");
ballctrl.append(control);
function createcontrolpad(){
    control.style.left = controlposition +"px";
    control.style.bottom = controlpositiony +"px";
}
createcontrolpad();

var m=0;
var ss=0;
var secs;
var mins;
var min=document.querySelector(".min");
var sec=document.querySelector(".sec");
var interv=setInterval(timerFunction,1000);


function timerFunction(){
    secs=ss++;
    if(ss>=60){
        mins=m++;
        ss=0;
        min.textContent=mins;
    }
    sec.textContent=secs;

}

var play=false;

function spaceandenter(e){

    if(!ff){
    console.log(e.key);
    if(e.code==="Space"){
        play=false;
    }
    else if(e.key==="Enter"){
        play=true;
    }

    if(e.key==="ArrowLeft"){
        if(controlposition>0){
            controlposition -= 10;
            createcontrolpad();
        }
        else{
            controlposition -= 0;

        }
        
    }
    else if(e.key==="ArrowRight"){
        if(controlposition<gamewidth-200){
            controlposition += 10;
            createcontrolpad();
        }
        else{
            controlposition +=0;
        }
        
    }

}
    
}

console.log();
document.addEventListener("keydown",spaceandenter)

document.addEventListener("mousemove",(e)=>{
    if(ff){


    if(e.movementX<=0){
        if(controlposition>0){
            controlposition -= 10;
            createcontrolpad();
        }
        else{
            controlposition -= 0;
        }
        
    }
    
    else if(e.movementX>0){
        if(controlposition < 1366-200){
            controlposition += 10;
            createcontrolpad();
            // console.log("hello")
        }
        else{
            controlposition += 0;
        }
    }
    
}
})

var keyboardcontrol=document.getElementById("keyboardcontrol");

var mousecontrol=document.getElementById("mousecontrol");



