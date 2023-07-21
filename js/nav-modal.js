let button = document.querySelector('.header__modal-button');

function toggleModal(){
    let navModal = document.querySelector('.nav-modal');
    let body = document.querySelector('body')

    navModal.classList.toggle('nav-modal--active')
    body.classList.toggle('body--nav-modal--active')
    button.classList.toggle('header__modal-button--active')

}


button.addEventListener('click', toggleModal)