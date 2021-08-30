const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat:not(.occupied)")


const text = document.getElementById("text")

let seatPrice = 50 // este valor sera traido desde el home en el futuro

let chosenSeats = [], numeroRandom = 0, accum = 0


// Generador de asientos Ocupados 

do {
  let randomSeat = Math.ceil(Math.random() * 48)
  let seat = document.getElementById(randomSeat)
  seat.classList.add("occupied")
  numeroRandom = Math.ceil(Math.random() * 70)
  accum += 1
  if (accum === 47) { 
    break // explicacion abajo
  }
} while (numeroRandom <= 48)

// este break cumple la funcion de parar el cliclo y que no aparezca como lleno el cine y se pueda elegir al menos 1 asiento... 
// se buscara la forma de poner que esta lleno el cine en el home y asi no se puede ingresar a elegir asiento 
// porque ya estaria lleno el cine (la probabilidad de que este lleno es bastante baja pero no imposible!)



//  Escuchador de evento click en div

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
    // la condicion de arriba indica que, si el asiento esta ocupado, no aumenta el contador de asiento
  ) { 
    e.target.classList.toggle("selected")
    updateSelectedCount()
  }
})


function showText() {
  
}


// determina la cant de asientos elegidos y el precio a pagar por los asientos para mostrar en pantalla

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected")
  const selectedSeatsCount = selectedSeats.length
  count = selectedSeatsCount
  total = selectedSeatsCount * seatPrice 

  if (window.innerWidth >= 440) { // supuestamente arregale el tema de como se muestra el texto en pantalla pero no funca xd
    text.innerHTML = `Has seleccionado: <span id="count">${count}</span> asientos, el monto actual es de $<span id="total">${total}</span>`
  } else {
    text.innerHTML = `Has seleccionado: <span id="count">${count}</span> asientos.
    El monto actual es de $<span id="total">${total}</span>.`
  }
}


// Total de asientos elegidos para guardar en Session Storage

function totalSelectedSeats() {
  chosenSeats = [] // por si el usuario vuelve a elegir otros asientos
  const selectedSeats = document.querySelectorAll(".row .seat.selected")
  for (seat of selectedSeats) {
    let seat_id = {
      fila: seat.dataset.fila,
      butaca: seat.dataset.butaca
    }
    chosenSeats.push(seat_id)
  }
  console.log(chosenSeats)
}


// Guardar asientos elegidos en Session Storage y redirigir a carrito.html

function saveSeat() {
  totalSelectedSeats()
  const chosenSeatsJSON = JSON.stringify(chosenSeats)
  sessionStorage.setItem("BUTACAS", chosenSeatsJSON)
  window.location.href = "../carrito.html" 
}

