function actualizarsrc(url){
    var srcnuevo = url.getAttribute("data-src")
    const  iframe = document.getElementById("ifram")
    iframe.src = srcnuevo
}

window.addEventListener('load', function(){
    var imagen = document.getElementById("imagen1")
    var imagenes = ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ee44936a-8a19-4a3b-a10a-c2263997636a/dbnz5oz-fa94954f-ce54-41fb-bd19-e15c2f2ead9a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VlNDQ5MzZhLThhMTktNGEzYi1hMTBhLWMyMjYzOTk3NjM2YVwvZGJuejVvei1mYTk0OTU0Zi1jZTU0LTQxZmItYmQxOS1lMTVjMmYyZWFkOWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3U3-NeTnIKLp-xKE1Udhx_go8Q9ZG148AJ2d9PzFBXA",
                   "https://downloads.2kgames.com/xcom2/blog_images/dlc2/72599_archonKing3_yyz460.jpg",
                   "https://downloads.2kgames.com/xcom2/blog_images/dlc2/xpf5150_BerserkerQueen_sfo925.jpg"];
    let index = 0;
    let cambiarimg = function(){
        imagen.style.backgroundImage = 'url(' + colores[index] + ')';
        if (index <= 2){
            index++;
        }else{
            index = 0;
        }
    }
    cambiarc()
    setInterval(cambiarc, 800);
});