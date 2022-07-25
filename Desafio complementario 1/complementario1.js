function log(){

    let verificacion = false;
    let nicknameSave = "John";
    let passwordSave = "117";
    
    while(verificacion==false){
        
        let nick = prompt("Ingrese su nickname");
        let password = prompt("Ingrese su contraseña")
        
        if(nick===nicknameSave && passwordSave===password){
            verificacion= true;
            alert("Bienvenido/a de vuelta "+nicknameSave + " Spartan");
        }else{
            alert("Su nickname o contraseña no son correctos");
        }
    }
}
log();