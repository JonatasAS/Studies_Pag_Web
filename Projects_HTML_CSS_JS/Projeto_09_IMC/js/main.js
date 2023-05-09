import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
// Variaveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Formulario
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  if(showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
  
}

// Função se o valor não e um número
function notNumber(value){
  return isNaN(value) || value ==""
}


// Logica da formula do IMC
function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

