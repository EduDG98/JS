const input = document.getElementById('noteInput');

const writeTitle = event => {
    const value = event.target.value;
    const output = document.getElementById('note');
    output.innerHTML = value;

}

input.addEventListener('keyup', writeTitle, false);