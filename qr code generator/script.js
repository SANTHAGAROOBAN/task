var image=document.getElementById("image");
var input=document.getElementById("input");
var btn=document.querySelector(".btn");

btn.onclick = ()=>{
    var qrlink ='https://api.qrserver.com/v1/create-qr-code/';
    image.src=qrlink + '? size=300x300&data=' +input.value;
}