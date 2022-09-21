const addButton = document.getElementById('button');
const listElement = document.getElementById('list');
const counter = document.getElementById('counter');
let count = 1;

const addItem = () => {
    count = count + 1;
    const updatedItem = `Item ${count}`
    const newItem = document.createElement('li');
    const text = document.createTextNode(updatedItem);
    newItem.appendChild(text);
    listElement.appendChild(newItem);
}

const updateCount = () => {
    const amountOfListElement = document.getElementsByTagName('li').length;
    counter.innerHTML = amountOfListElement;
}

addButton.addEventListener('click', addItem, false);
listElement.addEventListener('DOMNodeInserted', updateCount, false);
