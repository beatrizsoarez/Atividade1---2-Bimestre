let original = document.querySelector('textarea');
let contadorDeLetras = document.querySelector('span');
let efeitoDoTexto = document.querySelector('#efeito');
let textoModificado = document.querySelector("#modificado")



original.addEventListener('keyup', function digitou() {
    contadorDeLetras.innerHTML = original.value.length

    verificarEfeito()

    
})

efeitoDoTexto.addEventListener('change', function mudarEfeito() {
    verificarEfeito()
})

function verificarEfeito() {
    if(efeitoDoTexto.value == "lowercase") textoModificado.value = original.value.toLowerCase()
    else textoModificado.value = original.value.toUpperCase()
}