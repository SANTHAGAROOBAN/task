var submitbtn=document.getElementById("submit");
var gameplayername=document.querySelector(".displayname");
var formcontainer=document.querySelector(".form");
var gameboardcontainer=document.querySelector(".container");

submitbtn.addEventListener("click",(e)=>{
    var playername=document.getElementById("nameinput").value;
    e.preventDefault();
    formcontainer.style.display="none";
    if(playername==" "){
        console.log("please enter the name")
        alert("please enter the name")
        location.reload();
    }
    else{
        gameplayername.textContent="Playername:"+playername;
    }
    return setInterval(timerfunction,1000) && setInterval(randomspecialfood,120000);
});
var playerscore=document.querySelector(".score");
var snakeboard=document.querySelector(".snakegameboard");

var snake;
var SnakeX,SnakeY;
var snakefood;
var foodX,foodY;
var food;
var snakebody=[];
SnakeX=1;
SnakeY=1;
var movesnakeX=0;
var movesnakeY=0;
var score=0;
var click=1;
var time;
var min=1;
var sec=0;
var minincrease;
var secincrease;
var specialfoodX;
var specialfoodY;
var ininter=0;
var intervaltime;
var randompower;
var specialpowerX;
var specialpowerY;
var fruit=0;
var info=false;

function createfood(){
    foodX=Math.floor(Math.random()*40)+1;
    foodY=Math.floor(Math.random()*40)+1;
    // console.log(foodX);
    // console.log(foodY);
}

function changesnakedirection(e){

    // console.log(e.key);

    if(e.key==="ArrowRight"){
        // console.log("arrowright is working");
        
        if(movesnakeX==-1 && movesnakeY==0){
            movesnakeX = -1;
            movesnakeY = 0;
        }
        else{
            movesnakeX = 1;
            movesnakeY = 0;
        }
    }
    else if(e.key==="ArrowLeft"){
        // console.log("arrowleft is working");

        if(movesnakeX==1 && movesnakeY==0){
            movesnakeX = 1;
            movesnakeY = 0;
        }

        else{
            movesnakeX = -1;
            movesnakeY = 0;
        }
    }
    else if(e.key==="ArrowUp"){
        // console.log("arrowup is working");
        
        if(movesnakeX==0 && movesnakeY==1){
            movesnakeX=0;
            movesnakeY=1;
        }
        else{
            movesnakeX=0;
            movesnakeY=-1;

        }
    }
    else if(e.key==="ArrowDown"){
        // console.log("arrowdown is working");

        if(movesnakeX==0 && movesnakeY==-1){
            movesnakeX=0;
            movesnakeY=-1;
        }
        else{
            movesnakeX=0;
            movesnakeY=1;

        }

    }
    if(e.code==="Space"){
        
        // for(let i=1;i<snakebody.length;i++){
        //     snakebody[i][0]=0;
        //     snakebody[i][1]=0;
        // }
        // movesnakeX=0;
        // movesnakeY=0;
        info=false;
        powerdisplay.textContent="press enter to play";
        


    }
    if(e.key==="Enter"){
        info=true;
        powerdisplay.textContent="  ";
    }
}
var spc=0;
function randomspecialfood(){
    specialfoodX=Math.floor(Math.random()*40)+1;
    specialfoodY=Math.floor(Math.random()*40)+1;

    console.log("special food"+specialfoodX);
    console.log("special foodY"+specialfoodY);
    setTimeout(randomclear,10000);
}

function randomclear(){
    specialfoodX=-1;
    specialfoodY=-1;
}
var plusplus=0;
var plusval;
var one;



function XandY(){
    if(specialpowerY<1){
        specialpowerY=0;
    } 
    specialpowerX=plusval;
    specialpowerY=Math.abs(foodY-20);
    setTimeout(cXandY,20000);
}

function cXandY(){
    specialpowerX= 45;
    specialpowerY= 45;
    avail=0;
}

function randompowerval(){
    randompower=Math.floor(Math.random()*4)+1;
    console.log(randompower);
}
setInterval(randompowerval,10000);

// randompower=2;

function gamestart(){
    if(info){
        game();
    }

    // if(info){
    //     score=score+10;
    // }
}
    


var condi=0;
var istimeenbled = 0;
var invisibilitypower=0;

    


