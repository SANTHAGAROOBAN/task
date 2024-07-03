var canvas;
var cwidth=10;
var ch1x=32;
var ch1y=130;
var checker1={
    x:ch1x,
    y:ch1y,
    width:cwidth
}



var ch2x=250;
var ch2y=130;
var checker2={
    x:ch2x,
    y:ch2y,
    width:cwidth
}


window.onload=function myfunction(){
    canvas=document.getElementById("canvas");
    context=canvas.getContext("2d");


    requestAnimationFrame(update)
}

function update(){
    requestAnimationFrame(update)
    context.clearRect(0,0,400,400);

    draw();
    drawtable();
    drawpeoplemove()
    // firstcheckergone()
    // firstcheckerin()
    // secondcheckergone();

    
}

function draw(){
    context.beginPath();
    context.arc(checker1.x,checker1.y,checker1.width,0,Math.PI*2);
    context.fillStyle="blue";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(checker2.x,checker2.y,checker2.width,0,Math.PI*2);
    context.fillStyle="blue";
    context.fill();
    context.closePath();


    context.beginPath();
    context.arc(people1.x,people1.y,people1.width,0,Math.PI*2);
    context.fillStyle="gray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(people2.x,people2.y,people2.width,0,Math.PI*2);
    context.fillStyle="gray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(people3.x,people3.y,people3.width,0,Math.PI*2);
    context.fillStyle="gray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(people4.x,people4.y,people3.width,0,Math.PI*2);
    context.fillStyle="gray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(people5.x,people5.y,people3.width,0,Math.PI*2);
    context.fillStyle="gray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(peopler1.x,peopler1.y,peopler1.width,0,Math.PI*2);
    context.fillStyle="gray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(peopler2.x,peopler2.y,peopler2.width,0,Math.PI*2);
    context.fillStyle="gray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(peopler3.x,peopler3.y,peopler3.width,0,Math.PI*2);
    context.fillStyle="gray";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(hero.x,hero.y,hero.width,0,Math.PI*2);
    context.fillStyle="white";
    context.fill();
    context.closePath();
}

// function firstcheckergone(){
//     // requestAnimationFrame(update);
//     context.clearRect(0,0,400,400);

//     checker1.x += 1;
//     if(checker1.x>=130 && !(checker1.x ==135) ){
//         dooropen=true;
//         checker1.x=135;
        
//         checker1.y+= -1;
//         console.log("checker1.y:"+checker1.y)

//         if(checker1.y<=-1){
//             // checker1.y=-5;
//             // console.log("hello");
//             checker1.y = -10
            
//         }
        
//     }

//     if(checker1.x == 135 && checker1.y<=80){
//        dooropen=false;
//     }
      
// }


function secondcheckergone(){
    checker2.x += -1;
    if(checker2.x<=180 && !(checker2.x ==160) ){
        dooropen=true;
        checker2.x=160;
        
        checker2.y+= -1;
        console.log("checker1.y:"+checker2.y)

        if(checker2.y<=-1){
            checker2.y = -10
            
        }
        
    }

    if(checker2.x == 160 && checker2.y<=80){
       dooropen=false;
    //    console.log("ok")
    }
      
}

function firstcheckerin(){
    if(checker1.y <= -1 && checker1.x==135){
        checker1.y += 1;

    }
    
    // if(checker1.x==135 && checker1.y>129){
    //     checker1.x = 32 ;
    // }

}




var gatex=125;
var gatey=110;
var gateopenx=180;
var gateopeny=80;
var gate={
    x:gatex,
    y:gatey,
    x2:gateopenx,
    y2:gateopeny
};

var dooropen=false;

function drawtable(){

    context.fillStyle="black";
    context.fillRect(0,110,120,2);

    context.fillStyle="black";
    context.fillRect(180,110,120,2);

    if(!dooropen){
        context.fillStyle="white";
        context.fillRect(gate.x,gate.y,50,2); 
        
    } 
    else{
        context.fillStyle="white";
        context.fillRect(gate.x2,gate.y2,2,30); 
        
    }

}

var rpx=32;
var rpy=95;
var rpwidth=10;

var people1={
    x:rpx,
    y:rpy,
    width:rpwidth
}
var people2={
    x:rpx,
    y:rpy-25,
    width:rpwidth
}

var people3={
    x:rpx,
    y:rpy-50,
    width:rpwidth
}

var people4={
    x:rpx,
    y:rpy-110,
    width:rpwidth
}

var people5={
    x:rpx,
    y:rpy-110,
    width:rpwidth
}


var lpx=250;
var lpy=95;
var lpwidth=10;

var peopler1={
    x:lpx,
    y:lpy,
    width:lpwidth
}
var peopler2={
    x:lpx,
    y:lpy-25,
    width:rpwidth
}

var peopler3={
    x:lpx,
    y:lpy-50,
    width:rpwidth
}

var hero={
    x:lpx,
    y:lpy-75,
    width:rpwidth
}
var val;
function drawpeoplemove(){
    val=true;

if(val)
{
    hero.x += -1;
}
else{
    hero.x += 1;
}
   
    if(hero.x<=35 && !(peopler3.y==73)){
        hero.x=35;
        peopler1.y += 1;
        // console.log(peopler1.y+"hellow");
        
    }
    
    if(peopler1.y>=98){
        peopler1.y=98;
        if(peopler1.y==98){
            peopler1.x+=1;
            // console.log(peopler1.x+"hellow")
            if(peopler1.x>=320){
                peopler1.x=320;
            }
        }
    }

    if(peopler1.x==320){
        peopler2.y+=1;

        if(peopler2.y>=98){
            peopler2.y=98;
            peopler3.y=73;
            
        }

        
    }
    if(peopler3.y==73){
        val=false;
        // hero.x=36;
        // hero.x += 1;
        hero.x = 140;
        // if(hero.x>=)
        // console.log(hero.x+"ok")
    }
    if(hero.x==140){

        people1.y += 1;
    }
    // console.log(people1.y+"yep")


    if(people1.y >= 98){
        people1.y=98;
        people1.x += -1;

        if(people1.x<=-1){
            people1.x=-10;
        }

    }

    if(people1.x == -10){
        people2.y += 1
        if(people2.y>=98){
            people2.y=98;
            
            if(people2.y==98){
                people3.y=73;
                people4.y += 1;
                if(people4.y>45){
                    people4.y=45;
                }
            }
        }
    }
    if(people4.y==45){
        hero.x = 250;
        hero.y=45;

        if(hero.y==45){
            people2.x += -1;

            if(people2.x< -10){
                people2.x = -10;
                people3.y = 95;
                people4.y = 73
            } 
        }
    }

   
}




