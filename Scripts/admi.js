let nuevaPeli
let portada

// === Declaracion de constantes ===

const boton = $(`#finish-button`).click(getData)

function getData() {
    const _titulos = $(`#title`).val()
    const _portada = $(`#basic-url`).val()
    
    console.log(_titulos, _portada)
}

function test() {
    let checkboxes = $(`:checkbox`)

    for (box of checkboxes) {
        $(box).prop("checked") === true ? // Creaar un swith o ver la forma de capturar el valor del checkbox
        console.log(box.value)
        : console.log("false")
    }



}












// Esto me dio una idea!!


function agregarPelicula() {
    return portada = "../resources/img/space-jam.jpg"
}


agregarPelicula()

// Esto de abajo funciona!!!

nuevaPeli = { portada, titulos: "Ejemplo", film2D: false, film3D: true }

// export default nuevaPeli;






