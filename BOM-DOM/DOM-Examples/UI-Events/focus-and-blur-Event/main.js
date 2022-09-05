const showWarmingMessage = () => {
    elementMenssage.className = 'tip';
    elementMenssage.innerHTML = 'Username must be at least 5 characters';
}

const checkUsername = () => {
    const username = element.value;
    if (username.length < 5) {
        elementMenssage.className = 'warming'
        elementMenssage.textContent = 'Not long enough';
    } else {
        elementMenssage.textContent = '';
    }
}

const element = document.getElementById('username');
const elementMenssage = document.getElementById('feedback');

element.addEventListener('focus', showWarmingMessage, false);
element.addEventListener('blur', checkUsername, false)