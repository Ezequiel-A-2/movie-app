// === Importacion de datos === 

import callApi from './homeDB.js'
import {  generateFilms, storageMovie } from './homeDB.js'



if (sessionStorage.getItem(`newData`)) {
    storageMovie()
}





// === Declaracion de constantes ===

let allMovies = []
const peliculas2D = document.querySelector("#film-container")
const peliculas3D = document.querySelector("#film-3d-container")


// === Funciones ===

// Mostrar Peliculas en pantalla

// Nota: section = section del HTML
// arrayOfFilms = tipo de pelicula (en este caso 2D o 3D)

function showMovies(section, arrayOfFilms) {
    let imageHTTP = 'https://image.tmdb.org/t/p/w500'
    section.setAttribute("class","")
    section.className = "row d-flex scrolling-wrapper-flexbox flex-nowrap flex-md-wrap row-cols-auto"

    
    for (let film of arrayOfFilms) {
        const plantilla = `
            <div class="col">
                <div class="card">
                    <a href="../asientos2.html">
                        <img src="${imageHTTP + film.image}" class="card-img-top skeleton" alt="..." data-movie-id=${film.id}>
                    </a>
                    <div class="card-body pt-2">
                        <h3 class="card-title text-center">
                            ${film.title}
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

// Filtro de peliculas 2D o 3D

function movieFilter(arrayDB) {
    const FILMS_2D = arrayDB.filter(( { film2D } ) => film2D === true)
    const FILMS_3D = arrayDB.filter(( { film3D } ) => film3D === true)
    showMovies(peliculas2D, FILMS_2D)
    showMovies(peliculas3D, FILMS_3D)
}


// Generador de peliculas con llamado a la API

// Nota: esta es una IIFE (Immediately Invoked Function Expression)
// Es una funcion que se ejecuta por si sola cuando es "leida" por el navegador

(async () => {
    let apiMovies = await callApi()
    let movieDB = await generateFilms(apiMovies, allMovies)
    movieFilter(movieDB)
})()