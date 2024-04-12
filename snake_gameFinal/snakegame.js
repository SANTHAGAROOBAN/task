var snakegame=document.querySelector(".snakegame")
var gamescore=document.getElementById("score")

var foodX;
var foodY;
var snakeX=1;
var snakeY=1;
var movedirectionX=0;
var movedirectionY=0;
var snakeline=[];
var score=0;
var food;

function foodchange(){

    foodX=Math.floor(Math.random()*40)+1
    foodY=Math.floor(Math.random()*40)+1
    console.log(foodX,foodY)

}
function directionchange(e){

    if(e.key==="ArrowLeft" ){ 
        movedirectionX=-1;
        movedirectionY=0;
    }

    else if(e.key==="ArrowRight"){
        movedirectionX=1;
        movedirectionY=0;
    }

    else if(e.key==="ArrowUp"){
        movedirectionX=0;
        movedirectionY=-1;
    }

    else if(e.key==="ArrowDown"){
        movedirectionX=0;
        movedirectionY=1;
    }
    // gamestart()
}
function gamestart(){
    
    food=`<div class="snake" style="grid-area:${foodY}/${foodX}"></div>`
    
    if(snakeY==foodY && snakeX==foodX){
        foodchange()
        score=score+1
        console.log(score)
        gamescore.textContent=score;
        snakeline.push([foodY,foodX])
        console.log(snakeline)
    }
    
    if(snakeX>40 || snakeY>40 || snakeX< 0 || snakeY< 0 || snakeX<-40 || snakeY<-40 ){
        alert("gameover");
        location.reload();
    }
    
    for(let i=snakeline.length-1;i>0;i--){
        snakeline[i]=snakeline[i-1];
        console.log(snakeline[i])
    }

    snakeline[0]=[snakeY,snakeX]
    snakeY += movedirectionY;
    snakeX += movedirectionX;
    
    for (let i = 0; i< snakeline.length; i++) {
        food+=`<div class="food" style="grid-area:${snakeline[i][0]}/${snakeline[i][1]}"></div>`  
        // console.log("snakeline"+snakeline[i][0],snakeline[i][1]) 
    }
    // food+=`<div class="food" style="grid-area:${snakeY}/${snakeX}"></div>`
    snakegame.innerHTML=food;

}
foodchange();
setInterval(gamestart,200)
document.addEventListener("keydown",directionchange);