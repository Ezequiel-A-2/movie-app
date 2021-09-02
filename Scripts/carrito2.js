// Las bases de datos (arrays) vienen de otro archivo
// Los nombres de las listas se encuentran en MAYUSCULAS (ej: COMBOS)


// === Declaracion de variables ===

// aclaracion: las variables iniciadas con el signo $ no es porque sea jQuery sino es para diferenciar entre las variables que estan relacionadas al DOM y aquellas que no.

const $food_container = document.getElementById("food-container")



// === Funciones === 


// Genero los productos a mostrar (por default se muestra COMBOS)
function showProducts(list = COMBOS) {
    let cards = ``

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
                        <button class="btn btn-primary" type="button">Comprar</button>
                    
                    </div>
                </div>
            </div>
        </div>`
        cards += template
        
    }

    $food_container.innerHTML = cards
}

showProducts()

function deleteProducts() {
    $food_container.innerHTML = ""
}