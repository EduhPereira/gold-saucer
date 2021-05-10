/* ELEMENTOS DE MANIPULAÇÃO */
const playerDiv = document.getElementById('player');
const machineDiv = document.getElementById('machine');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');

const playButton = document.getElementById('play');
const resultDiv = document.getElementById('result');

/* VARIÁVEIS DE VERIFICAÇÃO */
let playerChoice = 0;
let machineChoice = 0;

/* VERIFICAÇÃO DE RESULTADO */
function checkResult(playerChoice, machineChoice) {
    /* case = rock */

    if ((playerChoice === 1) && (machineChoice === 1)) {
        return `draw!`;
    }

    if ((playerChoice === 1) && (machineChoice === 2)) {
        return `loser!`;
    }

    if ((playerChoice === 1) && (machineChoice === 3)) {
        return `winner!`;
    }

    /* case = paper */

    if ((playerChoice === 2) && (machineChoice === 1)) {
        return `winner!`;
    }

    if ((playerChoice === 2) && (machineChoice === 2)) {
        return `draw!`;
    }

    if ((playerChoice === 2) && (machineChoice === 3)) {
        return `loser!`;
    }

    /* case = scissor */

    if ((playerChoice === 3) && (machineChoice === 1)) {
        return `loser!`;
    }

    if ((playerChoice === 3) && (machineChoice === 2)) {
        return `winner!`;
    }

    if ((playerChoice === 3) && (machineChoice === 3)) {
        return `draw!`;
    }
}

/* EVENTOS DE CLIQUE DOS BOTÕES */
rockButton.addEventListener('click', function () {
    playerDiv.src = './rps-images/rock.png';
    playerChoice = 1;
})

paperButton.addEventListener('click', function () {
    playerDiv.src = './rps-images/paper.png';
    playerChoice = 2;
})

scissorButton.addEventListener('click', function () {
    playerDiv.src = './rps-images/scissor.png';
    playerChoice = 3;
})

playButton.addEventListener('click', function () {
    if (playerChoice === 0) {
        resultDiv.innerText = `escolha uma opção`;
    } else {
        machineChoice = Math.floor(Math.random() * (4 - 1)) + 1;

        switch (machineChoice) {
            case 1:
                machineDiv.src = `./rps-images/rock.png`;
                break;

            case 2:
                machineDiv.src = `./rps-images/paper.png`;
                break;

            case 3:
                machineDiv.src = `./rps-images/scissor.png`;
                break;
        }

        resultDiv.innerText = checkResult(playerChoice, machineChoice);
    }
})