// === Importacion de datos === 

// Importo la base de datos desde un archivo aparte

import FILMS from "./homeDB.js"


// === Declaracion de constantes ===

// La base de datos se trae desde un archivo aparte

const FILMS_2D = FILMS.filter(( { film2D } ) => film2D === true)
const FILMS_3D = FILMS.filter(( { film3D } ) => film3D === true)
const peliculas2D = document.querySelector("#film-container")
const peliculas3D = document.querySelector("#film-3d-container")
const viewPort = window.innerWidth



// === Funciones ===


// Pantallas Mobiles (celulares y tablets)

function viewPortMobile(section, arrayOfFilms) {
    section.setAttribute("class","scrolling-wrapper-flexbox")

    for (let film of arrayOfFilms) {
        const plantilla_Mobile = `
        <a href="../asientos2.html">
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
                    <a href="./asientos2.js">
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


// === Llamado a funciones ===


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
