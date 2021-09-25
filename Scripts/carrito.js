// Las bases de datos (arrays) vienen de otro archivo

// === Declaracion de variables ===

// Nota: las variables iniciadas con el signo $ es para diferenciar entre las variables que 
// estan relacionadas al DOM y aquellas que no.

const $food_container = document.getElementById("food-container")
const $category = document.querySelectorAll(".dropdown-item")
const $show_Shop_Cart = document.getElementById("shopCart")
const $table_Body = document.getElementById("modal-table-body")
const $total_To_Pay = document.getElementById("totalToPay")
const carrito = []
let carrito_JSON = ""


// === Escuchadores de eventos ===

$show_Shop_Cart.addEventListener("click", modalBody)
$total_To_Pay.addEventListener("click", saveSelection)


// === Funciones === 


// === Funciones del Body ===

// Agregamos el item al array carrito
function addToShopCart(list, itemId) {
    let item = list.find((list) => list["id"] === itemId)
    let { id, productName, price } = item
    const itemOnShopCart = carrito.find(( { id } ) => id === itemId)

    itemOnShopCart 
        ? itemOnShopCart.quantity++ 
        : carrito.push({ id, productName, price, quantity:1 })
    
    carrito.sort( (a , b) => a.id - b.id)
}


// Genero los productos a mostrar (por default se muestra COMBOS)
function showProducts(list = COMBOS) {
    let cards = `` // Nota: si cards no definido esta genera un objeto "undefined" al inicio
    let $botones

    for (item of list) {

        const cardTemplate = `<div class="col">
            <div class="card h-100">
                <img src="${item.image}" class="card-img-top" alt="${item.description}">
                <div class="card-body">
                    <h5 class="card-title">
                        ${item.title}
                    </h5>
                    <p class="card-text">
                        ${item.description}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">Imagen a modo ilustrativo.</small>
                    </p>

                    <div class="d-flex justify-content-between align-items-center">
                        <p class="food-price mb-0 fw-bold">
                            $<span class="price">${item.price}</span>
                        </p>
                        <button class="btn btn-primary" id="${item.id}" type="button">Comprar</button>
                    
                    </div>
                </div>
            </div>
        </div>`

        cards += cardTemplate 
    }

    $food_container.innerHTML = cards 
    // hacemos una sola insercion al DOM y optimizo los tiempos de carga
    
    // lo malo de hacer una sola insercion es que debo agregar los  
    // eventListener luego de la insercion al DOM

    list.forEach( ({ id } ) => {
        $botones = document.getElementById(`${id}`)
        $botones.addEventListener('click', (item) => {
            addToShopCart(list, Number(item.target.id))
        })
    })
}

showProducts()


// === Funciones del header ===

// Usando la drop-list del header cambio los productos en pantalla
$category.forEach((element) => {
    element.addEventListener("click", (element) => {
        const option = DATA_BASE.filter(( { type } ) => type === element.target.dataset.option )
        showProducts(option)
    })
})


// === Funciones del Modal ===

// Quitamos items del carrito si su cantidad es 0
function removeEmptyItems(array) {
    let index = 0
    while (index < array.length) {
        if (array[index][`quantity`] === 0) {
            array.splice(index, 1)
        } else {
            index++
        }
    }
    return array
}


// Calculamos el total para mostrarse en el boton del modal
function calcTotal() {
    let total = carrito.reduce(( accum, value ) => {
        accum += (value.price * value.quantity)
        return accum
    }, 0) 
    $total_To_Pay.innerHTML = `$ ${total}` 
}


// Agregar contenido del modal
function modalBody() {
    let tableContent = ``
    let $plusButton
    let $lessButton

    removeEmptyItems(carrito)
    
    for (item of carrito) {
        let itemTemplate = `<tr>
                <td>${item.productName}</td>
                <td>$ ${item.price}</td>
                <td class="d-flex align-items-center justify-content-evenly">
                    <span class="material-icons-round unselectable" data-suma="suma" id="plus${item.id}">
                        add
                    </span>
                    <span class="unselectable"  id="quantity${item.id}">${item.quantity}</span>
                    <span class="material-icons-round unselectable" data-resta="resta" id="minus${item.id}">
                        remove
                    </span>
                </td>
            </tr>`

        tableContent += itemTemplate
    }
    
    $table_Body.innerHTML = tableContent

    carrito.forEach(( { id } ) => {
        $plusButton = document.getElementById(`plus${id}`)
        $lessButton = document.getElementById(`minus${id}`)
        $plusButton.addEventListener("click", (event) => resumen(id, event.target.dataset.suma))
        $lessButton.addEventListener("click", (event) => resumen(id, event.target.dataset.resta))
    })
    calcTotal()
}



// "resumen" me permite variar la cantidad de productos desde el modal

// Nota:
// action = accion a realizar (sumar o restar)
function resumen(id, action) {
    let $quantitySpan = document.getElementById(`quantity${id}`)
    const carritoItem = carrito.find( ( item ) => item.id === id)
    action === "suma" 
        ? carritoItem.quantity++ 
        : carritoItem.quantity--
    $quantitySpan.innerHTML = carritoItem.quantity
    calcTotal()
    modalBody()
}


// Guardamos la seleccion en el session storage
function saveSelection() {
    carrito_JSON = JSON.stringify(carrito)
    sessionStorage.setItem('COMIDA' ,carrito_JSON)
	window.location.href = '../confirm.html' 
}