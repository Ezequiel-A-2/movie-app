// === Declaracion de constantes ===

const container = document.querySelector(".contenedor")
const seats = document.querySelectorAll(".fila .seat:not(.occupied)")
const text = document.getElementById("text")
const button = document.getElementById("main-button")
let chosenSeats = [], numRandom = 0, accum = 0, seatPrice = 50


// === Escuchadores de Eventos ===

button.addEventListener('click', saveSeat)

// === Funciones ===

// Generador de asientos Ocupados 
do {
	let randomSeat = Math.ceil(Math.random() * 48)
	let seat = document.getElementById(randomSeat)
	seat.classList.toggle("occupied")
	numRandom = Math.ceil(Math.random() * 48)
	accum += 1
	if (accum === 47) { 
		break // explicacion abajo
	}
} while (accum <= 48)

// este break cumple la funcion de parar el cliclo y que el cine 
// no aparezca como lleno y se pueda elegir al menos 1 asiento 


// determina la cant de asientos elegidos y el precio a pagar por los asientos para mostrar en pantalla
function updateSelectedCount() {
	const selectedSeats = document.querySelectorAll(".fila .seat.selected")
	const selectedSeatsCount = selectedSeats.length
	count = selectedSeatsCount
	total = selectedSeatsCount * seatPrice 
	text.innerHTML = `Has seleccionado: <span id="count">${count}</span> asientos, 
	el monto actual es de $<span id="total">${total}</span>`
}


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


// Total de asientos elegidos para guardar en Session Storage
function totalSelectedSeats() {
	chosenSeats = [] // por si el usuario vuelve a elegir otros asientos
	const selectedSeats = document.querySelectorAll(".fila .seat.selected")
	for (seat of selectedSeats) {
		let seat_id = {
			fila: seat.dataset.fila,
			butaca: seat.dataset.butaca
		}
		chosenSeats.push(seat_id)
	}
}


// Guardar asientos elegidos en Session Storage y redirigir a carrito.html
function saveSeat() {
	totalSelectedSeats()
	const chosenSeatsJSON = JSON.stringify(chosenSeats)
	sessionStorage.setItem("BUTACAS", chosenSeatsJSON)
	window.location.href = "../carrito.html" 
}



