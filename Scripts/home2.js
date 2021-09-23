// === Importacion de datos === 

import callApi from './homeDB.js'
import { generateFilms } from './homeDB.js'


// === Declaracion de constantes ===

let allMovies = [], elements
const peliculas2D = document.getElementById("film-2d-container")
const peliculas3D = document.getElementById("film-3d-container")


// === Funciones ===


// === Modal ===

function showModal(movieId) {
    let selected = FUNDED_MOVIES.find((el) => el["id"] === movieId)

    console.log(selected)

    let modalTemplate = `<div id="modal-img" class="pb-2 pe-md-3">
            <img src=${imageHTTP + selected.poster_path} alt="Portada de ${selected.title}">
            <span id="modal-img-votes">
                ${selected.vote_average}
            </span>
        </div>
        <div class="container">
            <p id="modal-info-text">
                ${selected.overview}
            </p>
            <div class="d-flex justify-content-between">
                <span id="modal-info-lenguage">
                    Idioma: 
                    ${selected.original_language}
                </span>
                <span id="modal-info-date">
                    Estreno: 
                    ${selected.release_date}
                </span>
            </div>
        </div>`

    $('#exampleModalLabel').text(`Detalles de la pelicula: ${selected.title}`)
    $('.modal-body').html(modalTemplate)
}




// === Main ===

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
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" data-movie-id=${film.id}>
                        <img src="${imageHTTP + film.image}" class="card-img-top skeleton" alt="Portada de ${film.title}" data-movie-id=${film.id} loading="lazy">
                    </a>
                    <div class="card-body pt-2">
                        <h3 class="card-title text-center">
                            ${film.title}
                        </h3>
                    </div>
                </div>
            </div>`

            // <a href="../asientos2.html">

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


    // listeners


    elements = document.querySelectorAll('section')
    elements.forEach((el) => {
        console.log(el)
        el.addEventListener('click', (e) => {
            console.log(e)
            console.log(e.target)
            e.target.localName === 'img' 
                ? console.log('true')
                : console.log('false')
            /* let id = Number(el.dataset.movieId)
            showModal(id) */
        })
    })

})()
