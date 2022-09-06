// 1.- Create the new element where is the message
var message = '<div class=\"header\"><a id=\"close\" href="#">close ✖</a></div>';
message += '<div><h2>System Maintenance</h2>';
message += 'Our servers are being updated between 3 and 4 a.m. ';
message += 'During this time, there may be minor disruptions to service.</div>';

// 2.- Add the message to the body
const elementNote = document.createElement('div');
elementNote.setAttribute('id', 'note');
elementNote.innerHTML = message;
document.body.appendChild(elementNote);

//5.- Create the closeMessage funcction
const closeMessage = () => {
    document.body.removeChild(elementNote);
}

// 3.- Take the element created in the step 1
const elementClose = document.getElementById('close');

// 4.- Add the event listener to call a function which close the message
elementClose.addEventListener('click', closeMessage, false);
