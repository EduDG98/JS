# Document Object Model - DOM

- Create a representation/model of the current page with objects.
- It specifies the way the browser should structure, creating an object for each element.
- The DOM is neither part of HMTL or JS, it is a separate rule.

        People call the DOM an API (Aplication Programming Interface) which let programs and script talk to each other.

- The DOM control what scripts can ask the browser about the current page and howto update what is being shown

        DOM querries are the elements node in the DOM

## Properties
- ``document.title`` 
- ``document.lastModified`` 
- ``document.URL`` 
- ``document.domain`` 

## Methods
- ``document.write()`` 
- ``document.getElementById()`` 
- ``document.querySelectorAll()`` 
- ``document.createElement()`` 
- ``document.createTextNode()`` 


## Methods that return a single element node

- ``.getElementById('id')``
- ``.querySelector('css selector')``

## Methods that return one or more elements as a nodelist

- ``.getElementByClassName('class')``
- ``.getElementByTagName('h1')``
- ``.querySelectorAll('li[id]')``

    Nodelist: is a collection of elements node, each node is given and index nuber just like in array.

    ### Nodelist methods:

    - ``.item('index')``
    - ``.length()``
