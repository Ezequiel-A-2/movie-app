// === Importacion de datos === 

// Importo la base de datos desde un archivo aparte

import FILMS from "./homeDB.js"


// === Declaracion de constantes ===

const FILMS_2D = FILMS.filter(( { film2D } ) => film2D === true)
const FILMS_3D = FILMS.filter(( { film3D } ) => film3D === true)
const peliculas2D = document.querySelector("#film-container")
const peliculas3D = document.querySelector("#film-3d-container")



// === Funciones ===

// Mostrar Peliculas en pantalla

function showMovies(section, arrayOfFilms) {
    section.setAttribute("class","")
    section.className = "row d-flex scrolling-wrapper-flexbox flex-nowrap flex-md-wrap row-cols-auto"

    
    for (let film of arrayOfFilms) {

        const plantilla = `
            <div class="col">
                <div class="card">
                    <a href="./asientos2.js">
                        <img src="${film.portada}" class="card-img-top skeleton" alt="...">
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


// section = elemento al cual se le aplicaran las peliculas
// arrayOfFilms =  arreglo de peliculas para mostrar en pantalla


showMovies(peliculas2D, FILMS_2D)
showMovies(peliculas3D, FILMS_3D)


/* === API TEST === */

const API_KEY = de72dd93dac3e3c6b2ec3687f0e1eff5