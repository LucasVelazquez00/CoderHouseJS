function login (){
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
diaSemana ()