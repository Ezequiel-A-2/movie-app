// === Declaracion de constantes ===

$('#loading-button').hide()
const imageHTTP = 'https://image.tmdb.org/t/p/w500'
let FUNDED_MOVIES = [], elements

// Nota: usualmente aqui se ubicarian los eventListener pero 
// estoy usando jQuery por lo cual el evento y su funcion se encuentra al final

// === Funciones ===


// Mostrar datos en el Modal
function showModal(movieId) {
    let selected = FUNDED_MOVIES.find((el) => el["id"] === movieId)

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


// Mostrar las peliculas en pantalla
function showMovies(arrayOfFilms) {
    $('#film-container').empty()

    for (let film of arrayOfFilms) {
        const plantilla = `
            <div class="col">
                <div class="card">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" data-movie-id=${film.id}>
                        <img src="${imageHTTP + film.poster_path}" class="card-img-top skeleton" alt="Portada de ${film.title}" loading="lazy">
                    </a>
                    <div class="card-body pt-2">
                        <h3 class="card-title text-center">
                            ${film.title}
                        </h3>
                    </div>
                </div>
            </div>`
        let movie = document.createElement("div")
        movie.setAttribute("class", "cartas") 
        movie.innerHTML = plantilla
        $('#film-container').append(movie)
    }
}


// Esto verifica que tenga una imagen para mostrar, sino tiene imagen se elimina el elemento
function checkData(array) {
    let index = 0
    while (index < array.length) {
        if (array[index][`poster_path`] === null) {
            array.splice(index, 1)
        } else {
            index++
        }
    }
    return array
}


// Llamado a la api de TMDB (por defecto muestra peliculas con resultado 'furious)
async function callApi (findMovie = 'furious') {
    let API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=de72dd93dac3e3c6b2ec3687f0e1eff5&query='
    let API_SEARCH = `${API_URL + findMovie}` 

    const response = await fetch(API_SEARCH)
    const data = await response.json()
    return data.results
}
  

// Hacemos el llamado a la API con el dato obtenido
async function getData(movie) {
    FUNDED_MOVIES = await callApi(movie)
    checkData(FUNDED_MOVIES)
    showMovies(FUNDED_MOVIES)

    elements = document.querySelectorAll('.card a')
    elements.forEach((el) => {
        el.addEventListener('click', () => {
            let id = Number(el.dataset.movieId)
            showModal(id)
        })
    })
}

function search() {
    let movie = `${$(`#title`).val()}`

    getData(movie)

    // Ligera animacion del boton
    // Por 2 segundos no deja usar el boton (funciona a modo de prohibir ingresar datos tan rapido)
    $('#add-button').hide()
    $('#loading-button').show()
    setTimeout(() => { 
        $('#loading-button').hide()
        $('#add-button').show()
    }, 2000)
}

// === Event Listeners ===

// Evento click del boton
$(`#add-button`).click((event)=> {
    event.preventDefault()
    search()
    
})

// Evento Enter del input

$("#title").keydown((event) => {
    if (event.code === "Enter") {
        event.preventDefault()
        search()
    }
})


getData('furious')