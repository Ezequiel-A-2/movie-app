
// === Importacion de datos === 

import {  generateFilms, storageMovie } from './homeDB.js'


// === Declaracion de constantes ===

let listOfMovies = [], colectData = [], type, sendToStorage = ""
// let checkboxes = $(`:checkbox`)
$('#loading-button').hide()
$('#finish-button').hide()


// === Funciones ===

async function callApi () {
    let API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=de72dd93dac3e3c6b2ec3687f0e1eff5&query='
    let find = `${$(`#title`).val()}`

    let API_SEARCH = `${API_URL + find}` 

        const response = await fetch(API_SEARCH)
        const data = await response.json()
        return data.results
}

async function getData() {
    let dataBase = []
    let FUNDED_MOVIES = await callApi()
    await generateFilms(FUNDED_MOVIES, dataBase)
    console.log(dataBase)
}


$(`#add-button`).click((event) => {
    event.preventDefault
    
    if ($(`#title`).val() === '') {
        $(`#title`).addClass('wrong')
        return 
    } else {
        $(`#title`).removeClass('wrong')
    }

    getData()


    // colectData = data ???


    $('#add-button').hide()
    $('#loading-button').show()

        setTimeout(() => {
        $('#loading-button').hide()
        $('#add-button').show()
        $('#finish-button').fadeIn(1000)
    }, 2000)
})



// Borramos cualquier registro anterior del session storage

// if (sessionStorage.getItem(`newData`)) sessionStorage.removeItem((`newData`))


// // === Funciones ===

// // Buscamos los checkbox y revisamos si 
// /* function checkboxes_status() {
//     let checkboxes_checked = []
//     for (box of checkboxes) {

//         if (($(box).prop("checked"))) {
//             type = {[box.dataset.value]: true} 
//         } else {
//             type = {[box.dataset.value]: false} 
//         }
//         checkboxes_checked.push(type)
//     }
//     let [ is2D, is3D ] = checkboxes_checked
//     typeOfFilms = [is2D, is3D]
//     return typeOfFilms
// } */

// // Obtenermos los datos para luego exportarlos
// /* function getData() {
//     // checkboxes_status()
//     let _id, _title, _image, _film2D, _film3D; // datos a enviar hacia HomeDB
//     _id = parseInt(Math.random() * 100) 
//     _title = $(`#title`).val()

//     _title === "" 
//         ? $(`#title`).addClass('wrong') 
//         : $(`#title`).removeClass('wrong')
    
//     //_image = `../resources/img/${$(`#basic-url`).val()}`
//     // _film2D = typeOfFilms[0]["is2D"] // posicion 0 corresponde al valor de peliculas 2D
//     // _film3D = typeOfFilms[1]["is3D"] // la posicion 1 corresponde a peliculas 3D 
//     data.push({_id, _title, _image, _film2D, _film3D})
// } */

// // Escuchador de eventos del boton "agregar Pelicula"

// $(`#add-button`).click((event) => {
//     event.preventDefault
//     getData()
//     if ($(`#title`).val() === '' || $(`#basic-url`).val() === '') {
//         return
//     }
//     colectData = data
//     $('#add-button').hide()
//     $('#loading-button').show()

//         setTimeout(() => {
//         $('#loading-button').hide()
//         $('#add-button').show()
//         $('#finish-button').fadeIn(1000)
//     }, 2000)
// })

// // Escuchador de eventos del boton "terminar"

// /* $(`#finish-button`).click(() => {
//     sendToStorage = JSON.stringify(colectData)
//     sessionStorage.setItem(`newData`, sendToStorage)
//     window.location.href = '../home2.html' 
// }) */










