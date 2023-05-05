
// Dados do modal
 export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open: function () {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

// Botão para fechar o modal
Modal.buttonClose.onclick = () => {
  Modal.close()
}

// Função para fechar modal com o ESC = Escape
window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
  if ( event.key === 'Escape') {
    Modal.close()
  }
}