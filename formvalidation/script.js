const username=document.getElementById("inputusername");
const email=document.getElementById("inputemail");
const password=document.getElementById("inputpassword");
const currentpassword=document.getElementById("inputcurrentpassword");
var formsubmit=document.querySelector(".formval");

formsubmit.addEventListener("submit",(e)=>{
    e.preventDefault();
    validationvalue();
})

function validationvalue(){
    if(username.value==""){
        errorvalidation(username,"please enter the value");
    }
    else{
        successvalidation(username);
    }

    if(email.value==""){
        errorvalidation(email,"please enter the mail id")
    }
    else{
        successvalidation(email)
    }

    if(password.value==""){
        errorvalidation(password,"please enter the password");
    }
    else if(password.value.length<=8){
        errorvalidation(password,"please is not strong");
    }
    else if(password.value!=currentpassword.value){
        errorvalidation(password,"enter the currentpassword correctly")
    }
    else{
        successvalidation(password)
    }
    
    if(currentpassword.value==""){
        errorvalidation(currentpassword,"please enter the current password")
    }
    else if(currentpassword.value!=password.value){
        errorvalidation(currentpassword,"current password does not match")
    }
    else{
        successvalidation(currentpassword)
    }
}

function errorvalidation(element,message){
    var validate=element.parentElement;
    validate.querySelector(".content").innerHTML=message;
    validate.classList.add("error");
    validate.classList.remove("success");
}
function successvalidation(element){
    var validate=element.parentElement;
    validate.querySelector(".content").innerHTML='';
    validate.classList.add('success');
    validate.classList.remove('error');
}

