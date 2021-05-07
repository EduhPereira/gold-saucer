const input = document.getElementById('password__input');
const verifyBtn = document.getElementById('secret__btn');
const resultArea = document.getElementById('result');

verifyBtn.addEventListener('click', () => {
    if((input.value).toUpperCase() == 'PERFORMATICO'){resultArea.classList.remove('hidden')}
})