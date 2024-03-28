const Top=document.querySelector(".top")
const left_up=document.querySelector(".left_top")
const right_up=document.querySelector(".right_top")
const middle=document.querySelector(".middle1")
const left_down=document.querySelector(".left_down")
const right_down=document.querySelector(".right_down")
const bottom=document.querySelector(".bottom1")

const Top1=document.querySelector(".top1")
const left_up1=document.querySelector(".ltop")
const right_up1=document.querySelector(".rtop")
const middle1=document.querySelector(".middle")
const left_down1=document.querySelector(".ldown")
const right_down1=document.querySelector(".rdown")
const bottom1=document.querySelector(".bottom")

const Topm1=document.querySelector(".topm1")
const left_upm1=document.querySelector(".ltopm1")
const right_upm1=document.querySelector(".rtopm1")
const middlem1=document.querySelector(".middlem1")
const left_downm1=document.querySelector(".ldownm1")
const right_downm1=document.querySelector(".rdownm1")
const bottomm1=document.querySelector(".bottomm1")

const Topm2=document.querySelector(".topm2")
const left_upm2=document.querySelector(".ltopm2")
const right_upm2=document.querySelector(".rtopm2")
const middlem2=document.querySelector(".middlem2")
const left_downm2=document.querySelector(".ldownm2")
const right_downm2=document.querySelector(".rdownm2")
const bottomm2=document.querySelector(".bottomm2")

function display(){
    var date=new Date();
    var hour=date.getHours()
    if(hour>12){
        hour=hour-12;
    }
    var hour0=hour.toString()
    if(hour0.length==1){
        hour0="0"+hour
        console.log("if")
    }
    else if(hour0.length==2){
        hour0=hour0
    }

    var Hour=hour0[0];
    console.log(Hour)
    // Hourindex0=parseInt(Hour)
    // console.log("HourIndex"+Hourindex0)
  
    switch (Hour) {
        case "0":
            Top.style.visibility="visible"
            left_up.style.visibility="visible"
            right_up.style.visibility="visible"
            middle.style.visibility="hidden"
            left_down.style.visibility="visible"
            right_down.style.visibility="visible"
            bottom.style.visibility="visible"
            break;
        case "1":
            Top.style.visibility="hidden"
            left_up.style.visibility="hidden"
            right_up.style.visibility="visible"
            middle.style.visibility="hidden"
            left_down.style.visibility="hidden"
            right_down.style.visibility="visible"
            bottom.style.visibility="hidden" 
            break;
              
        default:
            Top.style.visibility="visible"
            left_up.style.visibility="visible"
            right_up.style.visibility="visible"
            middle.style.visibility="visible"
            left_down.style.visibility="visible"
            right_down.style.visibility="visible"
            bottom.style.visibility="visible"
            break;
    }
    
    var Hour2=hour0[1];
    console.log(Hour2)
    switch (Hour2) {
        case "0":
            Top1.style.visibility="visible"
            left_up1.style.visibility="visible"
            right_up1.style.visibility="visible"
            middle1.style.visibility="hidden"
            left_down1.style.visibility="visible"
            right_down1.style.visibility="visible"
            bottom1.style.visibility="visible"
            break;
        case "1":
            Top1.style.visibility="hidden"
            left_up1.style.visibility="hidden"
            right_up1.style.visibility="visible"
            middle1.style.visibility="hidden"
            left_down1.style.visibility="hidden"
            right_down1.style.visibility="visible"
            bottom1.style.visibility="hidden"
            break;
        case "2":
            Top1.style.visibility="visible"
            left_up1.style.visibility="hidden"
            right_up1.style.visibility="visible"
            middle1.style.visibility="visible"
            left_down1.style.visibility="visible"
            right_down1.style.visibility="hidden"
            bottom1.style.visibility="visible"
            break;
        case "3":
            Top1.style.visibility="visible"
            left_up1.style.visibility="hidden"
            right_up1.style.visibility="visible"
            middle1.style.visibility="visible"
            left_down1.style.visibility="hidden"
            right_down1.style.visibility="visible"
            bottom1.style.visibility="visible"
            break;
        case "4":
            Top1.style.visibility="hidden"
            left_up1.style.visibility="visible"
            right_up1.style.visibility="visible"
            middle1.style.visibility="visible"
            left_down1.style.visibility="hidden"
            right_down1.style.visibility="visible"
            bottom1.style.visibility="hidden"
            break;
        case "5":
            Top1.style.visibility="visible"
            left_up1.style.visibility="visible"
            right_up1.style.visibility="hidden"
            middle1.style.visibility="visible"
            left_down1.style.visibility="hidden"
            right_down1.style.visibility="visible"
            bottom1.style.visibility="visible"
            break;
        case "6":
            Top1.style.visibility="visible"
            left_up1.style.visibility="visible"
            right_up1.style.visibility="hidden"
            middle1.style.visibility="visible"
            left_down1.style.visibility="visible"
            right_down1.style.visibility="visible"
            bottom1.style.visibility="visible"
            break;
        case "7":
            Top1.style.visibility="visible"
            left_up1.style.visibility="hidden"
            right_up1.style.visibility="visible"
            middle1.style.visibility="hidden"
            left_down1.style.visibility="hidden"
            right_down1.style.visibility="visible"
            bottom1.style.visibility="hidden"
            break;
        case "8":
            Top1.style.visibility="visible"
            left_up1.style.visibility="visible"
            right_up1.style.visibility="visible"
            middle1.style.visibility="visible"
            left_down1.style.visibility="visible"
            right_down1.style.visibility="visible"
            bottom1.style.visibility="visible"
            break; 
        case "9":
            Top1.style.visibility="visible"
            left_up1.style.visibility="visible"
            right_up1.style.visibility="visible"
            middle1.style.visibility="visible"
            left_down1.style.visibility="hidden"
            right_down1.style.visibility="visible"
            bottom1.style.visibility="visible"
            break;       
        default:
            Top1.style.visibility="visible"
            left_up1.style.visibility="visible"
            right_up1.style.visibility="visible"
            middle1.style.visibility="visible"
            left_down1.style.visibility="visible"
            right_down1.style.visibility="visible"
            bottom1.style.visibility="visible"
            break;
    }

   
}

