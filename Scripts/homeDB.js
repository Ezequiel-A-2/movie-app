const FILMS = [
    { portada: "../resources/img/space-jam.jpg", titulos: "Space Jam", film2D: true, film3D: true }, 
    { portada: "../resources/img/placeholder_img.jpg", titulos: "Pelicula 2", film2D: true, film3D: false },
    { portada: "../resources/img/placeholder_img.jpg", titulos: "Pelicula 3", film2D: true, film3D: false },
    { portada: "../resources/img/placeholder_img.jpg", titulos: "Pelicula 4", film2D: true, film3D: true },
    { portada: "../resources/img/placeholder_img.jpg", titulos: "Pelicula 5", film2D: true, film3D: true },
    { portada: "../resources/img/placeholder_img.jpg", titulos: "Pelicula 6", film2D: true, film3D: true },
    { portada: "../resources/img/placeholder_img.jpg", titulos: "Pelicula 7", film2D: false, film3D: true },
    { portada: "../resources/img/placeholder_img.jpg", titulos: "Pelicula 8", film2D: false, film3D: true }, 
]

const FILMS_2D = FILMS.filter(( { film2D } ) => film2D === true)

const FILMS_3D = FILMS.filter(( { film3D } ) => film3D === true)

