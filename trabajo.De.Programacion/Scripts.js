'use strict';

function showAlert(message) {
    document.getElementById('alertMessage').innerHTML = message;
    document.getElementById('alert').style.display = 'block';
    setTimeout(() => {
        closeAlert();
    }, 5000);  // El aviso se cerrará automáticamente después de 5 segundos
}

function closeAlert() {
    document.getElementById('alert').style.display = 'none';
}

function demoWhile() {
    let i = 0;
    let result = '';
    while (i < 5) {
        alert(i);
        result += i + ' ';
        i++;
    }
}

function demoFor() {
    let result = '';
    for (let i = 0; i < 5; i++) {
        alert(i);
        result += i + ' ';
    }
}

function demoSwitch(value) {
    switch (value) {
        case 1:
            showAlert('Uno');
            break;
        case 2:
            showAlert('Dos');
            break;
        case 3:
            showAlert('Tres');
            break;
        default:
            showAlert('Otro número');
    }
}

function demoArray() {
    let frutas = ['Manzana', 'Banano', 'Naranja'];
    frutas.push('Mango');
    let numeros = [1, 2, 3, 4];
    let dobles = numeros.map(n => n * 2);
    let pares = numeros.filter(n => n % 2 === 0);
    let suma = numeros.reduce((acc, n) => acc + n, 0);

    showAlert(`Frutas: ${frutas.join(', ')}<br>
    Números originales: ${numeros}<br>
    Dobles: ${dobles}<br>
    Pares: ${pares}<br>
    Suma: ${suma}`);
}

let user = {
    name: 'Kevin',
    sayHi: function() {
        showAlert('¡Hola, ' + this.name + '!');
    }
};

// Nueva función User y demostración
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

function demoUser() {
    let newUser = new User("Jack");
    showAlert(`Nombre: ${newUser.name}<br>Es admin: ${newUser.isAdmin}`);
}

document.addEventListener('DOMContentLoaded', function() {
    let buttonsDiv = document.getElementById('buttons');
    
    let demoFunctions = [
        { name: 'Bucle While', func: demoWhile },
        { name: 'Bucle For', func: demoFor },
        { name: 'Numeros al azar', func: () => demoSwitch(2) },
        { name: 'Listado de cosas', func: demoArray },
        { name: 'Saludo', func: () => user.sayHi() },
        { name: 'Usuario', func: demoUser }  // Nuevo botón para demostrar User
    ];
    
    demoFunctions.forEach(demo => {
        let button = document.createElement('button');
        button.textContent = demo.name;
        button.addEventListener('click', demo.func);
        buttonsDiv.appendChild(button);
    });

    showAlert('¡Bienvenido! Haz clic en los botones para ver las demostraciones.');
});

console.log("JavaScript de forma interactiva");