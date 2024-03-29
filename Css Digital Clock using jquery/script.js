function display(){
    var date=new Date();
    var hour=date.getHours()
    if(hour>12){
        hour=hour-12;
    }
    var hour0=hour.toString()
    if(hour0.length==1){
        hour0="0"+hour
    }
    else if(hour0.length==2){
        hour0=hour0
    }

    var Hour=hour0[0];
    console.log(Hour)
  
    switch (Hour) {
        case "0":
            $(".top,.left_top,.right_top,.left_down,.right_down,.bottom1").css("visibility","visible");
            $(".middle1").css("visibility","hidden");
            break;
        case "1":
            $(".top,.left_top,.middle1,.left_down,.bottom1").css("visibility","hidden")
            $(".right_top,.right_down").css("visibility","visible")
            break;
              
        default:
            $(".top,.left_top,.right_top,.middle1,.left_down,.right_down,.bottom1").css("visibility","visible")
            break;
    }
    
    var Hour2=hour0[1];
    console.log(Hour2)
    switch (Hour2) {
        case "0":
            $(".top1,.ltop,.rtop,.ldown,.rdown,.bottom").css("visibility","visible");
            $(".middle").css("visibility","hidden");
            break;
        case "1":
            $(".top1,.ltop,.middle,.ldown,.bottom").css("visibility","hidden")
            $(".rtop,.rdown").css("visibility","visible")
            break;
        case "2":
            $(".top1,.rtop,.middle,.ldown,.bottom").css("visibility","visible");
            $(".ltop,.rdown").css("visibility","hidden");
            break;
        case "3":
            $(".top1,.rtop,.middle,.rdown,.bottom").css("visibility","visible");
            $(".ltop,.ldown").css("visibility","hidden")
            break;
        case "4":
            $(".ltop,.rtop,.middle,.rdown").css("visibility","visible");
            $(".top1,.ldown,.bottom").css("visibility","hidden")
            break;
        case "5":
            $(".top1,.ltop,.middle,.rdown,.bottom").css("visibility","visible");
            $(".rtop,.ldown").css("visibility","hidden");
            break;
        case "6":
            $(".top1,.ltop,.middle,.ldown,.rdown,.bottom").css("visibility","visible");
            $(".rtop").css("visibility","hidden");
            break;
        case "7":
            $(".top1,.rtop,.rdown").css("visibility","visible");
            $(".ltop,.middle,.ldown,.bottom").css("visibility","hidden");
            break;
        case "8":
            $(".top1,.ltop,.rtop,.middle,.ldown,.rdown,.bottom").css("visibility","visible");
            break; 
        case "9":
            $(".top1,.ltop,.rtop,.middle,.rdown,.bottom").css("visibility","visible");
            $(".ldown").css("visibility","hidden");
            break;       
        default:
            $(".top1,.ltop,.rtop,.middle,.ldown,.rdown,.bottom").css("visibility","visible");
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
    console.log(Minute0)

    switch (Minute0) {
        case "0":
            $(".topm1,.ltopm1,.rtopm1,.ldownm1,.rdownm1,.bottomm1").css("visibility","visible");
            $(".middlem1").css("visibility","hidden");
            break;
        case "1":
            $(".topm1,.ltopm1,.middlem1,.ldownm1,.bottomm1").css("visibility","hidden")
            $(".rtopm1,.rdownm1").css("visibility","visible")
            break;
        case "2":
            $(".topm1,.rtopm1,.middlem1,.ldownm1,.bottomm1").css("visibility","visible");
            $(".ltopm1,.rdownm1").css("visibility","hidden");
            break;
        case "3":
            $(".topm1,.rtopm1,.middlem1,.rdownm1,.bottomm1").css("visibility","visible");
            $(".ltopm1,.ldownm1").css("visibility","hidden")
            break;
        case "4":
            $(".ltopm1,.rtopm1,.middlem1,.rdownm1").css("visibility","visible");
            $(".topm1,.ldownm1,.bottomm1").css("visibility","hidden");
            break;
        case "5":
            $(".topm1,.ltopm1,.middlem1,.rdownm1,.bottomm1").css("visibility","visible");
            $(".rtopm1,.ldownm1").css("visibility","hidden");
            break;      
        default:
            $(".topm1,.ltopm1,.rtopm1,.middlem1,.ldownm1,.rdownm1,.bottomm1").css("visibility","visible");
            break;
    }

    var Minute1=Minute[1]
    console.log(Minute1)
    switch (Minute1) {
        case "0":
            $(".topm2,.ltopm2,.rtopm2,.ldownm2,.rdownm2,.bottomm2").css("visibility","visible");
            $(".middlem2").css("visibility","hidden");
            break;
        case "1":
            $(".topm2,.ltopm2,.middlem2,.ldownm2,.bottomm2").css("visibility","hidden")
            $(".rtopm2,.rdownm2").css("visibility","visible")
            break;
        case "2":
            $(".topm2,.rtopm2,.middlem2,.ldownm2,.bottomm2").css("visibility","visible");
            $(".ltopm2,.rdownm2").css("visibility","hidden");
            break;
        case "3":
            $(".topm2,.rtopm2,.middlem2,.rdownm2,.bottomm2").css("visibility","visible");
            $(".ltopm2,.ldownm2").css("visibility","hidden")
            break;
        case "4":
            $(".ltopm2,.rtopm2,.middlem2,.rdownm2").css("visibility","visible");
            $(".topm2,.ldownm2,.bottomm2").css("visibility","hidden");
            break;
        case "5":
            $(".topm2,.ltopm2,.middlem2,.rdownm2,.bottomm2").css("visibility","visible");
            $(".rtopm2,.ldownm2").css("visibility","hidden");
            break;
        case "6":
            $(".topm2,.ltopm2,.middlem2,.ldownm2,.rdownm2,.bottomm2").css("visibility","visible");
            $(".rtopm2").css("visibility","hidden");
            break;
        case "7":
            $(".topm2,.rtopm2,.rdownm2").css("visibility","visible");
            $(".ltopm2,.middlem2,.ldownm2,.bottomm2").css("visibility","hidden");
            break;
        case "8":
            $(".topm2,.ltopm2,.rtopm2,.middlem2,.ldownm2,.rdownm2,.bottomm2").css("visibility","visible");
            break; 
        case "9":
            $(".topm2,.ltopm2,.rtopm2,.middlem2,.rdownm2,.bottomm2").css("visibility","visible");
            $(".ldownm2").css("visibility","hidden");
            break;       
        default:
            $(".topm2,.ltopm2,.rtopm2,.middlem2,.ldownm2,.rdownm2,.bottomm2").css("visibility","visible");
            break;
    }
    
}
setInterval(minutes,1000)

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
    console.log(sec0)

    switch (sec0) {
        case "0":
            $(".ITOP,.ILEFTUP,.IRIGHTUP,.ILEFTDOWN,.IRIGHTDOWN,.IBOTTOM").css("visibility","visible");
            $(".IMIDDLE").css("visibility","hidden");
            break;
        case "1":
            $(".ITOP,.ILEFTUP,.IMIDDLE,.ILEFTDOWN,.IBOTTOM").css("visibility","hidden")
            $(".IRIGHTUP,.IRIGHTDOWN").css("visibility","visible")
            break;
        case "2":
            $(".ITOP,.IRIGHTUP,.IMIDDLE,.ILEFTDOWN,.IBOTTOM").css("visibility","visible");
            $(".ILEFTUP,.IRIGHTDOWN").css("visibility","hidden");
            break;
        case "3":
            $(".ITOP,.IRIGHTUP,.IMIDDLE,.IRIGHTDOWN,.IBOTTOM").css("visibility","visible");
            $(".ILEFTUP,.ILEFTDOWN").css("visibility","hidden")
            break;
        case "4":
            $(".ILEFTUP,.IRIGHTUP,.IMIDDLE,.IRIGHTDOWN").css("visibility","visible");
            $(".ITOP,.ILEFTDOWN,.IBOTTOM").css("visibility","hidden");
            break;
        case "5":
            $(".ITOP,.ILEFTUP,.IMIDDLE,.IRIGHTDOWN,.IBOTTOM").css("visibility","visible");
            $(".IRIGHTUP,.ILEFTDOWN").css("visibility","hidden");
            break;
        default:
            $(".ITOP,.ILEFTUP,.IRIGHTUP,.IMIDDLE,.ILEFTDOWN,.IRIGHTDOWN,.BOTTOM").css("visibility","visible");
            break;
    }

    var sec1=Sec[1]
    console.log(sec1)
    switch (sec1) {
        case "0":
            $(".TOPa,.LEFTUPa,.RIGHTUPa,.LEFTDOWNa,.RIGHTDOWNa,.BOTTOMa").css("visibility","visible");
            $(".MIDDLEa").css("visibility","hidden")
            break;
        case "1":
            $(".TOPa,.LEFTUPa,.MIDDLEa,.LEFTDOWNa,.BOTTOMa").css("visibility","hidden")
            $(".RIGHTUPa,.RIGHTDOWNa").css("visibility","visible")
            break;
        case "2":
            $(".TOPa,.RIGHTUPa,.MIDDLEa,.LEFTDOWNa,.BOTTOMa").css("visibility","visible");
            $(".LEFTUPa,.RIGHTDOWNa").css("visibility","hidden")
            break;
        case "3":
            $(".TOPa,.RIGHTUPa,.MIDDLEa,.RIGHTDOWNa,.BOTTOMa").css("visibility","visible");
            $(".LEFTUPa,.LEFTDOWNa").css("visibility","hidden")
            break;
        case "4":
            $(".LEFTUPa,.RIGHTUPa,.MIDDLEa,.RIGHTDOWNa").css("visibility","visible");
            $(".TOPa,.LEFTDOWNa,.BOTTOMa").css("visibility","hidden")
            break;
        case "5":
            $(".TOPa,.LEFTUPa,.MIDDLEa,.RIGHTDOWNa,.BOTTOMa").css("visibility","visible");
            $(".RIGHTUPa,.LEFTDOWNa").css("visibility","hidden")
            break;
        case "6":
            $(".TOPa,.LEFTUPa,.MIDDLEa,.LEFTDOWNa,.RIGHTDOWNa,.BOTTOMa").css("visibility","visible");
            $(".RIGHTUPa").css("visibility","hidden")
            break;
        case "7":
            $(".TOPa,.RIGHTUPa,.RIGHTDOWNa").css("visibility","visible")
            $(".LEFTUPa,.MIDDLEa,.LEFTDOWNa,.BOTTOMa").css("visibility","hidden")
            break;
        case "8":
            $(".TOPa,.LEFTUPa,.RIGHTUPa,.MIDDLEa,.LEFTDOWNa,.RIGHTDOWNa,.BOTTOMa").css("visibility","visible");
            break; 
        case "9":
            $(".TOPa,.LEFTUPa,.RIGHTUPa,.MIDDLEa,.RIGHTDOWNa,.BOTTOMa").css("visibility","visible");
            $(".LEFTDOWNa").css("visibility","hidden");
            break;     
        default:
            $(".TOPa,.LEFTUPa,.RIGHTUPa,.MIDDLEa,.LEFTDOWNa,.RIGHTDOWNa,.BOTTOMa").css("visbility","visible");
            break;
    }
}
setInterval(seconds,1000)