// === Declaracion de constantes ===

let checkboxes = $(`:checkbox`)
let typeOfFilms = []
let type
let data = []
let colectData = []
let sendToStorage = ""
$('#loading-button').hide()
$('#finish-button').hide()


// Borramos cualquier registro anterior del session storage

if (sessionStorage.getItem(`newData`)) sessionStorage.removeItem((`newData`))


// === Funciones ===

// Buscamos los checkbox y revisamos si 
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
    let _id, _title, _image, _film2D, _film3D; // datos a enviar hacia HomeDB
    _id = parseInt(Math.random() * 100) 
    _title = $(`#title`).val()
    _image = `${$(`#basic-url`).val()}`
    _film2D = typeOfFilms[0]["is2D"] // posicion 0 corresponde al valor de peliculas 2D
    _film3D = typeOfFilms[1]["is3D"] // la posicion 1 corresponde a peliculas 3D
    data.push({_id, _title, _image, _film2D, _film3D})
}

// Escuchador de eventos del boton "agregar Pelicula"

$(`#add-button`).click((event) => {
    event.preventDefault
    getData()
    if ($(`#title`).val() === '' || $(`#basic-url`).val() === '') {
        return
    }
    colectData = data
    $('#add-button').hide()
    $('#loading-button').show()

        setTimeout(() => {
        $('#loading-button').hide()
        $('#add-button').show()
        $('#finish-button').fadeIn(1000)
    }, 2000)
})

// Escuchador de eventos del boton "terminar"

$(`#finish-button`).click(() => {
    sendToStorage = JSON.stringify(colectData)
    sessionStorage.setItem(`newData`, sendToStorage)
    window.location.href = '../home2.html' 
})