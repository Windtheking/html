function actualizarsrc(url){
    var srcnuevo = url.getAttribute("data-src")
    const  iframe = document.getElementById("ifram")
    iframe.src = srcnuevo
}

window.addEventListener('load', function(){
    var imagen = document.getElementById("imagen1")
    var imagenes = ["https://steamuserimages-a.akamaihd.net/ugc/2488880908578478400/C0D99F8779F3EEB2B929F0B47369A96B35266315/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScZntCa2sVDoC9RCau1Jw_BsyECozuzZhFA&s",
                   "https://i.pinimg.com/736x/3b/5c/40/3b5c40bda42ea51ba314687880c00c62.jpg"];
    let index = 0;
    let cambiarimg = function(){
        imagen.style.backgroundImage = 'url(' + imagenes[index] + ')';
        if (index <= 2){
            index++;
        }else{
            index = 0;
        }
    }
    cambiarimg()
    setInterval(cambiarimg, 7000);
});