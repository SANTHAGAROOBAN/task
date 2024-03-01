var cover = document.querySelector(".cover")
var form = document.querySelector(".add_container_form")
var button = document.querySelector(".button_1")

button.addEventListener("click", function () {
    cover.style.display = "block"
    form.style.display = "block"
})

var container = document.querySelector(".container")
var input1 = document.getElementById("input_head")
var input2 = document.getElementById("input_head2")
var textarea = document.getElementById("textarea")
var add_button = document.querySelector(".button_add")
var cancel_button = document.querySelector(".button_cancel")
var button_del = document.querySelector(".button_del")
add_button.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "container_in")
    div.innerHTML = `<h2>${input1.value}</h2>
   <h3>${input2.value}</h3>
   <p>${textarea.value}</p>
   <button class="button_del" onclick="del(event)">delete</button>`
    

    if(input1.value=="" || input2.value=="" || textarea.value==""){
        alert("check again")
       cover.style.display="block"
       form.style.display="block"
       add_button=preventDefault 
        
    }
    else{
        cover.style.display="none"
       form.style.display="none"

    }
    container.append(div)
    input1.value = ""
    input2.value = ""
    textarea.value = ""
    // cover.style.display = "none"
    // form.style.display = "none"

})
cancel_button.addEventListener("click", function (event) {
    event.preventDefault()
    cover.style.display = "none"
    form.style.display = "none"
})

function del(event) {
    event.target.parentElement.remove()
}
