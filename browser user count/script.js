var Chrome=0;
var Firefox=0;
var Safari=0;
var Edg=0;
var browser=navigator.userAgent;

var Firefox_count=document.getElementById("Firefox");
var Edg_count=document.getElementById("Edg");
var Safari_count=document.getElementById("Safari");


if(browser.match("Chrome/") && !browser.match("Edg/")){
    if(localStorage.browsercountChrome){
        localStorage.browsercountChrome=Number(localStorage.browsercountChrome)+1;
    }
    else {
        localStorage.browsercountChrome=0;
    }
    console.log("Chrome"+localStorage.browsercountChrome);
    document.getElementById("chrome").textContent="Chrome:"+localStorage.browsercountChrome;
    document.getElementById("chrome").style.display="block";

}
else if(browser.match("Firefox/")){
    if(localStorage.browsercountFirefox){
        localStorage.browsercountFirefox=Number(localStorage.browsercountFirefox)+1;

    }
    else {
        localStorage.browsercountFirefox=0;
    }
    console.log("Firefox"+localStorage.browsercountFirefox);
    Firefox_count.textContent="Firefox:"+localStorage.browsercountFirefox;
    Firefox_count.style.display="block";

}
else if(browser.match('Edg/')){
    if(localStorage.browsercountEdg){
        localStorage.browsercountEdg=Number(localStorage.browsercountEdg)+1;
    }
    else {
        localStorage.browsercountEdg=0;
    }
    console.log("Edg"+localStorage.browsercountEdg);
    Edg_count.textContent="Edg:"+localStorage.browsercountEdg;
    Edg_count.style.display="block";


}
else if(browser.match('Safari/')){
    if(localStorage.browsercountSafari){
        localStorage.browsercountSafari=Number(localStorage.browsercountSafari)+1;
    }
    else {
        localStorage.browsercountSafari=0;
    }
    console.log("Safari"+localStorage.browsercountSafari);
    Safari_count.textContent="Safari:"+localStorage.browsercountSafari;
    Safari_count.style.display="block";

}






































































// var browser=navigator.userAgent;
// var Chrome=0;
// var Firefox=0; 
// var edge=0;
// var Safari=0;
// // window.onload=function(){
// //     browserincreament();

// // }

// // function browserincreament(){
//     if(browser.match("Chrome/") && !(browser.match("Edg/"))){
//         localStorage.setItem("chrome", Chrome++)
//         // localStorage.chrome=Number(localStorage.chrome)+1;
//     }
//     else if(browser.match("Firefox/")){
//         localStorage.setItem("Firefox", Firefox++)

//         // localStorage.Firefox=Number(localStorage.Firefox)+1; 
//     }
//     else if(browser.match("Edg/") && browser.match("Chrome")){
//         localStorage.setItem("Edge", edge++)

//         // localStorage.edge=Number(localStorage.edge)+1;
//     }
//     else if(browser.match("Safari/")){
//         localStorage.setItem("Safari", Safari++)

//         // localStorage.Safari=Number(localStorage.safari)+1;
//     }
//     console.log("chrome"+ Chrome);
//     console.log("Firefox"+Firefox); 
//     console.log("edge"+edge);
//     console.log("Safari"+Safari);
//     console.log(localStorage.chrome);
// // }