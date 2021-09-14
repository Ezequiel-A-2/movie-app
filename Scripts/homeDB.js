class Film {
    constructor(id, image, title, film2D, film3D) {
        this.id = id
        this.title = title
        this.film2D = film2D
        this.film3D = film3D
        this.image = image 
    }
}

// link para GitHub Pages `./movie-app/resources/img/${portada}`
// link para imagenes locales `../resources/img/${portada}`

// === Traer Data de admi usando Session Storage ===

// Genero otros datos para mostrar en el index.html

export function storageMovie(FilmDB) {
    let data = JSON.parse(sessionStorage.getItem(`newData`))
    
    for (let element of data) {
        let { _titulo, _portada, _film2D, _film3D }  = element
        FilmDB.push(new Film(_portada, _titulo, _film2D, _film3D))
    }
}

// === Funciones ===

// Generador de true o false random

function generateRandom() {
    const random1 = Math.random()
    const random2 = Math.random()
    return random1 <= random2 
}

// Generador de instancias de la clase Film
export function generateFilms(API_DATA, FilmDB) {
    for (let data of API_DATA) {
        const id = data.id
        const title = data.title
        const image = data.poster_path
        const is2D = generateRandom()
        const is3D = generateRandom()
        FilmDB.push(new Film(id, image, title, is2D, is3D))
    }
    return FilmDB
}


// API Request de https://www.themoviedb.org/

export default async function callApi () {
    const ACTUAL_MOVIES = 'https://api.themoviedb.org/3/movie/now_playing?api_key=de72dd93dac3e3c6b2ec3687f0e1eff5'
        const response = await fetch(ACTUAL_MOVIES)
        const data = await response.json()
        const listOfMovies = data.results
        return listOfMovies
}
    
    
// Nota: Exportamos las funciones "callApi" y "generateFilms" hacia index (home) 