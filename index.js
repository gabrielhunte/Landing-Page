var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var SetaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    leonardo.style = "display:none"
    samantha.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    samantha.style = "display:none"
    leonardo.style = "display:flex"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}