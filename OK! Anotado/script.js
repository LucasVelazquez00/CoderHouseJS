/*function login (){
alert('Buenas! Bienvenido/a a OK, Anotado');

let nickSaved = 'Lucas';
let passSaved = '1234';
let numero = 0;

while (numero < 3) {
  
  let nick = prompt ('Escribe tu nick');
  let pass = prompt ('Escribe tu password');
    numero ++;
    if ((nick === nickSaved)&&((pass === passSaved))){
      alert('Bienvenido/a de vuelta Lucas')
      break;}
  
      else{
      alert('No te conozco, reintenta');
    }
  }
}

login()



function diaSemana (){

let array = ['No tienes nada para hacer','-Tenés que ir al médico a las 14:00','Hoy no tenés nada agendado ',
            '-Tenés que ir de visita a la casa e tu mamá', '-Tienes clases en CoderHouse a las 15:00']

  for (i = 0; i < 9; i++){

    let dia = prompt ('Que día te interesa revisar?');
  
    if(dia === 'lunes'){
    alert(array [0])
    }

    else if(dia === 'martes'){
    alert(array [1])
    }

    else if(dia === 'miercoles'){
    alert(array [2])
    }

    else if(dia === 'jueves'){
    alert(array [3])
    }

    else if(dia === 'viernes'){
    alert(array [4])
    }
    else{
    alert ('Elija día de nuevo')
    }
  }
  
}
diaSemana ()*/

/* 
  let nickSaved = 'Lucas';
  let passSaved = '1234';
 let numero = 0;

function login (){
  alert('Buenas! Bienvenido/a a OK, Anotado');
  
  while (numero < 3) {
    
    let nick = prompt ('Escribe tu nick');
    let pass = prompt ('Escribe tu password');
      numero ++;
      if ((nick === nickSaved)&&((pass === passSaved))){
        alert('Bienvenido/a de vuelta Lucas')
        break;}
    
        else{
        alert('No te conozco, reintenta');
      }
    }
  }
  
  login()

  //Login--^
  */
/*

class Dia {
  constructor (fecha, tarea, horario){
    this.fecha = parseFloat(fecha)
    this.tarea = tarea;
    this.horario = horario;
  }
}



const dias = [
  new Dia (1.8, 'Ir al medico', '18:00HS'),
  new Dia (1.8, 'Cenar con amigos', '20:00HS'),
  new Dia (2.8, 'Clases', '10:00HS'),
  new Dia (8.8, 'Ir al medico', '17:00HS'),
  ]

let preguntaAB = prompt(`Que quieres hacer ${nickSaved}? \nEscribe 'a' si quieres ver que tareas tienes pendientes \nEscribe 'b' si quieres agregar una tarea nueva.`)

function pregunta (preguntaAB, array){
  let fechasOrdenadas = array.slice(0);

  switch(preguntaAB){
    case 'a':

      return fechasOrdenadas.sort((a,b) => a.fecha - b.fecha);

    case 'b':
      let fechaIngresada = prompt ('Ingresa usando "-" en vez de espacios la fecha, la tarea y la hora que quieres guardar (Ejemplo: "25.12-Cena de Navidad-20:00Hs")'); 
      
      let datosIngresados = fechaIngresada.split('-');
      
      const diaNuevo = new Dia (datosIngresados[0], datosIngresados[1], datosIngresados[2]);

      dias.push (diaNuevo);

    default:
      alert('No es valido');
      break;
  }

}

//pregunta(pregunta, dias)

function mostrarArray (array){
  
  let infoArray = '';

  array.forEach(elemento=>{
    infoArray += 'Fecha: ' + elemento.fecha + '\nTarea: ' + elemento.tarea + '\nHorario: ' + elemento.horario + '\n\n'
})

  return infoArray;
}

alert (mostrarArray(pregunta(preguntaAB,dias)));




let terminar = true

function ingresarLibro (){

}


let preguntaQueHacer = prompt(`Que quieres hacer ${nickSaved}? \nEscribe 'a' si quieres ver que tareas tienes pendientes \nEscribe 'b'si quieres agregar una tarea nueva`)

function agregarTarea (preguntaQueHacer, Dia){

  if (preguntaQueHacer == 'b'){
    let datos = prompt ('Ingresa usando "-" en vez de espacios la fecha, la hora y la tarea que quieres guardar')
  }

  let datos = ingreso.split('-');

  const diaNuevo = new Dia (datos [0], datos[1], datos [2])

  dias.push (diaNuevo)
}
agregarTarea ()

*/

