const container = document.querySelector('.container');
const loginlink = document.querySelector('.SignInLink');
const registerlink = document.querySelector('.SignUpLink');

registerlink.addEventListener('click', () => {
    container.classList.add('active');
});

loginlink.addEventListener('click', () => {
    container.classList.remove('active');
});
