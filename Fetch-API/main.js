const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url, {
    //method: 'POST'
    headers: {

    }
})
    .then((response) => response.json())
    .then(data => console.log(data)) 