const input = document.getElementById('password__input');
const verifyBtn = document.getElementById('secret__btn');
const resultArea = document.getElementById('result');
const paragraph = document.getElementById('paragraph');
const close__secretsBtn = document.getElementById('close__secrets');

verifyBtn.addEventListener('click', () => {
    if((input.value).toUpperCase() == 'PERFORMATICO'){
        resultArea.classList.remove('hidden');
        input.classList.add('hidden');
        paragraph.classList.add('hidden');
        verifyBtn.classList.add('hidden');
    }
})

close__secretsBtn.addEventListener('click', () => {
    resultArea.classList.add('hidden');
    input.classList.remove('hidden');
    paragraph.classList.remove('hidden');
    verifyBtn.classList.remove('hidden');
})