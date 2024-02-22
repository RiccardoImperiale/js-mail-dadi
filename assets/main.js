const form = document.querySelector('form');
const inputEmail = document.querySelector('#email');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    // user email
    const userEmail = inputEmail.value;
    console.log(userEmail);
    // check if user email is already present in the list of who can access
    
})