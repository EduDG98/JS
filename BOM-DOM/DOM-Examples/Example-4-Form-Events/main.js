/** FROM EVENTS:
 * - submit: when the form is submitted
 * - change: it fires when a selection is madre from a drop-down / a checkbox is selected or deselected.
 */

const formElement = document.getElementById('formSignup');
const selectPackage = document.getElementById('package');
const packageHint = document.getElementById('packageHint');
const terms = document.getElementById('terms');
const termsHint = document.getElementById('termsHint');


const showHint = (event) => {
    const option = event.target.value;
    if (option == 'monthly') {
        packageHint.innerHTML = 'Save 10€ if you pay for 1 year';
    } else {
        packageHint.innerHTML = 'Wise choice mate!';
    }
}

const checkTerms = (event) => {
    if (!terms.checked) {
        termsHint.innerHTML = 'You must agree to the terms';
        event.preventDefault();
    }
}

selectPackage.addEventListener('change', showHint, false);
formElement.addEventListener('submit', checkTerms, false);