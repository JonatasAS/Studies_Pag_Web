import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumber } from "./utils.js"

// Variaveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Formulario
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotNumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)

}

// Função para apresentar mensagem e abrir o modal
function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

// Evento para fechar a mensagem de erro
inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()
