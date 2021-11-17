// === Declaracion de constantes ===

const $Title = document.getElementById('card-title')
const $Seats = document.getElementById('card-seats')
const $Food = document.getElementById('card-food')
const $Image = document.getElementById('card-img')
const $btnBuy = document.getElementById('card-btn-buy')
const $btnCancel = document.getElementById('card-btn-cancel')
const $seatBtn = document.getElementById('seatBtn')
const $foodBtn = document.getElementById('foodBtn')
const movie = JSON.parse(sessionStorage.getItem('PELICULA'))
const seats = JSON.parse(sessionStorage.getItem('BUTACAS'))
const foodList = JSON.parse(sessionStorage.getItem('COMIDA'))
const imageHTTP = 'https://image.tmdb.org/t/p/w500'


// === Initialize  Boostrap Tooltips ===

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


// === Eventos ===

$btnBuy.addEventListener('click', finalizarCompra)

$btnCancel.addEventListener('click', () => window.location.href = "../index.html")

$seatBtn.addEventListener('click', () => window.location.href = "../asientos.html")

$foodBtn.addEventListener('click', () => window.location.href = "../carrito.html")

// === Funciones ===

// Obtengo la data del storage y la muestro en pantalla
function showData(movie, seats, foodList) {
    let allSeats = '', allitems = ''


    for (let seat of seats) {
        let seatTemplate = `<li class="list-group-item d-flex justify-content-between">
            <span>
                Butaca: ${seat.fila} - ${seat.butaca}
            </span>
            <span class="pe-3">
                $ 50
            </span>
        </li>`
        
        allSeats += seatTemplate
    }

    for (let item of foodList) { 
        let foodTemplate = `<li class="list-group-item d-flex justify-content-between">
            <span>
                ${item.quantity} ${item.productName}
            </span>
            <span class="pe-3">
                $ ${item.price}
            <span>
        </li>`
        
        allitems += foodTemplate
    }
    
    $Image.src = imageHTTP + movie.image
    $Image.alt = `Portada de la pelicula ${movie.title}`
    $Title.innerText = movie.title
    $Seats.innerHTML = allSeats
    $Food.innerHTML = allitems
}

showData(movie, seats, foodList)


// === API de MercadoPago ===

async function finalizarCompra() {

    const seatsMP = seats.map( (seat) => {
        return {
            title: `Butaca: ${seat.fila} - ${seat.butaca}`,
            description: "Butaca selecionada",
            picture_url: "",
            category_id: seat.fila + seat.butaca,
            quantity: 1,
            currency_id: "ARS",
            unit_price: 50
        }
    })

    const foodMP = foodList.map( (item) => {
        return {
            title: item.productName,
            description: "Comida seleccionada",
            picture_url: "",
            category_id: item.id,
            quantity: item.quantity,
            currency_id: "ARS",
            unit_price: item.price,
        }
    })

    const movieMP = {
        title: movie.title,
        description: movie.description,
        picture_url: imageHTTP + movie.image,
        category_id: movie.id,
        quantity: 1,
        currency_id: "ARS",
        unit_price: 100,
    }

    const arrayMP = [movieMP, ...seatsMP, ...foodMP]

    let URL = 'https://api.mercadopago.com/checkout/preferences'

    const response = await fetch(URL, {
                        method: 'POST',
                        headers: {
                            Authorization: 'Bearer TEST-4866319236998389-092507-fde08151c332ac7a1f00654e2e39d442-446343185'
                        },
                        body: JSON.stringify({
                            items: arrayMP,
                            back_urls: {
                                success: 'http://127.0.0.1:5500/index.html',
                                failure: 'http://127.0.0.1:5500/confirm.html'
                            },
                        })
                    })

    const data = await response.json()


    // La pagina de abajo se abre para que aquella persona que revise este 
    // codigo pueda hacerlo mas sencillo, no es algo que se dejaria en el futuro.
    window.open('https://www.mercadopago.cl/developers/es/guides/online-payments/checkout-pro/test-integration', '_blank')
    window.location.href = data.init_point
    
}

