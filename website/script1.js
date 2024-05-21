var imgback=document.querySelector(".img0");
var info1=document.querySelector(".info_h1");
var infopara=document.querySelector(".info_para");
var infos=document.querySelector(".start-consulting");
var count=0;
var maxcount=2;
// var clist=document.querySelector(".info_h1")

function leftpre(){
    count--;
    if(count<="-1"){
        count=maxcount;
    }
    imgback.src=`./source/images/${count}.jpg`;
    console.log("count"+count);
    
    if(count--){
        info1.classList.remove("info_h1", "info_h1sample")  
        info1.classList.add("info_h1sample2")
        infopara.classList.remove("info_para", "info_parasample")
        infopara.classList.add("info_parasample2")
        infos.classList.remove("start-consulting", "start-consultingsample")
        infos.classList.add("start-consultingsample2")
    } 
    else{
        info1.classList.add("info_h1")  
        info1.classList.remove("info_h1sample", "info_h1sample2")
        infopara.classList.add("info_para")  
        infopara.classList.remove("info_parasample", "info_parasample2")
        infos.classList.add("start-consulting")
        infos.classList.remove("start-consultingsample", "start-consultingsample2")
    }
    
    
    
}
// function anima(){
//     info1.classList.add("info_h1")
// }
function rightnext(){
    count++;
    if(count>maxcount){
        count=0
    }
    imgback.src=`./source/images/${count}.jpg`;
    console.log("count++"+count);
    
    
    if(count++){
        info1.classList.remove("info_h1", "info_h1sample2")  
       info1.classList.add("info_h1sample")
       infopara.classList.remove("info_para", "info_parasample2")
       infopara.classList.add("info_parasample")
       infos.classList.remove("start-consulting","start-consultingsample2")
        infos.classList.add("start-consultingsample")
    } 
    else{
        info1.classList.add("info_h1")  
       info1.classList.remove("info_h1sample", "info_h1sample2")
        infopara.classList.add("info_para")  
        infopara.classList.remove("info_parasample", "info_parasample2")
        infos.classList.add("start-consulting")
        infos.classList.remove("start-consultingsample", "start-consultingsample2")
    }
    
}

var menubar=document.getElementById("menu-bar");
var menudetails=document.querySelector(".menudetails")


function menubardetails(){
    if(menudetails.style.left==="-400px"){
        menudetails.style.left="1px";
    }
    else{
        menudetails.style.left="-400px"
    }
    
}


var slider=document.querySelector('.slider-2')
var sliderbtn1=document.querySelector(".sliderbtn1")
var sliderbtn2=document.querySelector(".sliderbtn2")
var sliderbtn3=document.querySelector(".sliderbtn3")
const sliderinterval=setInterval(imageslider,4000);

function imageslider(){

    var slidess=window.slider.scrollLeft;
    console.log("slides"+slidess);
    if(slider.scrollLeft=="0"){
        slider.scrollTo(575,0)
    }
    else if(slider.scrollLeft=="575"){
        slider.scrollTo(1150,0)
    }
    else if(slider.scrollLeft=="1150"){
        slider.scrollTo(1725,0)
    }
    else if(slider.scrollLeft=="1725"){
        slider.scrollTo(2300,0)
    }
    
    // slider.scrollLeft+=575;
    // setInterval(sliderinterval,2000);
    // cle();
    // if(slider.scrollLeft>="2280"){
    //     slider.scrollLeft=2280

    // }


    if( slider.scrollLeft<="2280"){
        sliderbtn3.style.backgroundColor="black";
        sliderbtn2.style.backgroundColor="transparent"
        sliderbtn1.style.backgroundColor="transparent"
    }
    if(slider.scrollLeft>="570" && slider.scrollLeft<="1140"){
        sliderbtn2.style.backgroundColor="black"
        sliderbtn1.style.backgroundColor="transparent"
        sliderbtn3.style.backgroundColor="transparent"
    }
    if(slider.scrollLeft=="0"){
        sliderbtn1.style.backgroundColor="black"
        sliderbtn2.style.backgroundColor="transparent"
        sliderbtn3.style.backgroundColor="transparent"
        
        
    }    
}


// function cle(){
//     if(slider.scrollLeft=="2280"){
//         clearInterval(sliderinterval)
       
//     }
// };

function sectionone(){
    slider.scrollTo(0,0);
    sliderbtn1.style.backgroundColor="black"
    sliderbtn2.style.backgroundColor="transparent"
    sliderbtn3.style.backgroundColor="transparent";
    if(slider.scrollLeft>"0" && slider.scrollLeft<"1150"){
        slider.scrollLeft="0";
    }    
   
   
}
function sectiontwo(){
    slider.scrollTo(1150,0)
    sliderbtn2.style.backgroundColor="black"
    sliderbtn1.style.backgroundColor="transparent"
    sliderbtn3.style.backgroundColor="transparent";
    if(slider.scrollLeft>"1150" && slider.scrollLeft<"2300"){
        slider.scrollLeft="1150";
    }
   
    
    
    
}
function sectionthree(){
    slider.scrollTo(2280,0)
    sliderbtn3.style.backgroundColor="black";
    sliderbtn2.style.backgroundColor="transparent"
    sliderbtn1.style.backgroundColor="transparent";
    if(slider.scrollLeft>"2300"){
        slider.scrollLeft="2300"; 
    }
    
   
}



var worker1=document.querySelector(".worker1");
var worker2=document.querySelector(".worker2")
var worker3=document.querySelector(".worker3")
var workers=document.querySelector(".workers")

var early=document.querySelector(".early-div")
var integrity=document.querySelector(".integrity-div")
var solution=document.querySelector(".solution-div")
var innovation=document.querySelector(".innovation-div")

