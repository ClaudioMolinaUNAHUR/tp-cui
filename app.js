const gracias = document.querySelector('#gracias')
const respuesta = document.querySelector('#respuesta')
const animales = document.querySelector('#animales')

respuesta.addEventListener('click',escribirMensaje)

function escribirMensaje(evento){
    evento.preventDefault()
    const tipo = comprobarChequeado('tipo-animal').toUpperCase()
    const lugar = comprobarChequeado('interior-exterior')
    const person = comprobarChequeado('personalidad')
    const div = document.createElement('div')
    div.innerHTML = `
        <p class="text-center font-bold bg-gray-600 text-white w-full mt-5 p-5 rounded">
        Tenes un ${tipo}, que duerme en ${lugar} y es muy ${person}`
    gracias.appendChild(div)
    setTimeout(() => {
        div.remove()
    }, 3000);
}

function comprobarChequeado(nombre){
    let resultado
    const chequeado = animales.querySelectorAll(`input[name=${nombre}]`)
    chequeado.forEach((elemento)=>{
        if(elemento.checked){
            console.log(elemento.getAttribute('id'))
            resultado = elemento.getAttribute('id')
        }
    })
    
    return resultado
}