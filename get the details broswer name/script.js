var browser=navigator.userAgent;
var screenwidth=window.innerWidth;
var screenheight=window.innerHeight;
console.log(browser)


if(browser.match("Chrome/") && !(browser.match("Edg/"))){
   var browsername="Chrome"; 
   var browserversion="125.0.0.0";
   console.log(screenwidth);
    console.log(screenheight);
}
else if(browser.match("Firefox/")){
    console.log("hello firefox user");
    var browsername="Firefox";
    var browserversion="126.0";
    console.log(screenwidth);
    console.log(screenheight);
}
else if(browser.match("Edg/") && browser.match("Chrome/")){
    console.log("hello edge user");
    var browsername="Edge";
    var browserversion="125.0.0.0";
    console.log(screenwidth);
    console.log(screenheight);
}
else if(browser.match("Safari/")){
    console.log("hello safari user")
    var browsername="Safari";
    var browserversion="537.36";
    console.log(screenwidth);
    console.log(screenheight);
}

console.log(browsername);
var container=document.querySelector(".container");
var param1=["Browsername","browserversion","screenwidth","screenheight"];
var param2=[browsername,browserversion,screenwidth,screenheight];

var table=document.createElement("table");
var tr,td,td2;
for(var i=0;i<4;i++){
    tr=document.createElement("tr");
    table.append(tr);
    td=document.createElement("td");
    tr.append(td);
    td2=document.createElement("td");
    tr.append(td2)
    td.textContent=param1[i];
    td2.textContent=param2[i];
    container.append(table);
}




































