
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

//-------------------------------------------------------------------------------------------------------------

/* THEORY:
When we click in each div we can see in the browser console with which div are we interacting
These are 'Bubble Events':
the first event to fire is the internal one and go to outside:    Child -> Parent -> Grand -> Doc
 */
document.addEventListener('click', () => {
    console.log('Document 1')
})

grandparent.addEventListener('click', () => {
    console.log('Grandparent 1')
})

parent.addEventListener('click', () => {
    console.log('Parent 1')
})

child.addEventListener('click', () => {
    console.log('Child 1')
})

//-------------------------------------------------------------------------------------------------------------

/* THEORY:
To avoid Bubbling events we have to capture with the third argument of addEventListener
In the console we can see that the first event to fire is:  Grand -> Child -> Parent -> Doc
If we active the caputre in all the elements they will fire as:     Doc -> Grand -> Parent -> Child
 */
document.addEventListener('click', () => {
    console.log('Document Bubble')
})

grandparent.addEventListener('click', () => {
    console.log('Grandparent Capture')
}, { capture: true })

parent.addEventListener('click', () => {
    console.log('Parent Bubble')
})

child.addEventListener('click', () => {
    console.log('Child Bubble')
})

//-------------------------------------------------------------------------------------------------------------

/* TODO:
To call a function when the event is fire
Also to remove it passing some time
*/
const printSalude = text => console.log('Hey mate');

child.addEventListener('click', printSalude)

setTimeout(() => {
    child.removeEventListener('click', printSalude)
}, 2000)


//-------------------------------------------------------------------------------------------------------------

/* THEORY:
The Event Object: when a event occurs it begans to the Event Object
With target we cna select a specific element. Also mactches is an method
which return true is the element is 'click' in this case 
*/

document.addEventListener('click', e => {
    if (e.target.matches('div')) {
        console.log('Eooo')
    }
}, false)