setInterval(display,1000)
function minutes(){
    var date=new Date()
    var minute=date.getMinutes();
    var Minute=minute.toString();
    if(Minute.length==1){
        Minute="0"+Minute;
    }
    else{
        Minute=Minute;
    }
    var Minute0=Minute[0];

    switch (Minute0) {
        case "0":
            Topm1.style.visibility="visible"
            left_upm1.style.visibility="visible"
            right_upm1.style.visibility="visible"
            middlem1.style.visibility="hidden"
            left_downm1.style.visibility="visible"
            right_downm1.style.visibility="visible"
            bottomm1.style.visibility="visible"
            break;
        case "1":
            Topm1.style.visibility="hidden"
            left_upm1.style.visibility="hidden"
            right_upm1.style.visibility="visible"
            middlem1.style.visibility="hidden"
            left_downm1.style.visibility="hidden"
            right_downm1.style.visibility="visible"
            bottomm1.style.visibility="hidden"
            break;
        case "2":
            Topm1.style.visibility="visible"
            left_upm1.style.visibility="hidden"
            right_upm1.style.visibility="visible"
            middlem1.style.visibility="visible"
            left_downm1.style.visibility="visible"
            right_downm1.style.visibility="hidden"
            bottomm1.style.visibility="visible"
            break;
        case "3":
            Topm1.style.visibility="visible"
            left_upm1.style.visibility="hidden"
            right_upm1.style.visibility="visible"
            middlem1.style.visibility="visible"
            left_downm1.style.visibility="hidden"
            right_downm1.style.visibility="visible"
            bottomm1.style.visibility="visible"
            break;
        case "4":
            Topm1.style.visibility="hidden"
            left_upm1.style.visibility="visible"
            right_upm1.style.visibility="visible"
            middlem1.style.visibility="visible"
            left_downm1.style.visibility="hidden"
            right_downm1.style.visibility="visible"
            bottomm1.style.visibility="hidden"
            break;
        case "5":
            Topm1.style.visibility="visible"
            left_upm1.style.visibility="visible"
            right_upm1.style.visibility="hidden"
            middlem1.style.visibility="visible"
            left_downm1.style.visibility="hidden"
            right_downm1.style.visibility="visible"
            bottomm1.style.visibility="visible"
            break;      
        default:
            Topm1.style.visibility="visible"
            left_upm1.style.visibility="visible"
            right_upm1.style.visibility="visible"
            middlem1.style.visibility="visible"
            left_downm1.style.visibility="visible"
            right_downm1.style.visibility="visible"
            bottomm1.style.visibility="visible"
            break;
    }

    var Minute1=Minute[1]
    switch (Minute1) {
        case "0":
            Topm2.style.visibility="visible"
            left_upm2.style.visibility="visible"
            right_upm2.style.visibility="visible"
            middlem2.style.visibility="hidden"
            left_downm2.style.visibility="visible"
            right_downm2.style.visibility="visible"
            bottomm2.style.visibility="visible"
            break;
        case "1":
            Topm2.style.visibility="hidden"
            left_upm2.style.visibility="hidden"
            right_upm2.style.visibility="visible"
            middlem2.style.visibility="hidden"
            left_downm2.style.visibility="hidden"
            right_downm2.style.visibility="visible"
            bottomm2.style.visibility="hidden"
            break;
        case "2":
            Topm2.style.visibility="visible"
            left_upm2.style.visibility="hidden"
            right_upm2.style.visibility="visible"
            middlem2.style.visibility="visible"
            left_downm2.style.visibility="visible"
            right_downm2.style.visibility="hidden"
            bottomm2.style.visibility="visible"
            break;
        case "3":
            Topm2.style.visibility="visible"
            left_upm2.style.visibility="hidden"
            right_upm2.style.visibility="visible"
            middlem2.style.visibility="visible"
            left_downm2.style.visibility="hidden"
            right_downm2.style.visibility="visible"
            bottomm2.style.visibility="visible"
            break;
        case "4":
            Topm2.style.visibility="hidden"
            left_upm2.style.visibility="visible"
            right_upm2.style.visibility="visible"
            middlem2.style.visibility="visible"
            left_downm2.style.visibility="hidden"
            right_downm2.style.visibility="visible"
            bottomm2.style.visibility="hidden"
            break;
        case "5":
            Topm2.style.visibility="visible"
            left_upm2.style.visibility="visible"
            right_upm2.style.visibility="hidden"
            middlem2.style.visibility="visible"
            left_downm2.style.visibility="hidden"
            right_downm2.style.visibility="visible"
            bottomm2.style.visibility="visible"
            break;
        case "6":
            Topm2.style.visibility="visible"
            left_upm2.style.visibility="visible"
            right_upm2.style.visibility="hidden"
            middlem2.style.visibility="visible"
            left_downm2.style.visibility="visible"
            right_downm2.style.visibility="visible"
            bottomm2.style.visibility="visible"
            break;
        case "7":
            Topm2.style.visibility="visible"
            left_upm2.style.visibility="hidden"
            right_upm2.style.visibility="visible"
            middlem2.style.visibility="hidden"
            left_downm2.style.visibility="hidden"
            right_downm2.style.visibility="visible"
            bottomm2.style.visibility="hidden"
            break;
        case "8":
            Topm2.style.visibility="visible"
            left_upm2.style.visibility="visible"
            right_upm2.style.visibility="visible"
            middlem2.style.visibility="visible"
            left_downm2.style.visibility="visible"
            right_downm2.style.visibility="visible"
            bottomm2.style.visibility="visible"
            break; 
        case "9":
            Topm2.style.visibility="visible"
            left_upm2.style.visibility="visible"
            right_upm2.style.visibility="visible"
            middlem2.style.visibility="visible"
            left_downm2.style.visibility="hidden"
            right_downm2.style.visibility="visible"
            bottomm2.style.visibility="visible"
            break;       
        default:
            Topm2.style.visibility="visible"
            left_upm2.style.visibility="visible"
            right_upm2.style.visibility="visible"
            middlem2.style.visibility="visible"
            left_downm2.style.visibility="visible"
            right_downm2.style.visibility="visible"
            bottomm2.style.visibility="visible"
            break;
    }
    
}
setInterval(minutes,1000)

