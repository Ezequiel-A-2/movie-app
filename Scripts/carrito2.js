// Las bases de datos (arrays) vienen de otro archivo
// Los nombres de las listas se encuentran en MAYUSCULAS (ej: COMBOS)


// === Declaracion de variables ===

// Nota: las variables iniciadas con el signo $ no es porque sea jQuery sino es para diferenciar entre las variables que estan relacionadas al DOM y aquellas que no.

const $food_container = document.getElementById("food-container")
const $category = document.querySelectorAll(".dropdown-item")
const carrito = []

// === Funciones === 


// Agregamos el item al carrito

function addToShopCart(list, itemId) {
    let item = list.find((list) => list["id"] === itemId)
    let { id, productName, price } = item
    const itemOnShopCart = carrito.find( ({ id }) => id === itemId)

    itemOnShopCart ? 
        itemOnShopCart.cantidad++ 
        : carrito.push({ id, productName, price, cantidad:1 })
    
    carrito.sort( (a , b) => a.id - b.id)
}

// Genero los productos a mostrar (por default se muestra COMBOS)

function showProducts(list = COMBOS) {
    let cards = `` // nota: si no tuviera el string me genera un objeto "undefined" al inicio
    let $botones

    for (item of list) {

        const template = `<div class="col">
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

        cards += template 
    }

    $food_container.innerHTML = cards // lo que logro usando cards es hacer una sola insercion al DOM y optimizo los tiempos de carga
    
    // lo malo de hacer una sola insercion es que debo agregar los eventListener luego de la insercion al DOM
    list.forEach( ({ id }) => {
        $botones = document.getElementById(`${id}`)
        $botones.addEventListener('click', (item) => {
            addToShopCart(list, Number(item.target.id))
        })
    })
}

showProducts()


// Usando la drop-list del header cambio los productos en pantalla

$category.forEach((element) => {
    element.addEventListener("click", (element) => {
        const option = DATA_BASE.filter( ({ type }) => type === element.target.dataset.option )
        showProducts(option)
    })
})



