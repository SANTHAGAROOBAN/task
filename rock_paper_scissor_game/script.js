var computer_choice=document.getElementById("computer_choice")
var user_choice=document.getElementById("user_choice")
var result=document.getElementById("result")
var rock=document.getElementById("rock")
var paper=document.getElementById("paper")
var scissor=document.getElementById("scissor")

rock.addEventListener("click",(e)=>{
    user_choice.innerHTML=e.target.textContent
    computerchoice()
    results()
})
paper.addEventListener("click",(e)=>{
    user_choice.innerHTML=e.target.textContent
    computerchoice()
    results()
})
scissor.addEventListener("click",(e)=>{
    user_choice.innerHTML=e.target.textContent
    computerchoice()
    results()
})

function computerchoice(){
    var choice= Math.floor(Math.random()*3)+1
    console.log(choice)
    if(choice=='1'){
        computer_choice.innerHTML="rock"
    }
    else if(choice=='2'){
        computer_choice.innerHTML="paper"
    }
    else if(choice=='3'){
        computer_choice.innerHTML="scissor"
    }
}
function results(){
    if(computer_choice.textContent==user_choice.textContent){
        result.innerHTML="match draw"
       
    }
    else if(computer_choice.textContent=="rock" && user_choice.textContent=="paper"){
        result.innerHTML='you win'
       

    }
    else if(computer_choice.textContent=="rock" && user_choice.textContent=="scissor"){
        result.innerHTML='you loss'
       

    }
    else if(computer_choice.textContent=='paper' && user_choice.textContent=="rock"){
        result.innerHTML="you loss"
     

    }
    else if(computer_choice.textContent=="paper" && user_choice.textContent=="scissor"){
        result.innerHTML="you win"
     
        
    }
    else if(computer_choice.textContent=="scissor" && user_choice.textContent=="rock"){
        result.innerHTML="you win"
       
        
    }
    else if(computer_choice=="scissor" && user_choice.textContent=="paper"){
        result.innerHTML="you loss"
     
        
    }

}