const Topsec=document.querySelector(".sectop")
const left_upsec=document.querySelector(".seclt")
const right_upsec=document.querySelector(".secrt")
const middlesec=document.querySelector(".secmiddle")
const left_downsec=document.querySelector(".secld")
const right_downsec=document.querySelector(".secrd")
const bottomsec=document.querySelector(".secbottom")

const Topsec1=document.querySelector(".sectop1")
const left_upsec1=document.querySelector(".seclt1")
const right_upsec1=document.querySelector(".secrt1")
const middlesec1=document.querySelector(".secmiddle1")
const left_downsec1=document.querySelector(".secld1")
const right_downsec1=document.querySelector(".secrd1")
const bottomsec1=document.querySelector(".secbottom1")

function seconds(){
    var date=new Date();
    var sec=date.getSeconds();

    var Sec=sec.toString();
    if(Sec.length==1){
        Sec="0"+Sec;
    }
    else{
        Sec=Sec;
    }
    var sec0=Sec[0];

    switch (sec0) {
        case "0":
            Topsec.style.visibility="visible"
            left_upsec.style.visibility="visible"
            right_upsec.style.visibility="visible"
            middlesec.style.visibility="hidden"
            left_downsec.style.visibility="visible"
            right_downsec.style.visibility="visible"
            bottomsec.style.visibility="visible"
            break;
        case "1":
            Topsec.style.visibility="hidden"
            left_upsec.style.visibility="hidden"
            right_upsec.style.visibility="visible"
            middlesec.style.visibility="hidden"
            left_downsec.style.visibility="hidden"
            right_downsec.style.visibility="visible"
            bottomsec.style.visibility="hidden"
            break;
        case "2":
            Topsec.style.visibility="visible"
            left_upsec.style.visibility="hidden"
            right_upsec.style.visibility="visible"
            middlesec.style.visibility="visible"
            left_downsec.style.visibility="visible"
            right_downsec.style.visibility="hidden"
            bottomsec.style.visibility="visible"
            break;
        case "3":
            Topsec.style.visibility="visible"
            left_upsec.style.visibility="hidden"
            right_upsec.style.visibility="visible"
            middlesec.style.visibility="visible"
            left_downsec.style.visibility="hidden"
            right_downsec.style.visibility="visible"
            bottomsec.style.visibility="visible"
            break;
        case "4":
            Topsec.style.visibility="hidden"
            left_upsec.style.visibility="visible"
            right_upsec.style.visibility="visible"
            middlesec.style.visibility="visible"
            left_downsec.style.visibility="hidden"
            right_downsec.style.visibility="visible"
            bottomsec.style.visibility="hidden"
            break;
        case "5":
            Topsec.style.visibility="visible"
            left_upsec.style.visibility="visible"
            right_upsec.style.visibility="hidden"
            middlesec.style.visibility="visible"
            left_downsec.style.visibility="hidden"
            right_downsec.style.visibility="visible"
            bottomsec.style.visibility="visible"
            break;
        case "6":
            Topsec.style.visibility="visible"
            left_upsec.style.visibility="visible"
            right_upsec.style.visibility="hidden"
            middlesec.style.visibility="visible"
            left_downsec.style.visibility="visible"
            right_downsec.style.visibility="visible"
            bottomsec.style.visibility="visible"
            break;      
        default:
            Topsec.style.visibility="visible"
            left_upsec.style.visibility="visible"
            right_upsec.style.visibility="visible"
            middlesec.style.visibility="visible"
            left_downsec.style.visibility="visible"
            right_downsec.style.visibility="visible"
            bottomsec.style.visibility="visible"
            break;
    }

    var sec1=Sec[1]
    switch (sec1) {
        case "0":
            Topsec1.style.visibility="visible"
            left_upsec1.style.visibility="visible"
            right_upsec1.style.visibility="visible"
            middlesec1.style.visibility="hidden"
            left_downsec1.style.visibility="visible"
            right_downsec1.style.visibility="visible"
            bottomsec1.style.visibility="visible"
            break;
        case "1":
            Topsec1.style.visibility="hidden"
            left_upsec1.style.visibility="hidden"
            right_upsec1.style.visibility="visible"
            middlesec1.style.visibility="hidden"
            left_downsec1.style.visibility="hidden"
            right_downsec1.style.visibility="visible"
            bottomsec1.style.visibility="hidden"
            break;
        case "2":
            Topsec1.style.visibility="visible"
            left_upsec1.style.visibility="hidden"
            right_upsec1.style.visibility="visible"
            middlesec1.style.visibility="visible"
            left_downsec1.style.visibility="visible"
            right_downsec1.style.visibility="hidden"
            bottomsec1.style.visibility="visible"
            break;
        case "3":
            Topsec1.style.visibility="visible"
            left_upsec1.style.visibility="hidden"
            right_upsec1.style.visibility="visible"
            middlesec1.style.visibility="visible"
            left_downsec1.style.visibility="hidden"
            right_downsec1.style.visibility="visible"
            bottomsec1.style.visibility="visible"
            break;
        case "4":
            Topsec1.style.visibility="hidden"
            left_upsec1.style.visibility="visible"
            right_upsec1.style.visibility="visible"
            middlesec1.style.visibility="visible"
            left_downsec1.style.visibility="hidden"
            right_downsec1.style.visibility="visible"
            bottomsec1.style.visibility="hidden"
            break;
        case "5":
            Topsec1.style.visibility="visible"
            left_upsec1.style.visibility="visible"
            right_upsec1.style.visibility="hidden"
            middlesec1.style.visibility="visible"
            left_downsec1.style.visibility="hidden"
            right_downsec1.style.visibility="visible"
            bottomsec1.style.visibility="visible"
            break;
        case "6":
            Topsec1.style.visibility="visible"
            left_upsec1.style.visibility="visible"
            right_upsec1.style.visibility="hidden"
            middlesec1.style.visibility="visible"
            left_downsec1.style.visibility="visible"
            right_downsec1.style.visibility="visible"
            bottomsec1.style.visibility="visible"
            break;
        case "7":
            Topsec1.style.visibility="visible"
            left_upsec1.style.visibility="hidden"
            right_upsec1.style.visibility="visible"
            middlesec1.style.visibility="hidden"
            left_downsec1.style.visibility="hidden"
            right_downsec1.style.visibility="visible"
            bottomsec1.style.visibility="hidden"
            break;
        case "8":
            Topsec1.style.visibility="visible"
            left_upsec1.style.visibility="visible"
            right_upsec1.style.visibility="visible"
            middlesec1.style.visibility="visible"
            left_downsec1.style.visibility="visible"
            right_downsec1.style.visibility="visible"
            bottomsec1.style.visibility="visible"
            break; 
        case "9":
            Topsec1.style.visibility="visible"
            left_upsec1.style.visibility="visible"
            right_upsec1.style.visibility="visible"
            middlesec1.style.visibility="visible"
            left_downsec1.style.visibility="hidden"
            right_downsec1.style.visibility="visible"
            bottomsec1.style.visibility="visible"
            break;       
        default:
            Topsec1.style.visibility="visible"
            left_upsec1.style.visibility="visible"
            right_upsec1.style.visibility="visible"
            middlesec1.style.visibility="visible"
            left_downsec1.style.visibility="visible"
            right_downsec1.style.visibility="visible"
            bottomsec1.style.visibility="visible"
            break;
    }

}
setInterval(seconds,1000)