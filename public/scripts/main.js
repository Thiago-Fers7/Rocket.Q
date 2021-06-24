import Modal from './modal.js';

const modal = Modal()

// Botão de para marcar como lida
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal .buttons button')

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})

// Botão de para deletar
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => handleClick(e, false))
})

function handleClick(e, check = true) {
    e.preventDefault()

    const text = check ? 'Marcar como lida' : 'Excluir'

    modalTitle.textContent = `${text}`
    modalDescription.textContent = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
    modalButton.textContent = `Sim, ${text}`

    modalButton.classList.toggle('red', !check)

    modal.open()
}