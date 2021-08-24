const FILMS_2D = [
    { portada: "./resources/img/space-jam.jpg", titulos: "Space Jam"}, 
    { portada: "./resources/img/placeholder_img.jpg", titulos: "Pelicula 2" },
    { portada: "./resources/img/placeholder_img.jpg", titulos: "Pelicula 3" },
    { portada: "./resources/img/placeholder_img.jpg", titulos: "Pelicula 4" },
    { portada: "./resources/img/placeholder_img.jpg", titulos: "Pelicula 5" },
    { portada: "./resources/img/placeholder_img.jpg", titulos: "Pelicula 6" },
    { portada: "./resources/img/placeholder_img.jpg", titulos: "Pelicula 7" },
    { portada: "./resources/img/placeholder_img.jpg", titulos: "Pelicula 8" }, 
]

const peliculas2D = document.getElementById("film-2d-container")
const peliculas3D = document.getElementById("film-3d-container")

for (let film of FILMS_2D) {
    let pelicula = document.createElement("div")
    pelicula.setAttribute("class", "cartas") //
    pelicula.innerHTML =    `<a href="./asientos.html">
                                <img src="${film.portada}" alt="">
                            </a>
                            <h2>${film.titulos}</h2>`
    peliculas2D.appendChild(pelicula)
}

/* 
`<a href="./asientos.html">
    <img src="${film.portada}" alt="">
</a>
<h2>${film.titulos}</h2>`
*/

for (let film of FILMS_2D) {
    let pelicula = document.createElement("div")
    pelicula.setAttribute("class", "cartas")
    
    pelicula.innerHTML = `<img src="${film.portada}" alt="">
                            <h2>${film.titulos}</h2>`
    peliculas3D.appendChild(pelicula)
}











// const slider = document.querySelectorAll('')
let isDown = false // para saber si estoy haciendo click o no
let startx
let scrollLeft


peliculas2D.addEventListener("mousedown", (event) => { // event es para saber la posicion del mouse en la pantalla
    isDown = true // cuando mantiene el mouse apretado esto cambia a true
    peliculas2D.classList.add("active")
    console.log(event.pageX) // nos dice exactamente la posicion del mouse en la pantalla en el eje x
    // pero no necesitamos saber la posicion de x en la pantalla sino dentro del slider con lo cual, debemos calcular el resultado de la posicion del mouse en el slider y la posicion del div (slider) en el dom... suena raro pero es una simple resta:
    startx = event.pageX - peliculas2D.offsetLeft 
    // con esto sabemos la posicion inicial de X, mientras mas cercado al borde izq del contenedor "peliculas 2D" menor el resultado de starX
    // pero ahora debemos ir hacia la izq
    scrollLeft = peliculas2D.scrollLeft
    
})


peliculas2D.addEventListener("mouseleave", () => {
    isDown = false // cuando alguien deja el mouse
    peliculas2D.classList.remove("active")
})

peliculas2D.addEventListener("mouseup", () => {
    isDown = false // cuando alguien suelta el mouse
    peliculas2D.classList.remove("active")
})

peliculas2D.addEventListener("mousemove", (event) => {
    if(!isDown) return; // parar la funcion
    event.preventDefault() // con esto evitamos que seleccione cosas (que las ponga en azul)
    const x = event.pageX - peliculas2D.offsetLeft
    console.log({x, startx})
    const scroll = x - startx
    // esto nos puede dar un num positivo o uno neg
    console.log({scrollLeft, scroll})
    peliculas2D.scrollLeft = scrollLeft - scroll
})