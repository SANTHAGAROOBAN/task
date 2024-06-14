var imgslider=document.querySelector("#image-slider");

var count=1;


document.addEventListener("keyup",(e)=>{
   console.log(e.key);
    
   if(e.key==="ArrowUp"){
        count++
        if(count>10){
            count=1;
        }
        console.log(count)
        imgslider.src=`./source/${count}.svg`;
   }
   else if(e.key==="PageUp"){
    count++
        if(count>10){
            count=1;
        }
        console.log(count)
        imgslider.src=`./source/${count}.svg`;
   }

   else if(e.key==="ArrowDown"){
    count--
    if(count<1){
        count=10;
    }
    console.log(count)
    imgslider.src=`./source/${count}.svg`;

   }
   else if(e.key==="PageDown"){
    count--;
    if(count<1){
        count=10;
    }
    console.log(count)
    imgslider.src=`./source/${count}.svg`;
   }
   
})
document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    count--
        if(count<1){
            count=10;
        }
        console.log(count)
        imgslider.src=`./source/${count}.svg`;
})
document.onclick = function(){
    count++
        if(count>10){
            count=1;
        }
        console.log(count)
        imgslider.src=`./source/${count}.svg`;
}
