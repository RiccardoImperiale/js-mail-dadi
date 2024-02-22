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
const playerRandNum = Math.floor(Math.random() * 6) + 1;
const computerRandNum = Math.floor(Math.random() * 6) + 1;
console.log(playerRandNum, computerRandNum);