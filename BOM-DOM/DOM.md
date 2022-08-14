# Document Object Model - DOM

- Create a representation/model of the current page with objects.
- It specifies the way the browser should structure, creating an object for each element.
- The DOM is neither part of HMTL or JS, it is a separate rule.

        People call the DOM an API (Aplication Programming Interface) which let programs and script talk to each other.

- The DOM control what scripts can ask the browser about the current page and howto update what is being shown

        DOM querries are the elements node in the DOM

---
## 0. DOM Properties and Methods:

### 0.1. **Properties**
- ``document.title`` 
- ``document.lastModified`` 
- ``document.URL`` 
- ``document.domain`` 

### 0.2. **Methods to create and remove**
- ``document.write()`` 
- ``document.getElementById()`` 
- ``document.querySelectorAll()`` 
- ``document.createElement()`` 
- ``document.createTextNode()`` 
 

### 0.2.1. **Methods that return a single element node**

- ``.getElementById('id')``
- ``.querySelector('css selector')``

### 0.2.2.**Methods that return one or more elements as a nodelist**

- ``.getElementByClassName('class')``
- ``.getElementByTagName('h1')``
- ``.querySelectorAll('li[id]')``

    **Nodelist: is a collection of elements node, each node is given and index nuber just like in array.**

### 0.2.3. **Nodelist methods:**

- ``.item('index')``
- ``.length()``

---
There are two ways to add and remove contect from a DOM tree:

## 1. innerHTML

The innerHTML Property is either used to retrieve and replace contenct.
You can access to the contets of an element and return it as a long string.
Also you can change the content when you set a new string to a element of the tree DOM.


- Get Content:
```javascript
const information = document.getElementById('one').innerHTML;
```
-Set Content:
```javascript
document.getelementById('one').innerHTML = newInformation;
```

## 2. DOM Manipulation



