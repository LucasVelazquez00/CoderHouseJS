
let username = document.getElementById('user-box').value;
let password = document.getElementById('pass-box').value;
let loginBoton = document.getElementById('button-log');


localStorage.setItem('user', JSON.stringify('a'));
localStorage.setItem('pass', JSON.stringify('b'));

//console.log(localStorage.getItem('user'));
//console.log(localStorage.getItem('pass'));



function log (){
  
    let username = document.getElementById('user-box').value;
    localStorage.setItem('nombreUsuario', JSON.stringify(username))
    
    //User.push = (username)
    let password = document.getElementById('pass-box').value;
    localStorage.setItem('contraseñaUsuario', JSON.stringify(password))
    console.log (localStorage);
    //Pass.push = (password);
}



function login (){
  
let loginBoton = document.getElementById('button-log');
loginBoton.addEventListener('click', () => {
    log ();
    nameSesion = (localStorage.getItem('nombreUsuario'));
    passSesion = (localStorage.getItem('contraseñaUsuario'));
    console.log(nameSesion,passSesion)
    if (nameSesion == localStorage.getItem('user') && passSesion == localStorage.getItem('pass')){
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
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          setTimeout(()=>{
            location.href = 'index.html';
          }, 1200);
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Escribiste algo mal',
            footer: '<a href=""></a>'
          });
    }
});
}

login()



function newPass (){
  const botonNewContra = document.getElementById('new-contra');
  botonNewContra.addEventListener('click',()=>{
      const newContra = document.getElementById('input-new-contra').value;
      localStorage.setItem('pass', JSON.stringify(newContra));
      console.log(localStorage);

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
      
      Toast.fire({
        icon: 'success',
        title: 'Cambiaste la contraseña'
      })

  });
  
}


const loginBox = document.getElementById('l-b');
const cambiarCont = document.getElementById('cambiar-contraseña');



cambiarCont.addEventListener('click', ()=>{

  loginBox.innerHTML = `<small style='padding-top:7em'>Nueva Contraseña</small>
<input id="input-new-contra" type="password" class="form-sesion" placeholder="Contraseña" aria-label="Contraseña"><button id="new-contra" type="button"  class="btn-ingresar" value="ingresar">Ingresar</button>`

newPass()


const botonIngresarCont = document.getElementById('new-contra');
botonIngresarCont.addEventListener('click', (event)=> {

  event.preventDefault();

  loginBox.innerHTML = `<h2>Login</h2>
  <small>Nickname</small>
  <input id="user-box" type="text" class="form-sesion" placeholder="Nickname" aria-label="Nickname" >
  <small>Contraseña</small>
  <input id="pass-box" type="password" class="form-sesion" placeholder="Contraseña" aria-label="Contraseña">
  <button><span id="cambiar-contraseña">Cambiar de contraseña</span></button>
  <div class="btn">
      <button id="button-log" type="button"  class="btn-ingresar" value="ingresar">Ingresar</button>`;
      
      login()

})


});



//console.log(document.getElementById('l-b'))