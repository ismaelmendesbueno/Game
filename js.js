
var botao = document.querySelector(".alo")

botao.addEventListener("mousemove", function(){
    botao.classList.add("show")
    botao.className = "show"
})

botao.addEventListener("click", function(){
    var texto = document.querySelector("#texto")
    var input = document.querySelector("#txto")
    
    var s = (input.value)

    texto.innerHTML = `${s} Puta`
    

    
    
    

})