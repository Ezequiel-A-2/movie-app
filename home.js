<<<<<<< Updated upstream:home.js
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
=======
// La base de datos se trae desde un archivo aparte

>>>>>>> Stashed changes:Scripts/home.js

const peliculas2D = document.getElementById("film-container")
const peliculas3D = document.getElementById("film-3d-container")
const viewPort = window.innerWidth

if (viewPort > 780) {
    desktop()
} else {
    viewPortMobile()
}



// Pantallas Mobiles (celulares y tablets)

function viewPortMobile() {
    peliculas2D.setAttribute("class","scrolling-wrapper-flexbox")

    for (let film of FILMS_2D) {
        const plantilla_Mobile = `
        <a href="./asientos.html">
            <img src="${film.portada}" alt="">
        </a>
        <h2>${film.titulos}</h2>`

        let pelicula = document.createElement("div")
        pelicula.setAttribute("class", "cartas") //
        pelicula.innerHTML = plantilla_Mobile
        peliculas2D.appendChild(pelicula)
    }
    
    /* para despues:
    `<a href="./asientos.html">
        <img src="${film.portada}" alt="">
    </a>
    <h2>${film.titulos}</h2>`
    */
    
    for (let film of FILMS_2D) { // luego generar datos de 3D

        const plantilla_Mobile = `
            <img src="${film.portada}" alt=""> 
            <h2>
                ${film.titulos}
            </h2>`

        let pelicula = document.createElement("div")
        pelicula.setAttribute("class", "cartas")
        
        pelicula.innerHTML = plantilla_Mobile
        peliculas3D.appendChild(pelicula)
    }
}



// Pantallas de Escritorio

function desktop() {
    peliculas2D.setAttribute("class","")
    peliculas2D.className = "row row-cols-auto g-4 flex-wrap pt-1"

    
    for (let film of FILMS_2D) {

        const plantilla = `
            <div class="col">
                <div class="card">
                    <a href="./asientos.html">
                        <img src="${film.portada}" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body pt-2">
                        <h3 class="card-title text-center">
                            ${film.titulos}
                        </h3>
                    </div>
                </div>
            </div>`

        let pelicula = document.createElement("div")
        pelicula.setAttribute("class", "cartas") //
        pelicula.innerHTML = plantilla
        peliculas2D.appendChild(pelicula)
    }
}











/* 




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




 */