import { Modal } from "./modal.js"
// Variaveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Formulario
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}


// Logica da formula do IMC
function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}
