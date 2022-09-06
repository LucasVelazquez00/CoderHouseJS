

class Tarea {
  constructor(titulo, fecha, texto) {
    this.titulo = titulo;
    this.fecha = fecha;                                                  //clase creadora de tareas 
    this.texto = texto;
  }
}

const tareas = [];                                                        //Constante contenedora de tareas


let titulo = document.getElementById("title-new-card");
let fecha = document.getElementById("date-new-card");
let texto = document.getElementById("text-new-card");                     //Elementos que voy a usar
let boton = document.getElementById("create-card");
let contenedor = document.getElementById("contenedor");


boton.addEventListener("click", () => {                                 //Evento de que crea las cartas
  crearTarea();
  crearCarta();
});



function crearTarea() {                                                 //funcion que crea las tareas
  let titulo = document.getElementById("title-new-card").value;
  let fecha = document.getElementById("date-new-card").value;
  let texto = document.getElementById("text-new-card").value;

  const nuevaTarea = new Tarea(titulo, fecha, texto);

  tareas.push(nuevaTarea);
}

function crearCarta() {   
                                                                             //funcion que crea las cartas
  let string = '';
  let box = document.getElementById ('box-card')
  for (let i = 0; i < tareas.length; i++) {
    string += `<div id="${i}" class="new-card c1">
  <h5 class="card-title">${tareas[i].titulo}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${tareas[i].fecha}</h6>
  <p class="card-text">${tareas[i].texto}</p>
  <button class="delete-card">Delete card</button>
  </div>`;

  }


  box.innerHTML = string ;
  

  let qsc1 = document.querySelectorAll('.c1');
  qsc1.forEach(item => {item.addEventListener('click', () => {            //evento que elimina una carta
    let id = parseInt(item.id);
    tareas.splice(id,1);
    crearCarta();


    Toastify({
      text: "Borraste una tarea",
      className: "info",
      style: {
        background: "linear-gradient(to right, rgba(0,158,79,1), rgba(0,93,67,1))",
      }
    }).showToast();
    
  })});
}


cerrarSesion = document.getElementById('close-sesion');
cerrarSesion.addEventListener('click', ()=>{


  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  setTimeout(()=>{
    location.href = 'login.html';
  }, 1000);
  Toast.fire({
    icon: 'info',
    title: 'Cerrando sesion'
  })

});



const tar = async ()=>{
  const respuesta = await fetch('data.json');
  const dataJson = await respuesta.json();
  //console.log(dataJson);
  tareas.push(dataJson[0]);
  tareas.push(dataJson[1]);

  crearCarta()

 
};


tar();

