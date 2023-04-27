const cookieClosed = document.querySelector('#cookieClosed')
const btnReset = document.querySelector('#btnReset')
const screenHome = document.querySelector('.screenHome')
const screenLuck = document.querySelector('.screenLuck')


//Eventos
cookieClosed.addEventListener('click', raffleMessage)
btnReset.addEventListener('click', raffleMessage)
document.addEventListener('keypress', function (e) {
  if (e.key == 'Enter' && screenLuck.classList.contains('hide')) {
    raffleMessage()
  }
  else if (e.key == 'Enter' && screenHome.classList.contains('hide')) {
    raffleMessage()
  }
})

function raffleMessage() {
  toggleScreen()
  showMessage()

}

function showMessage() {
  let randomNumber = Math.round(Math.random() * 10)

  switch (randomNumber) {
    case 0: screenLuck.querySelector("p").innerText = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
      break
    case 1: screenLuck.querySelector("p").innerText = "Nem todos os dias são bons, mas há algo bom em cada dia."
      break
    case 2: screenLuck.querySelector("p").innerText = "Siga confiante na direção dos seus sonhos. Viva a vida que imaginar."
      break
    case 3: screenLuck.querySelector("p").innerText = "Faça da alegria a maior certeza da sua vida, e o tempo se encarregará de permitir que grandes momentos aconteçam todos os dias."
      break
    case 4: screenLuck.querySelector("p").innerText = "Bom dia! Independentemente do que estiver sentindo, levante-se, vista-se e saia para brilhar."
      break
    case 5: screenLuck.querySelector("p").innerText = "Acredite no seu valor e prove a você mesmo que todos os sonhos são possíveis de alcançar."
      break
    case 6: screenLuck.querySelector("p").innerText = "Sinta carinho, goste, adore e ame! Mas, jamais precise de alguém pra ser feliz, além de você mesmo."
      break
    case 7: screenLuck.querySelector("p").innerText = "No tempo certo, tudo dará certo."
      break
    case 8: screenLuck.querySelector("p").innerText = "Atitude é uma coisa pequena que faz toda a diferença."
      break
    case 9: screenLuck.querySelector("p").innerText = "A persistência pode transformar um fracasso em um sucesso extraordinário!"
      break
    case 10: screenLuck.querySelector("p").innerText = "Não existe um caminho para a felicidade. A felicidade é o caminho."
      break
    default:
      break
  }
}

function toggleScreen() {
  screenHome.classList.toggle("hide")
  screenLuck.classList.toggle("hide")
}


