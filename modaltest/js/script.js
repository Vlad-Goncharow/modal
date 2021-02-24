const modal = document.querySelector('.modal');

const modalOpen = document.querySelector('.header-info__modal-target');

modalOpen.addEventListener('click', (e) => {
    e.preventDefault();
    modalOpened();
    clearTimeout(modalInerval);
});

function checkScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        modalOpened();
        clearTimeout(modalInerval)
        window.removeEventListener('scroll', checkScroll);
    }
}

window.addEventListener('scroll', checkScroll);

modal.addEventListener('click', (e) => { 
    const target = e.target;

    // Решил сделать так что б не обьявлять этот крестик в переменную и не вашеать еще один оброботчик
    if (target.classList.contains('modal') || target.classList.contains('modal-form-header__close')) {
        modalClosed()
    }
})

const modalInerval = setTimeout(() => {
    modalOpened()
}, 5000)

function modalOpened() {
    modal.classList.add('modal_show');
    modal.classList.remove('modal_hide');
}
function modalClosed() {
    modal.classList.add('modal_hide');
    modal.classList.remove('modal_show');
}



// const closeModalBtn = document.querySelector('.modal-form-header__close')
// closeModalBtn.addEventListener('click', modalClosed);



