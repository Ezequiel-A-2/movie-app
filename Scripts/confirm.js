// === Declaracion de constantes ===

const $Title = document.getElementById('card-title')
const $Seats = document.getElementById('card-seats')
const $Food = document.getElementById('card-food')

// === Funciones ===

function showData(movie, seats, foodList) {
    $Title.innerText = movie.title
    
    for (let seat of seats) {
        let template = `<li class="list-group-item">
            Butaca: ${seat.fila} - ${seat.butaca}
        </li>`

        // aca esta el error, quizas con el innerHTML se arregla...
        $Seats.appendChild(template)
    }

    for (let item of foodList) {
        let template = `<li class="list-group-item">
            ${item.quantity} ${item.productName}
        </li>`
        $Food.appendChild(template)
    }

}


function getData() {
    debugger
    const movie = JSON.parse(sessionStorage.getItem('PELICULA'))
    const seats = JSON.parse(sessionStorage.getItem('BUTACAS'))
    const foodList = JSON.parse(sessionStorage.getItem('COMIDA'))

    
    console.log(movie)
    console.log(seats)
    console.log(foodList)

    showData(movie, seats, foodList)
}

