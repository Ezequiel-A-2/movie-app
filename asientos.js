const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')

const count = document.getElementById('count')
const total = document.getElementById('total')

let seatPrice = 50 // este valor sera traido desde el home en el futuro

let asientosElegidos = []
let numeroRandom = 0
let accum = 0


do {
  let asientoRandom = Math.ceil(Math.random() * 48)
  let asiento = document.getElementById(asientoRandom)
  asiento.classList.add("occupied")
  numeroRandom = Math.ceil(Math.random() * 60)
  accum += 1
  if (accum === 47) { 
    break
    // este break cumple la funcion de parar el cliclo y que no aparezca como lleno el cine y se pueda elegir al menos 1 asiento... 
    // se buscara la forma de poner que esta lleno el cine en el home y asi no se puede ingresar a elegir asiento 
    // porque ya estaria lleno el cine (la probabilidad de que este lleno es bastante baja pero no imposible!)
  }
} while (numeroRandom <= 48)


// todos los div accionan esta funcion pero solo aquellos que cumplan la condicion continuan con la ejecucion

container.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
    // la condicion de arriba indica que, si el asiento esta ocupado, no aumenta el contador de asiento
  ) { 
    e.target.classList.toggle('selected')
    updateSelectedCount()
  }
})

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  const selectedSeatsCount = selectedSeats.length
  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * seatPrice
}


function totalAsientosElegidos() {
  asientosElegidos = [] // por si el usuario vuelve a elegir otros asientos
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  for (seat of selectedSeats) {
    let seat_id = {
      fila: seat.dataset.fila,
      butaca: seat.dataset.butaca
    }
    asientosElegidos.push(seat_id)
  }
  console.log(asientosElegidos)
}

function guardarAsientos() {
  totalAsientosElegidos()
  const asientosElegidosJSON = JSON.stringify(asientosElegidos)
  sessionStorage.setItem("BUTACAS", asientosElegidosJSON)
  window.location.href = "../carrito.html"
}