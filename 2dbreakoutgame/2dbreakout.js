var gameboard;
var boardHeight=250;
var boardWidth=400;
var context;
var player;
var playerWidth=60;
var playerHeight=10;
var velocityX=10;

player={
    x:boardWidth/2-playerWidth/2,
    y:boardHeight-playerHeight,
    width:playerWidth,
    height:playerHeight,
    velocityX:velocityX
};

var ball;
var ballWidth=8;
var ballHeight=8;
var ballvelocityX=2;
var ballvelocityY=2;

ball={
    // x:boardWidth/2-ballWidth/2,
    // y:boardHeight-ballHeight-15,
    x:boardWidth/2,
    y:boardHeight-playerHeight-10,
    width:ballWidth,
    height:ballHeight,
    velocityX:ballvelocityX,
    velocityY:ballvelocityY
};
var score=0;
var barArray=[];
var barWidth=60;
var barHeight=20;
var barcolumn=5;
var barrow=3;


var barX=30;
var barY=25;
var lives=3;

window.addEventListener("load",()=>{
    gameboard=document.getElementById("canvas");
    gameboard.height=boardHeight;
    gameboard.width=boardWidth;
    context=gameboard.getContext("2d");

    
    
    

    context.fillStyle="blue";
    context.fillRect(player.x,player.y,player.width,player.height);
 
    // context.fillStyle="white";
    // context.fillRect(ball.x,ball.y,ball.ballwidth,ball.ballheight);

    requestAnimationFrame(update);
        




    document.addEventListener("keydown",(e)=>{
        var playermove=10;
        if(e.key==="ArrowLeft"){
            if(player.x>0){
                player.x-=playermove;
                console.log(player.x);
            }
            else{
                player.x-=0;
            }

        }
        else if(e.key==="ArrowRight"){
            if(player.x<boardWidth-60){
                player.x+=playermove;
                console.log(player.x)
            }
            else{
                player.x+=0;
            }
        }

        
    })
    document.addEventListener("mousemove",(e)=>{
        console.log(e.movementX)
        var playermove=5;
        if(e.movementX<0){
            
            if(player.x>0){
                player.x-=playermove;
                console.log(player.x);
            }
            else{
                player.x-=0;
            }
      
            // player.x-=10;
        }
        else if(e.movementX>0){
            // player.x+=10;
            if(player.x<boardWidth-60){
                player.x+=playermove;
                console.log(player.x)
            }
            else{
                player.x+=0;
            }
        }
    })
    createbar();

})
function createbar(){
    barArray=[];
    for(let i=0;i<barcolumn;i++){
        for(let j=0;j<barrow;j++){
            var bar={
                x:barX+i*barWidth+i*10,
                y:barY+j*barHeight+j*10,
                width:barWidth,
                height:barHeight,
                break:false
            }
            barArray.push(bar);
            // console.log(barArray)
        }
    }


}
function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0,boardWidth,boardHeight)

    
    context.fillStyle="blue";
    context.fillRect(player.x,player.y,player.width,player.height);
    


    context.font="20px Courier";
    context.fillStyle="blue";
    context.fillText("score "+score,10,20);

    context.font=" 20px Courier";
    context.fillStyle="blue";
    context.fillText("lives "+lives,300,20);

    

    Ball();
    ballmovement();
    bars();
   
    
}

function bars(){
    context.fillStyle="blue";
    for(let i=0;i<barArray.length;i++){
        let bar=barArray[i]
        if(!bar.break){
            if(topsidecollision(ball,bar)||bottomsidecollision(ball,bar)){
                bar.break = true;
                score++;
                ball.velocityY*=-1;
            }
            else if(leftsidecollision(ball,bar)||rightsidecollision(ball,bar)){
                bar.break = true;
                score++;
                ball.velocityX*=-1;
            }
            if(score=="15"){
                alert("YOU WIN THE GAME");
                document.location.reload();
            }
            context.fillRect(bar.x,bar.y,bar.width,bar.height);
        }
    }
}
function Ball(){
    context.beginPath();
    context.arc(ball.x,ball.y,ball.width,0,Math.PI*2);
    context.fillStyle="blue";
    context.fill();
    context.closePath();
}

function ballmovement(){
    ball.x+=ball.velocityX;
    ball.y+=ball.velocityY;
    
     
    console.log("ball movement works")
   
   if(ball.y<=0){
    ball.velocityY *= -1;
   }
   else if(ball.x<=0 || ball.x>=boardWidth){
    ball.velocityX*=-1;
   }
   else if(ball.y+ball.height>=boardHeight){
    lives--;
    ball.x=boardWidth/2;
    ball.y=boardHeight-playerHeight-10;
    player.x=boardWidth/2-playerWidth/2;
    player.y=boardHeight-playerHeight;
    console.log(lives);
    if(lives<1){
        alert("GAME OVER")
        document.location.reload();
    }
   }  

   if(topsidecollision(ball,player)||bottomsidecollision(ball,player)){
    ball.velocityY*=-1;
   }
   else if(rightsidecollision(ball,player)||leftsidecollision(ball,player)){
    ball.velocityX*=-1;
   }
}

function topsidecollision(ball,bar){
    return ball.x<bar.x + bar.width && ball.x+ball.width>bar.x && ball.y<bar.y + bar.height && ball.y + ball.height>bar.y && (ball.y+ball.height)>=bar.y;
}
function bottomsidecollision(ball,bar){
    return ball.x<bar.x + bar.width && ball.x+ball.width>bar.x && ball.y<bar.y + bar.height && ball.y + ball.height>bar.y && (bar.y+bar.height)>=ball.y;
}
function leftsidecollision(ball,bar){
    return ball.x<bar.x + bar.width && ball.x+ball.width>bar.x && ball.y<bar.y + bar.height && ball.y + ball.height>bar.y && (ball.x+ball.width)>=bar.x;
}
function rightsidecollision(ball,bar){
    return ball.x<bar.x + bar.width && ball.x+ball.width>bar.x && ball.y<bar.y + bar.height && ball.y + ball.height>bar.y && (bar.x+bar.width)>=ball.x;
}