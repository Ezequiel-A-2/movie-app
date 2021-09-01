// La base de datos se trae desde un archivo aparte


// Declaracion de constantes 
const headerFilter2D = document.querySelector("#only2D")
const headerFilter3D = document.querySelector("#only3D")
const peliculas2D = document.querySelector("#film-container")
const peliculas3D = document.querySelector("#film-3d-container")
const viewPort = window.innerWidth




// Escuchadores de eventos
headerFilter2D.addEventListener("click", showTypeFilm)
headerFilter3D.addEventListener("click", showTypeFilm)




// Diseño responsive usando el viewport de la pantalla (requiere actualizar para mostrar bien segun la pantalla)

// Nota: La siguiente sintaxis es conocida como "Operador Ternario" que basicamente es otra forma de escribir un if

// section = elemento al cual se le aplicaran las peliculas
// arrayOfFilms =  arreglo de peliculas para mostrar en pantalla

function showMovies(section, arrayOfFilms) {
    viewPort > 780 ?  
        desktop(section, arrayOfFilms) 
        : 
        viewPortMobile(section, arrayOfFilms)
}

showMovies(peliculas2D, FILMS_2D)
showMovies(peliculas3D, FILMS_3D)

function showTypeFilm(type) {
    if (type.target.dataset.check === "true") {
        type.target.dataset.check = false
    } else {
        type.target.dataset.check = true
    }

    type.target.classList.toggle("hide")

    console.log(headerFilter2D.dataset.check)

    console.log(headerFilter3D.dataset.check)

    if (headerFilter2D.dataset.check === "true" && headerFilter3D.dataset.check === "true") {
        peliculas2D.classList.remove("hide")
        peliculas3D.classList.remove("hide")
    }


    if (type.target.dataset.check === "true") {
        type.target.dataset.check = false
    } else {
        type.target.dataset.check = true
    }
}


// Pantallas Mobiles (celulares y tablets)

function viewPortMobile(section, arrayOfFilms) {
    section.setAttribute("class","scrolling-wrapper-flexbox")

    for (let film of arrayOfFilms) {
        const plantilla_Mobile = `
        <a href="./asientos.html">
            <img src="${film.portada}" alt="">
        </a>
        <h2>${film.titulos}</h2>`

        let pelicula = document.createElement("div")
        pelicula.setAttribute("class", "cartas") //
        pelicula.innerHTML = plantilla_Mobile
        section.appendChild(pelicula)
    }
}

// Pantallas de Escritorio

function desktop(section, arrayOfFilms) {
    section.setAttribute("class","")
    section.className = "row row-cols-auto g-4 flex-wrap pt-1"

    
    for (let film of arrayOfFilms) {

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
        pelicula.setAttribute("class", "cartas") 
        pelicula.innerHTML = plantilla
        section.appendChild(pelicula)
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