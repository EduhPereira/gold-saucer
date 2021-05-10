/* ARRAY COM PATHS DAS IMGS DA PASTA JACKPOT PARA REFERÊNCIA */
const imgsPaths = [
'./jackpot-images/cat.png',
'./jackpot-images/geto-gojou.png',
'./jackpot-images/group.png',
'./jackpot-images/group2.png',
'./jackpot-images/itadori02.png',
'./jackpot-images/itadoripng.png',
'./jackpot-images/maldicao01.png',
'./jackpot-images/megumi01.png',
'./jackpot-images/megumi02.png',
'./jackpot-images/nobara.png',
'./jackpot-images/sukuna.png',
'./jackpot-images/toji.png',
'./jackpot-images/toji02.png'];

/* ELEMENTOS DE MANIPULAÇÃO */
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

const playButton = document.getElementById('play');
const resultDiv = document.getElementById('result'); 

/* EVENTO DE CLIQUE DO BOTÃO */
playButton.addEventListener('click', function () {

    let position1 = Math.floor(Math.random() * (12 - 0)) + 0;;
    let position2 = Math.floor(Math.random() * (12 - 0)) + 0;;
    let position3 = Math.floor(Math.random() * (12 - 0)) + 0;;

    slot1.src = `${imgsPaths[position1]}`;
    slot2.src = `${imgsPaths[position2]}`;
    slot3.src = `${imgsPaths[position3]}`;

    if((position1 === position2) && (position1 === position3)){
        resultDiv.innerText = `winner!`;
    }else{
        resultDiv.innerText = `loser!`;
    }
});