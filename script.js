const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const menu = document.getElementById('menu');

openBtn.addEventListener('click', () => {
    menu.classList.remove('hidden');
})

closeBtn.addEventListener('click', () => {
    menu.classList.add('hidden');
})