
var botao = document.querySelector(".alo")

botao.addEventListener("mousemove", function(){
    botao.classList.add("show")
    botao.className = "show"
})

botao.addEventListener("click", function(){
    var texto = document.querySelector("#texto")
    texto.innerHTML = "Max puta"
})