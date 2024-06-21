var btn1=document.querySelector("button");

btn1.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("button is working")
    getingvalue();
});


function getingvalue(){
    var table=document.createElement("table");
    document.getElementById("center").append(table)
    var row=document.getElementById("inputrow").value;
    var column=document.getElementById("inputcolumn").value;
    // var table=document.getElementById("table");
    console.log(row);
    console.log(column);
    for(let i=0;i<row;i++){
        var crow=document.createElement("tr");
        table.appendChild(crow);
        for(let j=0;j<column;j++){
            var Ccolumn=document.createElement("td");
            Ccolumn.innerHTML='<img class="img" src="./pngtree-house-with-no-background-png-image_9197435.png" alt="">';
            crow.append(Ccolumn);
        }
    }
}