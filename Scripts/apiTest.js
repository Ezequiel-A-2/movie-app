
// const API_KEY = 'de72dd93dac3e3c6b2ec3687f0e1eff5'

// const URL = 'https://api.themoviedb.org/3/search/movie?api_key=de72dd93dac3e3c6b2ec3687f0e1eff5'


// Veremos el tema de los posters

function showMovies(section, arrayOfFilms) {
    let imageHTTP = 'https://image.tmdb.org/t/p/w500'
    section.setAttribute("class","")
    section.className = "row d-flex scrolling-wrapper-flexbox flex-nowrap flex-md-wrap row-cols-auto"

    
    for (let film of arrayOfFilms) {
        if (film.poster_path) { // esto es para aquellas peliculas que no tienen poster
            const plantilla = `
                <div class="col">
                    <div class="card">
                        <a href="./asientos2.js">
                            <img src="${imageHTTP + film.poster_path}" class="card-img-top skeleton" alt="..." data-movie-id=${film.id}>
                        </a>
                        <div class="card-body pt-2">
                            <h3 class="card-title text-center">
                                ${film.original_title}
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

}

/* Inicio parte vieja */

// Generamos el fetch 

/* function getApiData (search) {
    const ENDPOINT = `${URL + '&query=' + search}`

    fetch(ENDPOINT)
        .then(response => response.json())
        .then((data) => {
            // data.result []
            // console.log('data:', data.results)
            // showMovies(peliculas2D, data.results)
            pruebaClase(data.result)
        })
        .catch((err) => {
            console.log('error:', err)
        })
} */

// getApiData('furious')

/* Fin parte vieja */






/* === API TEST === */

// API de https://www.themoviedb.org/; Listado de peliculas en el cine:

const ACTUAL_MOVIES = 'https://api.themoviedb.org/3/movie/now_playing?api_key=de72dd93dac3e3c6b2ec3687f0e1eff5'


// Pedido de datos a la API

function getApiData () {
    fetch(ACTUAL_MOVIES)
        .then(response => response.json())
        .then((data) => {
            // console.log('data:', data.results)
            pruebaClase(data.results)
        })
        .catch((err) => {
            console.log('error:', err)
        })
}


const TEST = []
class Peli {
    constructor(portada, titulos, film2D, film3D) {
        this.titulos = titulos
        this.film2D = film2D
        this.film3D = film3D
        this.portada = portada 
        // link para GitHub Pages `./movie-app/resources/img/${portada}`
        // link para imagenes locales `../resources/img/${portada}`
    }
}

function generateRandom() {
    const random1 = Math.random()
    const random2 = Math.random()
    return random1 <= random2 // Nos devuelve un booleano
}

function pruebaClase(arrayDePeliculas) {
    for (pelicula of arrayDePeliculas) {
        const is2D = generateRandom()
        const is3D = generateRandom()
        const imagen = pelicula.poster_path
        const nombre = pelicula.title
        TEST.push(new Peli(nombre, imagen, is2D, is3D))
    }
}