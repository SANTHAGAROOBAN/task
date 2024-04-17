var click = 0;
var winner=0;

function directionchangeX(X) {
    var X = document.getElementById("X")
    click = 0;
    console.log(click)
    X.classList.add("Xdesign")
    X.classList.remove("Odesign")
}
function directionchangeO(O) {
    var O = document.getElementById("O")
    click = 1;
    console.log(click)
    O.classList.add("Odesign")
    O.classList.remove("Xdesign")
}

function myfunction(game) {
    var matchdraw=document.querySelector(".match_draw")
    click++;
    if (click % 2 !== 0) {
        game.value = "X"
        game.disabled="X"
        game.style.color = "black"
    }
    else {
        game.value = 'O';
        game.disabled="O"
        game.style.color = "red";
    }
    // console.log(one.value)
    // console.log(two.value)
    // console.log(three.value)
    // checkX();
    checkXandO();
    console.log("click="+click)
    if(click=="9" && winner=="0"){
        console.log("match draw") 
        matchdraw.style.display="block";       
    }
}
// console.log(one)

function checkXandO(){
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    const span_one=document.querySelector(".span_one");
    const span_two=document.querySelector(".span_two");
    const span_three=document.querySelector(".span_three");
    const span_four=document.querySelector(".span_four");
    const span_five=document.querySelector(".span_five");
    const span_six=document.querySelector(".span_six");
    const span_seven=document.querySelector(".span_seven");
    const span_eight=document.querySelector('.span_eight');
    const winnerX=document.querySelector(".winner_X")
    const winner_Y=document.querySelector(".winner_Y");

    if(one.value=="X" && two.value=="X" && three.value=="X"){
        console.log("X is winner")
        span_one.style.display="block";
        winnerX.style.display="block";
        winner++
    }

    else if(four.value=="X" && five.value=="X" && six.value=="X"){
        console.log("X is winner")
        span_two.style.display="block";
        winnerX.style.display="block";
        winner++
    }
    
    else if(seven.value=="X" && eight.value=="X" && nine.value=="X"){
        console.log("X is winner")
        span_three.style.display="block";
        winnerX.style.display="block";
        winner++
    }

    else if(one.value=="X" && four.value=="X" && seven.value=="X"){
        console.log("X is winner")
        span_four.style.display="block";
        winnerX.style.display="block";
        winner++
    }
    else if(two.value=="X" && five.value=="X" && eight.value=="X"){
        console.log("X is winner")
        span_five.style.display="block";
        winnerX.style.display="block";
        winner++
    }
    else if(three.value=="X" && six.value=="X" && nine.value=="X"){
        console.log("X is winner")
        span_six.style.display="block";
        winnerX.style.display="block";
        winner++
    }
    else if(one.value=="X" && five.value=="X" && nine.value=="X"){
        console.log("X is winner")
        span_eight.style.display="block";
        winnerX.style.display="block";
        winner++
    }
    else if(three.value=="X" && five.value=="X" && seven.value=="X"){
        console.log("X is winner")
        span_seven.style.display="block";
        winnerX.style.display="block";
        winner++
    }
    else if(one.value=="O" && two.value=="O" && three.value=="O"){
        console.log("O is winner")
        span_one.style.display="block";
        winner_Y.style.display="block";
        winner++
    }

    else if(four.value=="O" && five.value=="O" && six.value=="O"){
        console.log("O is winner")
        span_two.style.display="block";
        winner_Y.style.display="block";
        winner++
    }
    
    else if(seven.value=="O" && eight.value=="O" && nine.value=="O"){
        console.log("O is winner")
        span_three.style.display="block";
        winner_Y.style.display="block";
        winner++
    }

    else if(one.value=="O" && four.value=="O" && seven.value=="O"){
        console.log("O is winner")
        span_four.style.display="block";
        winner_Y.style.display="block";
        winner++
    }
    else if(two.value=="O" && five.value=="O" && eight.value=="O"){
        console.log("O is winner")
        span_five.style.display="block";
        winner_Y.style.display="block";
        winner++
    }
    else if(three.value=="O" && six.value=="O" && nine.value=="O"){
        console.log("O is winner")
        span_six.style.display="block";
        winner_Y.style.display="block";
        winner++
    }
    else if(one.value=="O" && five.value=="O" && nine.value=="O"){
        console.log("O is winner")
        span_eight.style.display="block";
        winner_Y.style.display="block";
        winner++
    }
    else if(three.value=="O" && five.value=="O" && seven.value=="O"){
        console.log("O is winner")
        span_seven.style.display="block";
        winner_Y.style.display="block";
        winner++
    }
    console.log("winner="+winner)
}
function replay(){
    location.reload();
}








