var details=document.querySelectorAll(".details");
var img=document.querySelectorAll("img");

var brandname=["Apple","Coco-Colo","Facebook","Google","Instagram","Nike","Samsung","Starbucks","Tesla","Whatsapp"];
var CEO=["Tim Cook","James Quincey","Mark Zuckerberg","Sundar Pichai","Kevin Systrom","John Donahoe","Han Jong-hee","Laxman Narasimhan","Elon Musk","Jan Koum"];
var startedyear=[1976,1892,2004,1998,2010,1964,1938,1971,2003,2009]

console.log(brandname.length);
console.log(CEO.length);
console.log(startedyear.length);

for(let i=0;i<10;i++){
    console.log(brandname[i]);
    console.log(CEO[i]);
    console.log(startedyear[i]);
    console.log("  ");

    var div=document.createElement("h1")
    details[i].append(div);
    div.innerHTML=brandname[i];
    var CEOname=document.createElement("h3");
    details[i].append(CEOname);
    CEOname.innerHTML=CEO[i]
    var styear=document.createElement('h3');
    details[i].append(styear);
    styear.innerHTML=startedyear[i];
   
    img[i].addEventListener("click",()=>{
        if(click=true){
            details[i].style.visibility="visible";
        }
       return click=false;
    })
    details[i].addEventListener("click",()=>{
        details[i].style.visibility="hidden";
    })
    if(details[i].style.visibility=="visible"){
        !img[i].removeEventListener("click",displaydetials);
    }
    
}