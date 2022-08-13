
alert ('Buenas, bienvenido/a a Ok, anotado!');

let username = document.getElementById('username');
let password = document.getElementById('password');
let loginBoton = document.getElementById('button');


loginBoton.addEventListener('click', () => {
    localStorage.setItem('nick', username.value);
    localStorage.setItem('pass', password.value);
})

let nameSaved = localStorage.getItem('nick');
let contSaved = localStorage.getItem('pass');

