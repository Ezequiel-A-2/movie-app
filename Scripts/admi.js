

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
    _titulo = $(`#title`).val()
    _portada = `../resources/img/${$(`#basic-url`).val()}`
    checkboxes_status()
    _film2D = typeOfFilms[0]["is2D"] // posicion 0 corresponde al valor de peliculas 2D
    _film3D = typeOfFilms[1]["is3D"] // la posicion 1 corresponde a peliculas 3D
    return data = {_titulo, _portada, _film2D, _film3D}
}

// Escuchador de eventos del boton de la pagina

$(`#add-button`).click((event) => {
    event.preventDefault
    getData()
    colectData.push(data)
})

$(`#finish-button`).click(() => {
    sendToStorage = JSON.stringify(colectData)
    sessionStorage.setItem(`newData`, sendToStorage)
})


/* 
    let sendToStorage =  JSON.stringify(sendToStorage)
    sessionStorage.setItem(sendToStorage)
*/


// Esto me dio una idea!!
 
/* let nuevaPeli
let portada


function agregarPelicula() {
    return portada = "../resources/img/space-jam.jpg"
}


agregarPelicula()

// Esto de abajo funciona!!!

nuevaPeli = { portada, titulos: "Ejemplo", film2D: false, film3D: true } */ 








