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
    copnsole.log(data)

    for (let element of data) {
        console.log(element)
        let { _id, _title, _image, _film2D, _film3D }  = element
        FilmDB.push(new Film(_id, _title, _image, _film2D, _film3D))
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
        FILM_DB_ARRAY.push(new Film(id, image, title, is2D, is3D))
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
    
    
// Nota: Exportamos las funciones "callApi" y "generateFilms" hacia index (home) 