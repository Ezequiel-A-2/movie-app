// === Declaracion de constantes ===

let checkboxes = $(`:checkbox`)
let typeOfFilms = []
let type
let _titulo
let _portada
let _film2D 
let _film3D 
let data = {}
let colectData = []
let sendToStorage = ""


// === funciones ===

// buscamos los checkbox y revisamos si 
function checkboxes_status() {
    let checkboxes_checked = []
    for (box of checkboxes) {

        if (($(box).prop("checked"))) {
            type = {[box.dataset.value]: true} 
        } else {
            type = {[box.dataset.value]: false} 
        }
        checkboxes_checked.push(type)
    }
    let [ is2D, is3D ] = checkboxes_checked
    typeOfFilms = [is2D, is3D]
    return typeOfFilms
}

// Obtenermos los datos para luego exportarlos
function getData() {
    checkboxes_status()
    _titulo = $(`#title`).val()
    _portada = `../resources/img/${$(`#basic-url`).val()}`
    _film2D = typeOfFilms[0]["is2D"] // posicion 0 corresponde al valor de peliculas 2D
    _film3D = typeOfFilms[1]["is3D"] // la posicion 1 corresponde a peliculas 3D
    return data = {_titulo, _portada, _film2D, _film3D}
}

// Escuchador de eventos del boton "agregar Pelicula"

$(`#add-button`).click((event) => {
    event.preventDefault
    getData()
    colectData.push(data)
})

// Escuchador de eventos del boton "terminar"

$(`#finish-button`).click(() => {
    sendToStorage = JSON.stringify(colectData)
    sessionStorage.setItem(`newData`, sendToStorage)
})