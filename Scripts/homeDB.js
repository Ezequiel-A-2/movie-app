const FILMS = []
class Film {
    constructor(portada, titulos, film2D, film3D) {
        this.portada = `../resources/img/${portada}` 
        // link para GitHub Pages `./movie-app/resources/img/${portada}`
        // link para imagenes locales `../resources/img/${portada}`
        this.titulos = titulos
        this.film2D = film2D
        this.film3D = film3D
    }
}

FILMS.push(new Film("space-jam.JPG", "Space Jam", true, true))

FILMS.push(new Film("placeholder_img.png", "Pelicula 2", true, false))

FILMS.push(new Film("placeholder_img.png", "Pelicula 3", true, false))

FILMS.push(new Film("placeholder_img.png", "Pelicula 4", true, true))

FILMS.push(new Film("placeholder_img.png", "Pelicula 5", true, true))

FILMS.push(new Film("placeholder_img.png", "Pelicula 6", true, true))

FILMS.push(new Film("placeholder_img.png", "Pelicula 7", true, true))

FILMS.push(new Film("placeholder_img.png", "Pelicula 8", true, true))

FILMS.push(new Film("placeholder_img.png", "Pelicula 9", false, true))

FILMS.push(new Film("placeholder_img.png", "Pelicula 10", false, true))


// Traigo los datos de admin.js a traves del sessionStorage
// con estos datos genero las nuevas imagenes para mostrar en el index.html

if (sessionStorage.getItem(`newData`)) {
    let data = JSON.parse(sessionStorage.getItem(`newData`))
    
    for (let element of data) {
        let { _titulo, _portada, _film2D, _film3D }  = element
        FILMS.push(new Film(_portada, _titulo, _film2D, _film3D))
    }
}


// Exportamos la base de datos para ser usada por home.js

export default FILMS
