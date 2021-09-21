// === Importacion de datos === 

// cambio

import callApi from './homeDB.js'
import {  generateFilms } from './homeDB.js'


// === Declaracion de constantes ===

let allMovies = []
const peliculas2D = document.getElementById("film-2d-container")
const peliculas3D = document.getElementById("film-3d-container")


// === Funciones ===

// Mostrar Peliculas en pantalla

// Nota: section = section del HTML
// arrayOfFilms = tipo de pelicula (en este caso 2D o 3D)

function showMovies(section, arrayOfFilms) {
    let imageHTTP = 'https://image.tmdb.org/t/p/w500'
    section.innerHTML = ''
    section.setAttribute("class","")
    section.className = "row d-flex scrolling-wrapper-flexbox flex-nowrap flex-md-wrap row-cols-auto"

    
    for (let film of arrayOfFilms) {
        const plantilla = `
            <div class="col">
                <div class="card">
                    <a href="../asientos2.html">
                        <img src="${imageHTTP + film.image}" class="card-img-top skeleton" alt="Portada de ${film.title}" data-movie-id=${film.id} loading="lazy">
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
    await generateFilms(apiMovies, allMovies)
    movieFilter(allMovies)
})()





// Datos desde admi (En desarrollo)

if (sessionStorage.getItem('newData')) {
    const storageMovies = JSON.parse(sessionStorage.getItem('newData'))
    // newCard(storageMovies)
}

// generar cards adicionales
function newCard (arrayOfNewFilms) {
    // verificar si es 2D o 3D y hay hacer la insercion

    
    for (let film of arrayOfNewFilms) {
        const plantilla = `
            <div class="col">
                <div class="card">
                    <a href="../asientos2.html">
                        <img src="${film.image}" class="card-img-top skeleton" alt="Portada de ${film.title}" data-movie-id=${film.id}>
                    </a>
                    <div class="card-body pt-2">
                        <h3 class="card-title text-center">
                            ${film.title}
                        </h3>
                    </div>
                </div>
            </div>`

        let newMovie = document.createElement("div")
        newMovie.setAttribute("class", "cartas") 
        newMovie.innerHTML = plantilla
        console.log(film)
        /* if () {
            _film2D
            _film3D
        } */
        // section.appendChild(pelicula)
    }

}