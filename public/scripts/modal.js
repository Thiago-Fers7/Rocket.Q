export default function Modal() {
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', (e) => close(e))
    
    // fechando modal quando é clicado fora de sua área
    modalWrapper.addEventListener('click', (e) => {
        const tags = e.target.classList
        
        if (tags.value === 'modal-wrapper active') {
            close()
        }
    })

    function open() {
        modalWrapper.classList.add('active')
    }

    function close() {
        modalWrapper.classList.remove('active')
    }

    return {
        open
    }
}