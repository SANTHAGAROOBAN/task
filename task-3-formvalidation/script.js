var username=document.getElementById("username");
var dob=document.getElementById("dob");
var mobilenumber=document.getElementById("mobilenumber");


var form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formvalidation();

    // document.querySelectorAll('input').value=='';


})




function formvalidation(){
    var usernamev=username.value;
    var dobv=dob.value;
    var mobilenumberv=mobilenumber.value;
    var digit=mobilenumberv.toString();
    console.log(digit.length);

    if(usernamev==''|| usernamev==null){
        errorvalidationfunction(username,'please enter the username')
    }
    else {
        successvalidationfunction(username);
        
    }
    if(dobv=="" || dobv==null){
        errorvalidationfunction(dob,'please enter the DOB');
    }
    else {
        successvalidationfunction(dob);
    }

    if(mobilenumberv=="" || mobilenumberv==null){
        errorvalidationfunction(mobilenumber,"please enter the mobile number");
    }
    // else if(mobilenumberv!=/[^0-9]/g){
    //     errorvalidationfunction(mobilenumber,"mobile number should be integer")
    // }
   
    else if(digit.length>10){
        errorvalidationfunction(mobilenumber,"mobile number is greater than 10 digit");
    }
    else if(digit.length<10){
        errorvalidationfunction(mobilenumber,"mobile number is less than 10 digit");
    }

    else {
        successvalidationfunction(mobilenumber);
    }


}
document.querySelector(".Reset").addEventListener("click",()=>{
    // username.value="";
    // dob.value="";
    // mobilenumber.value="";
    window.location.reload();

})
function errorvalidationfunction(element,message){
    var errorelement=element.parentElement;
    var err=errorelement.querySelector(".error");
    err.innerHTML=message;
    element.classList.add("errorin")
}

function successvalidationfunction(element){
    var successelement=element.parentElement;
    var err=successelement.querySelector(".error");
    err.innerHTML='';
    element.classList.remove("errorin")

}
