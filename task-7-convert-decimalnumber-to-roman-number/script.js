var number=document.getElementById("number");
var Cnumber=document.querySelector(".convert-number-decimal");
var resultone=document.getElementById("resultone");

var ones=[" ","I","II","III","IV","V","VI","VII","VIII","IX"];
var tens=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
var hundreds=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
// var thousands=["","M","MM","MMM","MMMM","MMMMM","MMMMMM","MMMMMMM","MMMMMMMM","MMMMMMMMM"];
// var tenth=["","X̅"];

var onesnum=[0,1,2,3,4,5,6,7,8,9];
var tensnum=[0,10,20,30,40,50,60,70,80,90];
var hundredsnum=[0,100,200,300,400,500,600,700,800,900];



Cnumber.addEventListener("click",()=>{
    numbertoroman();
});

function numbertoroman(h){
    var numberval=number.value;
    resultone.value="";
    h=numberval;

   
    // if(h.length>4){
    //     var th2=h[(numberval.length)-5];
    //     console.log("thouseds"+th2);
    //     console.log("ththth"+tenth[th2]);
    //     resultone.textContent=tenth[th2];

    //     // var a=[]

    //     // for(var i=0;i<h.length-4;i++){
    //     //     console.log(h[i]);
    //     //     a.push(h[i]);
    //     //     var z=a[0]+a[1]+a[2]+a[3]+a[3]+a[4];
    //     // }
    //     // console.log(a)
    //     // console.log("zee"+z);
    // }
    if(h.length>3){
        s=h/1000;
        var v=Math.round(s);
        console.log("s value"+v);
        var g=typeof(v);
        console.log(g);
        var m=Math.pow("M",v);
        console.log("m value:"+m)
        console.log("greater than four");
        for(var i=0;i<v;i++){
            resultone.value+="M";
        }
    }
   
    // if(h.length>3){
    //     var th=h[(numberval.length)-4];
    //     console.log("thouseds"+th);
    //     console.log("ththth"+thousands[th]);
    //     resultone.value+=thousands[th];
    //     // if(th>5){
    //     //     tsh=th/1000;
    //     //     console.log("thousand greater"+th*tsh);
    //     // }
        
    //     // th=h/1000;
    //     // console.log("ths"+th);
    // }
    if(h.length>2){
        var hu=h[(numberval.length)-3];
        console.log("hundreds"+hu);
        console.log("hhhh"+hundreds[hu])
        resultone.value+=hundreds[hu];
    }
    if(h>ones.length){
        // h[h.length-2]=tens[h];
        var z=h[(numberval.length)-2];
        console.log(h[(numberval.length)-2]);
        tens[z];
        console.log("tens:"+tens[z]);
        resultone.value+=tens[z];
    }

    if(h!==""){
        var o=h[(numberval.length)-1]
        console.log(ones[o])
        resultone.value+=ones[o];
    }
    
}

var decimal=document.querySelector("#decimal");
var Cdecimal=document.querySelector(".convert-decimal-number");
var resulttwo=document.querySelector('#resulttwo');

Cdecimal.addEventListener("click",()=>{
    romantodecimal();
});

function romantodecimal(){

    var decimalval=decimal.value;
    resulttwo.value=" ";
    hs=decimalval;
    // var re=/[1-9]/g;
    // var reg=/(X{1,3}(IX|IV|V?I{0,3})|X{0,3}(IX|I?V|V?I{1,3}))/g;
    // if(hs.match(re)){
    //     alert("numbers are not allowed in this field")
    // }
    var c={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };
    var finalval=0;

    for(let i=0;i<hs.length;i++){
        var first=hs[i];
        var second=hs[i+1];
        console.log("first"+first);
        console.log("second"+second);

        if(c[first]<c[second]){
            console.log("finalval1",finalval);
            finalval-=c[first];
        }
        else{
            console.log("finalval2",finalval);
            finalval+=c[first];
        }
    }
    console.log(finalval);
    resulttwo.value=finalval;


}