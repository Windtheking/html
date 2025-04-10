let userValido = "admin"
let contraseñaValida = "1234"

const botonIngresar = document.querySelector(".ingreso");

botonIngresar.addEventListener("click",function(){
    const usuario = document.getElementById("usuario").value.trim();       //aqui se establece una constante que busca en el documento (documente.) un elemento con la Id usuario(getElementById). El ".value.trim()" posterior a la busqueda es para evitar problemas si pone algun espacio antes o despues del valor
    const contraseña = document.getElementById("contraseña").value.trim(); //aqui se establece una constante que busca en el documento (documente.) un elemento con la Id contraseña (getElementById). El ".value.trim()" posterior a la busqueda es para evitar problemas si pone algun espacio antes o despues del valor

    if (usuario === userValido && contraseña === contraseñaValida){        //los 3 simbolos = significan una comparacion estricta
        alert("Bienvenido " + userValido)
        window.location.href = "../html/Bitacora.html"                     //el window.location.href permite redirigir a otra pagina tras cumplirse el "if"
    } else{
        alert("ingrese credenciales validas")
        location.reload();                                                 //"location." tarjetea la ubicacion actual, reload() recarga la ubicacion tarjeteada
    }
});