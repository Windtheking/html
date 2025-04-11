let userValido = "admin"
let contraseñaValida = "1234"

const botonIngresar = document.querySelector(".ingreso");
let contador = 0;
let permisos = "permitido"

// window.addEventListener("DOMContentLoaded",function(){
//     let permiso = localStorage.getItem("autorizacion")

//     if (permiso === "negado") {
//         document.getElementById("usuario").disabled = true;
//         document.getElementById("contraseña").disabled = true;
//         botonIngresar.disabled = true;
//     }
// });

botonIngresar.addEventListener("click",function(){
    const usuario = document.getElementById("usuario").value.trim();       //aqui se establece una constante que busca en el documento (documente.) un elemento con la Id usuario(getElementById). El ".value.trim()" posterior a la busqueda es para evitar problemas si pone algun espacio antes o despues del valor
    const contraseña = document.getElementById("contraseña").value.trim(); //aqui se establece una constante que busca en el documento (documente.) un elemento con la Id contraseña (getElementById). El ".value.trim()" posterior a la busqueda es para evitar problemas si pone algun espacio antes o despues del valor
    
    let permisos = "permitido"
    localStorage.setItem("autorizacion", permisos)
    let permiso = localStorage.getItem("autorizacion");

    if (permiso == "permitido"){
        document.getElementById("usuario").disabled = false;
        document.getElementById("contraseña").disabled = false;
        botonIngresar.disabled = false;
        if (usuario === userValido && contraseña === contraseñaValida){        //los 3 simbolos = significan una comparacion estricta
            alert("Bienvenido " + userValido)
            window.location.href = "../html/Bitacora.html"                     //el window.location.href permite redirigir a otra pagina tras cumplirse el "if"
        } else{
            contador++;
            alert("ingrese credenciales validas,intento " + contador + " de 3");
            // location.reload();                                                 //"location." tarjetea la ubicacion actual, reload() recarga la ubicacion tarjeteada
            if (contador == 3){
                document.getElementById("usuario").disabled = true;
                document.getElementById("contraseña").disabled = true;
                botonIngresar.disabled = true;
                alert("numero de intentos maximo exedido, regrese mas tarde")
                let permisos = "negado";
                localStorage.setItem("autorizacion", permisos);
                setTimeout(() => {
                    let permisos = "permitido"
                    localStorage.setItem("autorizacion", permisos)
                    location.reload()
                    alert("bienvenido de regreso")
                },10000);
            }                                          
        }
    } else {
        alert("espere el tiempo indicado para seguir intentado ")
    }

});

// validacion por jwp
// colocar condicional para evitar intento infinito