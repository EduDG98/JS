const countChar = (event) => {
    const textValue = textarea.value;
    const count = 180 - (textValue.length);
    const display = document.getElementById('charactersLeft');
    display.textContent = count;

    const lastKey = document.getElementById('lastKey');
    lastKey.textContent = `Last key in ASCII is: ${event.keyCode}`;
}

const textarea = document.getElementById('message');
textarea.addEventListener('keypress', countChar, false);