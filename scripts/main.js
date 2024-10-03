

const button = document.querySelector('.descr');
const render = document.querySelector('.render');
const descr = document.querySelector('.descr-text');
button.addEventListener('click', () => {
    const isChosen = button.classList.contains('descr-choosen');

    render.classList.toggle('d-none');
    descr.classList.toggle('d-none');

    button.classList.toggle('descr-chosen');
});