// === Importacion de datos === 

import callApi from './homeDB.js'
import { generateFilms } from './homeDB.js'

// === Declaracion de constantes ===

let allMovies = [], elements, selected
const imageHTTP = 'https://image.tmdb.org/t/p/w500'
const peliculas2D = document.getElementById("film-2d-container")
const peliculas3D = document.getElementById("film-3d-container")
const modalTitle = document.getElementById('modal-title')
const modalBody = document.getElementById('modal-body')
const modalBtn = document.getElementById('buy-tickets')

// === Eventos ===

modalBtn.addEventListener('click', buyTickets)

// === Funciones ===

// Guardo los datos de la pelicula en el session Storage
function buyTickets() {
    let filmSelected = JSON.stringify(selected)
    sessionStorage.setItem('PELICULA', filmSelected)
    window.location.href = '../asientos.html' 
}

// === Modal ===

function showModal(movieId) {
    selected = allMovies.find((el) => el["id"] === movieId)


    let modalTemplate = `<div id="modal-img" class="pb-2 pe-md-3">
            <img src=${imageHTTP + selected.image} alt="Portada de ${selected.title}">
        </div>
        <div class="container">
            <p id="modal-info-text">
                ${selected.description}
            </p>
            <div class="d-flex justify-content-end">
                <span id="modal-info-lenguage">
                    Idioma: 
                    ${selected.language}
                </span>
            </div>
        </div>`

    modalTitle.innerText = `Detalles de la pelicula: ${selected.title}`
    modalBody.innerHTML = modalTemplate
}


// === Main ===

// Mostrar Peliculas en pantalla

// Nota: 
// section = section del HTML
// arrayOfFilms = tipo de pelicula (en este caso 2D o 3D)

function showMovies(section, arrayOfFilms) {
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

// Nota: 
// Esta es una IIFE (Immediately Invoked Function Expression)
// Es una funcion que se ejecuta por si sola cuando es "leida" por el navegador

(async () => {
    let apiMovies = await callApi()
    await generateFilms(apiMovies, allMovies)
    movieFilter(allMovies)

    elements = document.querySelectorAll('section')
    elements.forEach((el) => {
        el.addEventListener('click', (e) => {
            if (e.target.localName === 'img') {
                let id = Number(e.target.attributes['data-movie-id'].value)
                showModal(id) 
            }
        })
    })
})()
