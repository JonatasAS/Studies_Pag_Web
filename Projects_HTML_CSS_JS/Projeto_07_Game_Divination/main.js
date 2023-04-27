const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handleEnter)

// função callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  handleErrorNumber()

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector('h2').innerText = `Acertou o número é ${inputNumber.value}, números de tentativas ${xAttempts}`
  }

  else if(Number(inputNumber.value) < 0 ) {
    alert("Erro o número menor que zero não permitido, tente novamente.")
  }

  else if(Number(inputNumber.value) > 10) {
    alert("Erro o número maior que 10 não permitido, tente novamente.")
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleEnter(event) {
  if(event.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}

function handleErrorNumber() {
  if(!Number(inputNumber.value)){
    alert("Tente um número")
  }
}
