class Film {
    constructor(id, image, title, description, film2D, film3D, language) {
        this.id = id
        this.title = title
        this.film2D = film2D
        this.film3D = film3D
        this.image = image 
        this.description = description
        this.language = language
    }
}


// Nota:
//      Exportamos las funciones "callApi" y "generateFilms" hacia index (home)
//      Por eso vera la palabra reservada 'export' o 'export default' 


// === Funciones ===

// Generador de true o false random
function generateRandom() {
    const random1 = Math.random()
    const random2 = Math.random()
    return random1 <= random2 
}

// Generador de instancias de la clase Film
export function generateFilms(API_DATA, FILM_DB_ARRAY) {
    for (let data of API_DATA) {
        const id = data.id
        const title = data.title
        let image
        (data.poster_path !== "") 
            ? image = data.poster_path
            : image = data.backdrop_path
        const is2D = generateRandom()
        const is3D = generateRandom()
        const description = data.overview
        const language = data.original_language
        FILM_DB_ARRAY.push(new Film(id, image, title, description, is2D, is3D, language))
    }
    return FILM_DB_ARRAY
}


// API Request de https://www.themoviedb.org/

export default async function callApi () {
    const ACTUAL_MOVIES = 'https://api.themoviedb.org/3/movie/now_playing?api_key=de72dd93dac3e3c6b2ec3687f0e1eff5'
        const response = await fetch(ACTUAL_MOVIES)
        const data = await response.json()
        return data.results
}