function game(){
    snake=`<div class="food" style='grid-area:${foodY}/${foodX}'></div>`;

    if(foodY==SnakeY && foodX==SnakeX){
        createfood();
        if(istimeenbled){
            score=score+20;
        }else{
            score=score+10;
        }
        playerscore.innerHTML=score;
        snakebody.push([foodY,foodX])
        fruit++;
        specialfoodavailable=0;
        console.log(fruit+"fruits");
    }
    if(invisibilitypower){
        console.log("working invisible");
        if(SnakeX>40){
            SnakeX=1;
        }
        else if(SnakeY>40){
            SnakeY=1
        }
        else if(SnakeX<1){
            SnakeX=40;
        }
        else if(SnakeY<1){
            SnakeY=40;

        }
    }
    else{
        if(SnakeX>40 || SnakeY>40 || SnakeX<1 || SnakeY<1 ){
            alert('game over')
            clearInterval(moveinterval);
            location.reload();
        }
    }
    
    for(let i=1;i<snakebody.length;i++){
        // console.log("snakeX:"+SnakeX+' '+"snakey:"+SnakeY)
        // console.log("snakebody[i][0]"+snakebody[i][0]+''+"snakebody[i][1]"+snakebody[i][1])
        if(invisibilitypower){
            console.log("hi")
            
        }else{
            if(SnakeY==snakebody[i][0] && SnakeX==snakebody[i][1]){
                alert("snake bite himself!. So game over");
                clearInterval(moveinterval);
                location.reload();
            }
        }
        
    }

    for(let i=snakebody.length-1;i>0;i--){
        snakebody[i]=snakebody[i-1];
    }

    


    if(avail){
        XandY();
        plusval=plusplus++;

        if(plusval>=40 || plusval==0){
            plusplus=1;
        }

    }


    snakebody[0]=[SnakeY,SnakeX];
    SnakeX += movesnakeX;
    SnakeY += movesnakeY;
    
    if(specialfoodX==SnakeX && specialfoodY==SnakeY){
        randomclear();
        score=score+40;
        fruit++;
        specialfoodavailable=0;
        playerscore.innerHTML=score;
        snakebody.push([specialfoodY,specialfoodX])
        console.log("special food is working")
        

    }
    snake+=`<div class="food" id="yellowfood" style='grid-area:${specialfoodY}/${specialfoodX};'></div>`;
   
    snakebodylen();


    if(ininter){
        intervaltime=1000;
        console.log("ininter working");
    }
    else{
        intervaltime=200;
    }


    if(condi){ 
        for(let i=1;i<41;i++){
            for(let j=1;j<41;j++){
                snake+=`<div class="food" id="yellowfood" style='grid-area:${i}/${j};'></div>`;
            }
        }   
        score=score+10;  
    }
    

    snake+=`<div class="food" id="green" style='grid-area:${specialpowerY}/${specialpowerX};'></div>`;


    for(let i=0;i<snakebody.length;i++){
        // console.log("snakebody:"+snakebody[i])
        snake+=`<div class="snake" style='grid-area:${snakebody[i][0]}/${snakebody[i][1]}'></div>`;
        // console.log("working good"+snakebody[i][0]+""+snakebody[i][1])
        // console.log("working fine")
    }
    
    snakeboard.innerHTML=snake;

}
var div;
var specialfoodavailable=0;
var avail=0;
function snakebodylen(){

    if(fruit%10==0 && fruit>0){
        console.log(specialfoodavailable);
        if(specialfoodavailable==0){
            XandY();
            avail=1;
            specialfoodavailable++;    
        }
        // specialfoodavailable=0;  
        if(specialpowerX==SnakeX && specialpowerY==SnakeY){
            console.log("its working");
            cXandY();
            fruit++;
            specialfoodavailable=0;
            snakebody.push([specialfoodY,specialfoodX]);
            if(randompower==1){
                doublepoints();
                istimeenbled = 1;
            }
            else if(randompower==2){
                decreaselength();
            }
            else if(randompower==3){
                yelloweverywhere();   
            }
            else if(randompower==4){
                ininter=1;
                slowsnakemovement();
            }
            else if(randompower==5){
                invisibilitypower=1;
                invisibility();
            }
            
                  
        }
        
    }
}

var powerdisplay=document.getElementById("powerdisplay")
function doublepoints(){
        powerdisplay.textContent="double points for 30sec"
        console.log("double power");
        setTimeout(destroydoublepoits,30000);
        
}
function destroydoublepoits(){
    istimeenbled = 0;
    powerdisplay.textContent=" ";
    cXandY();
    console.log("destroydouble power");
}
function slowsnakemovement(){
    powerdisplay.textContent="snake speed decreased for 30sec";
    setTimeout(destroyslowsnake,30000);
}
function destroyslowsnake(){
    ininter=0;
    powerdisplay.textContent=" ";
}
function yelloweverywhere(){
    condi=1;
    
    powerdisplay.textContent="yellowfruit for entire screen for 30sec";
    setTimeout(destroyyellow,10000);
}

function destroyyellow(){
    condi=0;
    powerdisplay.textContent=" ";
}
function invisibility(){
    powerdisplay.textContent="invisibility power. if you hit the wall is not out"
    setTimeout(destroyinvisibility,30000);
}

function destroyinvisibility(){
    invisibilitypower=0;
    powerdisplay.textContent=" ";
}

var decreasel;;
function decreaselength(){
    decreasel=snakebody.length-(100/20);
    console.log("dec"+decreasel);
        for(let i=1;i<decreasel;i++){
            snakebody.pop();
            console.log("snakebody"+ snakebody[i])
            console.log("hello for is working")
        }
    powerdisplay.textContent="length decrease 20%";
    setTimeout(destroydecreaselength,4000);
}
function destroydecreaselength(){
    powerdisplay.textContent=" ";
}
    


var minspan=document.getElementById("min");
var secspan=document.getElementById("sec");

function timerfunction(){

    secincrease=sec++;
    // console.log(typeof(sec))
    secspan.textContent=secincrease;
    //    console.log(sec+"sec");

    if(sec==60){
        minincrease = min++;
        // console.log("if is working")
        // console.log(minincrease+"minincrease")
        minspan.textContent=minincrease;
        sec=0;
    }
    
}

game();
createfood();
const moveinterval=setInterval(gamestart,intervaltime);
document.addEventListener("keydown",changesnakedirection)
