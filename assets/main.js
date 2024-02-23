const form = document.querySelector('form');
const emailHelp = document.querySelector('#emailHelp');
const authUsers = ['ri@chi.com', 'richi@123.it',];
let isAuthUser;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    // check if user email is already in the list
    authUsers.includes(userEmail) ? isAuthUser = true : isAuthUser = false;

    if (isAuthUser) {
        emailHelp.innerText = 'You are an authorized user';
        emailHelp.classList.remove('text-danger');
        emailHelp.classList.add('text-success');
    } else {
        emailHelp.innerText = 'You are NOT an authorized user';
        emailHelp.classList.remove('text-success');
        emailHelp.classList.add('text-danger');
    }
})

// dice game
const diceBtn = document.querySelector('#diceBtn')
const diceComputer = document.querySelector('#diceComputer')
const dicePlayer = document.querySelector('#dicePlayer')
const winnerText = document.querySelector('h4')
const diceClassDefault = 'fa-solid mx-2';
const gif = document.querySelector('#gif');
const img = document.querySelector('img');
const diceContainer = document.querySelector('#diceContainer');
const gifs = ["./assets/img/rolldice-1.gif", "./assets/img/rolldice-2.gif", "./assets/img/rolldice-3.gif"];

diceBtn.addEventListener('click', () => {
    showRandomGif();
    const computerRandNum = Math.floor(Math.random() * 6) + 1;
    const playerRandNum = Math.floor(Math.random() * 6) + 1;

    rollComputerDice(computerRandNum);
    rollPlayerDice(playerRandNum);
    checkWinner(playerRandNum, computerRandNum);
})

function checkWinner(playerRandNum, computerRandNum) {
    if (playerRandNum > computerRandNum) {
        winnerText.innerText = '🎉 Player Wins 🎉';
        console.log('player wins')
    } else if (playerRandNum < computerRandNum) {
        winnerText.innerText = '😢 You Lose 😢';
        console.log('computer wins')
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

function showRandomGif() {
    // random gif
    const gifRandNum = Math.floor(Math.random() * gifs.length);
    img.src = gifs[gifRandNum]

    gif.classList.remove('d-none')
    diceContainer.classList.add('d-none')
    winnerText.classList.add('d-none')
    setTimeout(function () {
        gif.classList.add('d-none')
        diceContainer.classList.remove('d-none')
        winnerText.classList.remove('d-none')
    }, 1200);
}