var early1=document.querySelector(".early")
var integrity1=document.querySelector(".integrity")
var solution1=document.querySelector(".solution")
var innovation1=document.querySelector(".innovation")
function dropdownfirst(){
    document.querySelector(".early").classList.toggle('core',);
    early.classList.toggle("dropd");
    integrity.classList.remove("dropd");
    solution.classList.remove("dropd");
    innovation.classList.remove("dropd");
    integrity1.classList.remove("core");
    solution1.classList.remove("core");
    innovation1.classList.remove("core");
}
function dropdownsecond(){
    document.querySelector(".integrity").classList.toggle('core')
    integrity.classList.toggle("dropd");
    early.classList.remove("dropd", "core");
    solution.classList.remove("dropd", "core");
    innovation.classList.remove("dropd", "core");
    early1.classList.remove("core");
    solution1.classList.remove("core");
    innovation1.classList.remove("core");
    
}
function dropdownthird(){
    document.querySelector(".solution").classList.toggle('core')
    solution.classList.toggle("dropd");
    early.classList.remove("dropd", "core");
    integrity.classList.remove("dropd", "core");
    innovation.classList.remove("dropd", "core");
    integrity1.classList.remove("core");
    early1.classList.remove("core");
    innovation1.classList.remove("core");

}
function dropdownfourth(){
    document.querySelector(".innovation").classList.toggle('core')
    innovation.classList.toggle("dropd");
    early.classList.remove("dropd", "core");
    integrity.classList.remove("dropd", "core");
    solution.classList.remove("dropd", "core");
    integrity1.classList.remove("core");
    solution1.classList.remove("core");
    early1.classList.remove("core");
}

var scroller=document.querySelector(".scroller")

function scro(){
    scroller.scrollLeft+="189"

}
setInterval(scro,3000)


window.addEventListener("scroll",()=>{
    var scrolled=window.scrollY;
    var scrollval=1400;
   console.log(scrolled)

   if(scrolled>=scrollval){
    setTimeout(yearincrese,500);
    setInterval(peopleincrese,100)
    setTimeout(locationincrease,500);
   }
})

var yearincre=document.querySelector(".yearincre")
var year=0;
function yearincrese(){
    year++;
    if(year>5){
        year=5;
    }
   return yearincre.textContent=`${year}+`;
}
var peopleincre=document.querySelector(".peopleincre");
var people=0;
function peopleincrese(){
    people++;
    if(people>300){
        people=300;
    }
    return peopleincre.textContent=`${people}`;
}

var locationincre=document.querySelector(".locationincre");
var locationincr=0;
function locationincrease(){
    locationincr++;
    // if(locationincr.length)
    if(locationincr>10){
        locationincr=10;
    }
    return locationincre.textContent=`${locationincr}+`
}
const slideinter=setInterval(slides,3000)
var infosides1=document.querySelector(".slidebtn1");
var infosides2=document.querySelector(".slidebtn2");
var infosides3=document.querySelector(".slidebtn3");
var infoside1=document.querySelector(".slides")
function slides(){
    // infoside1.scrollLeft+=400;
    if(infoside1.scrollLeft=="0"){
        infoside1.scrollTo(400,0)
    }
    else if(infoside1.scrollLeft=="400"){
        infoside1.scrollTo(800,0)
    }
    else if(infoside1.scrollLeft=="800"){
        infoside1.scrollTo(1200,0)
    }
    clea()
    if(infoside1.scrollLeft=="0"){
    infosides1.style.backgroundColor="black";
    infosides2.style.backgroundColor="transparent";
    infosides3.style.backgroundColor="transparent";

    }
    if(infoside1.scrollLeft>="0" && infoside1.scrollLeft<"400"){
        infosides1.style.backgroundColor="transparent";
    infosides2.style.backgroundColor="black";
    infosides3.style.backgroundColor="transparent";
    }

    if(infoside1.scrollLeft>="400" && infoside1.scrollLeft<"800"){
        infosides1.style.backgroundColor="transparent";
    infosides2.style.backgroundColor="transparent";
    infosides3.style.backgroundColor="black";
    }

    
}
function clea(){
    if(infoside1.scrollLeft>="800"){
        infoside1.scrollLeft="800"
    }
    
}
function slidechg1(){
    infoside1.scrollTo(0,0)
    infosides1.style.backgroundColor="black";
    infosides2.style.backgroundColor="transparent";
    infosides3.style.backgroundColor="transparent";
}
function slidechg2(){
    infoside1.scrollTo(400,0)
    infosides1.style.backgroundColor="transparent";
    infosides2.style.backgroundColor="black";
    infosides3.style.backgroundColor="transparent";
}
function slidechg3(){
    infoside1.scrollTo(800,0)
    infosides1.style.backgroundColor="transparent";
    infosides2.style.backgroundColor="transparent";
    infosides3.style.backgroundColor="black";
}

var workers=document.querySelector(".workers")
var divs=document.querySelectorAll("div")
function nextbtn(){
    workers.scrollLeft+="1350";
   var scrolled=window.workers.scrollLeft;
   console.log(scrolled)
   
    
}
function previewbtn(){
    workers.scrollLeft-="1350";
}
document.querySelector(".sticky-arrow").addEventListener("click",function(){
    document.querySelector("html").scrollTo(0,0);
    document.querySelector("html").style.scrollBehavior="smooth";
})


window.addEventListener("scroll",()=>{
    var scrolll=window.scrollY;
    var v=600;
    console.log(scrolll+"ssss")
    if(scrolll>=v){
        document.querySelector(".sticky-arrow").style.display="block";
    }
    if(scrolll<v){
        document.querySelector(".sticky-arrow").style.display="none"; 
    }

})