/*


//-clase


class Tarea {

  constructor(id, fecha, texto, hora) {
      this.id = parseInt(id);
      this.fecha = fecha;
      this.texto = texto;
      this.hora = hora;
  }

}

const tareas = [
  new Tarea (2, '23.10', 'Mi cumpleaños', 'almuerzo con mi familia a las 14'),
  new Tarea (3, '31.12', 'Año nuevo', 'cena a las 19')
]

console.log(tareas);




//function crear tarjeta
function crearTarjeta (tareas){
  let box = document.querySelector('title-new-card','date-new-card', 'text-new-card', 'create-card');
  tarjeras.forEach(tareas =>{
    box.innerHTML += 
    `<div class="card card-body card__day">
    <h5 class="card-title"></h5>
    <h6 class="card-subtitle mb-2 text-muted">24.12</h6>
    <p class="card-text">Cena de navidad 22:00hs.</p>
    <a href="#" class="delete-card">Delete card</a>
</div>`
  })
}



//-Condicional

let seguir = true;

while (seguir) {
  let dateSaved = prompt(`Buenas ${nickSaved} \nIngresa usando "-" en vez de espacios,un numero de creación, la fecha, tarea y hora que quieres guardar. \nIngresa "0" para continuar y ver tareas pendientes\n(Ejemplo: 70-22.1-Cumple de Lucia-21)`);

  if (dateSaved.toUpperCase() == '0') {
      seguir = false;
      break;
  }

  let datos = dateSaved.split('-');
  const dia = new Dia(datos[0], datos[1], datos[2], datos[3]);

  dias.push(dia);

  console.log(dias);
} 







//-Función "mostrar"


let comoMostrar = prompt('Elegí como preferis ver:\n1 - fecha (ascedente) \n2 - fecha (descendente) \n3 - numero de creación \n4 - borrar');

function mostrar(comoMostrar, array) {

  let arrayOrdenado = array.slice(0);

  switch (comoMostrar) {
      case '1':
        return arrayOrdenado.sort((a, b) => a.fecha - b.fecha);
      case '2':
        return arrayOrdenado.sort((a, b) => b.fecha - a.fecha);
      case '3':
        return arrayOrdenado.sort((a, b) => a.id - b.id);
      case'4':
      return arrayOrdenado.pop ()
      default:
        alert('Lo que pusiste no es valido');
        
  }

}


//-Función "stringArray"


function stringArray(array){
  let info = '';

  array.forEach(elemento=>{
      info += elemento.id + '\nFecha: ' + elemento.fecha + '\nTarea: ' + elemento.tarea + '\nHorario: ' + elemento.hora + 'Hs\n\n'
  })

  return info;

}


alert(stringArray(mostrar(comoMostrar,dias)));

nu = 0

let pregunta = prompt('quieres hacer de vuelta algo? (si / no)')

while(nu < 3){
  nu++
if(pregunta == 'si'){
  alert(preguntaInicial());
}
else{alert('F')}
}

*/

class Tarea {
  constructor(titulo, fecha, texto) {
    this.titulo = titulo;
    this.fecha = fecha;
    this.texto = texto;
  }
}

const tareas = [];

let titulo = document.getElementById("title-new-card");
let fecha = document.getElementById("date-new-card");
let texto = document.getElementById("text-new-card");
let boton = document.getElementById("create-card");
let contenedor = document.getElementById("contenedor");

boton.addEventListener("click", () => {
  crearTarea();
  crearCarta();
});


/*
localStorage.setItem("nickname", "nick");
localStorage.setItem("password", "pass");
*/
let nickSaved = "nick";
let passSaved = "pass";

function login(nick, pass) {
  while (true) {
    let nick = prompt("Escribe tu nick");
    let pass = prompt("Escribe tu password");

    if (nick === nickSaved && pass === passSaved) {
      alert("Bienvenido/a de vuelta");
      break;
    } else {
      alert("No te conozco, reintenta");
    }
  }
}

function crearTarea() {
  let titulo = document.getElementById("title-new-card").value;
  let fecha = document.getElementById("date-new-card").value;
  let texto = document.getElementById("text-new-card").value;

  const nuevaTarea = new Tarea(titulo, fecha, texto);

  tareas.push(nuevaTarea);
}
function crearCarta() {
  let string = '';
  let box = document.getElementById ('box-card')
  for (let i = 0; i < tareas.length; i++) {
    string += `<div id="${i}" class="new-card c1">
  <h5 class="card-title">${tareas[i].titulo}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${tareas[i].fecha}</h6>
  <p class="card-text">${tareas[i].texto}</p>
  <a href="#" class="delete-card">Delete card</a>
  </div>`;
  }
  box.innerHTML = string ;
  
  let qsc1 = document.querySelectorAll('.c1');
  qsc1.forEach(item => {item.addEventListener('click', () => {
    let id = parseInt(item.id);
    tareas.splice(id,1);
    crearCarta();
  })});
}





/*



let username = document.getElementById('username');
let password = document.getElementById('password');
let loginBoton = document.getElementById('button');


loginBoton.addEventListener('click', () => {
  localStorage.setItem('nick', username.value);
  localStorage.setItem('pass', password.value);
})

let nameSaved = localStorage.getItem('nick');
let contSaved = localStorage.getItem('pass');

*/