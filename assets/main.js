const form = document.querySelector('form');
const inputEmail = document.querySelector('#email');
const emailHelp = document.querySelector('#emailHelp');
const authUsers = ['ri@chi.com', 'richi@123.it'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // user email
    const userEmail = inputEmail.value;
    // check if user email is already present in the list of who can access
    for (let i = 0; i < authUsers.length; i++) {
        if (userEmail === authUsers[i]) {
            emailHelp.innerText = 'You are an authorized user';
            emailHelp.classList.add('text-success');
            break;
        } else {
            emailHelp.innerText = 'You are NOT an authorized user';
            emailHelp.classList.add('text-danger');
            break;
        }
    }
})

// dice game
const diceBtn = document.querySelector('#diceBtn')
const diceComputer = document.querySelector('#diceComputer')
const dicePlayer = document.querySelector('#dicePlayer')
const winnerText = document.querySelector('h4')
const diceClassDefault = 'fa-solid mx-2';

diceBtn.addEventListener('click', () => {
    const computerRandNum = Math.floor(Math.random() * 6) + 1;
    const playerRandNum = Math.floor(Math.random() * 6) + 1;

    rollComputerDice(computerRandNum);
    rollPlayerDice(playerRandNum);
    checkWinner(playerRandNum, computerRandNum);
})

function checkWinner(playerRandNum, computerRandNum) {
    if (playerRandNum > computerRandNum) {
        winnerText.innerText = '🎉 Player Win 🎉';
        console.log('player win')
    } else if (playerRandNum < computerRandNum) {
        winnerText.innerText = '😢 Computer Win 😢';
        console.log('computer win')
    } else {
        winnerText.innerText = '😐 Draw 😐';
        console.log('draw')
    }
}

function rollComputerDice(computerRandNum) {
    if (computerRandNum === 1) {
        diceComputer.classList.add('fa-dice-one')
    } else if (computerRandNum === 2) {
        diceComputer.classList = diceClassDefault;
        diceComputer.classList.add('fa-dice-two')
    } else if (computerRandNum === 3) {
        diceComputer.classList = diceClassDefault;
        diceComputer.classList.add('fa-dice-three')
    } else if (computerRandNum === 4) {
        diceComputer.classList = diceClassDefault;
        diceComputer.classList.add('fa-dice-four')
    } else if (computerRandNum === 5) {
        diceComputer.classList = diceClassDefault;
        diceComputer.classList.add('fa-dice-five')
    } else if (computerRandNum === 6) {
        diceComputer.classList = diceClassDefault;
        diceComputer.classList.add('fa-dice-six')
    }
}

function rollPlayerDice(playerRandNum) {
    if (playerRandNum === 1) {
        dicePlayer.classList.add('fa-dice-one')
    } else if (playerRandNum === 2) {
        dicePlayer.classList = diceClassDefault;
        dicePlayer.classList.add('fa-dice-two')
    } else if (playerRandNum === 3) {
        dicePlayer.classList = diceClassDefault;
        dicePlayer.classList.add('fa-dice-three')
    } else if (playerRandNum === 4) {
        dicePlayer.classList = diceClassDefault;
        dicePlayer.classList.add('fa-dice-four')
    } else if (playerRandNum === 5) {
        dicePlayer.classList = diceClassDefault;
        dicePlayer.classList.add('fa-dice-five')
    } else if (playerRandNum === 6) {
        dicePlayer.classList = diceClassDefault;
        dicePlayer.classList.add('fa-dice-six')
    }
}