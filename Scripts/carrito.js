class Producto {
    constructor(id, nombre, precio, cantidad = 0, total = 0, enPantalla = false) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.total = total
        this.enPantalla = false
    }

    aggCantidad () {
        this.cantidad++
    }

    rmCantidad () { // futura implementacion
        this.cantidad--
    }

    calcTotalProducto () {
        this.total = this.precio * this.cantidad
    }

    mostrarProducto () {
        this.enPantalla = true
    }
}

const BASE_DE_DATOS = []

BASE_DE_DATOS.push(new Producto(0, "Balde de Pochoclos", 340))

BASE_DE_DATOS.push(new Producto(1, "Bolsa de Pochoclos", 290))

BASE_DE_DATOS.push(new Producto(2, "Coca Mediana", 250))

BASE_DE_DATOS.push(new Producto(3, "Coca Grande", 270))

BASE_DE_DATOS.push(new Producto(4, "Agua", 150))

BASE_DE_DATOS.push(new Producto(5, "Combo 1", 520))

BASE_DE_DATOS.push(new Producto(6, "Combo 2", 755))

BASE_DE_DATOS.push(new Producto(7, "Combo 3", 840))

BASE_DE_DATOS.push(new Producto(8, "Combo 4", 390))

BASE_DE_DATOS.push(new Producto(9, "Combo 5", 340))

BASE_DE_DATOS.push(new Producto(10, "Alfajor", 120))

BASE_DE_DATOS.push(new Producto(11, "Chocolate", 250))

BASE_DE_DATOS.push(new Producto(12, "Rocklets", 360))

BASE_DE_DATOS.push(new Producto(13, "Sugus", 130))

// === Llamados al documento === 

const LISTA_PRODUCTOS = document.getElementById("product-list")
const SUBTOTAL_TAG = document.getElementById("subtotal-tag")
const DISCOUNT_TAG = document.getElementById("discount-tag")
const PRICE_TAG = document.getElementById("price-tag")
const CHECK = document.getElementById("confirmacion")
const TAX_TAG = document.getElementById("tax-tag")

// === El siguiente llamado puede variar, por eso se usara LET

let CUPONES = document.getElementById("cupons")


// === Declaraciones de variables ===

const IVA = 0.21
const CUPONES_DISPONIBLES = [0, 0.1, 0.2, 0.25]
let descuento = 0
let valorCupon = 0
let impuestos = 0
let subtotal = 0
let total = 0
let accum = 0
let cupon = 0
let resultado = {}

// === Funciones ===

function confirmar() {
    swal({
        title: "Felicidades!",
        text: "Te enviaremos un e-mail con tu reserva!",
        icon: "success",
        button: "Aceptar",
    });
    CHECK.innerHTML = `Ya puedes cerrar esta pestaña`
}



function applyDiscount(valorCupon) { 
    descuento = CUPONES_DISPONIBLES[valorCupon]
    descuento = Number((subtotal * descuento).toFixed(2))
    return descuento
}

function applyTaxes(subtotal, impuesto) {
    return impuestos = Number((subtotal * impuesto).toFixed(2))
}

function calcTotal() {
    total = Number(subtotal + impuestos - descuento)
}

function saveFood(id) {
    return BASE_DE_DATOS[id].aggCantidad(), pagar()
}

function cancelar() {
    // Por el momento la mejor opcion que se me ocurrio fue recargar la pagina, 
    // en el futuro pensare en otra opcion mejor
    location.reload()
}

function agregarItem(id, nombre, cantidad, enPantalla) {
    if (enPantalla == false) {
        let addProduct
        BASE_DE_DATOS[id].mostrarProducto()
        addProduct = document.createElement("li")
        addProduct.setAttribute("class", "list-group-item")
        addProduct.setAttribute("id", id)
        addProduct.innerHTML = `${cantidad} ${nombre}`
        LISTA_PRODUCTOS.appendChild(addProduct)
    } else {
        let addProduct = document.getElementById(id)
        addProduct.innerHTML = `${cantidad} ${nombre}`
    }
}



function items() {
    let funcionFiltrado = BASE_DE_DATOS => BASE_DE_DATOS["total"] != 0
    RESUMEN_COMPRA = BASE_DE_DATOS.filter(funcionFiltrado)

    for (const COMPRA of RESUMEN_COMPRA) {
        agregarItem(
            COMPRA["id"], 
            COMPRA["nombre"],
            COMPRA["cantidad"],
            COMPRA["enPantalla"]
        )
    }
}
    
function pagar() {

    subtotal = 0
    for (let producto of BASE_DE_DATOS) {
        producto.calcTotalProducto()
        subtotal += producto["total"]
    }
    
    items()

    /* Resumen del pedido */
    SUBTOTAL_TAG.innerHTML = `$${subtotal}`
    
    applyTaxes(subtotal, IVA)
    TAX_TAG.innerHTML = `$${impuestos}`
    
    CUPONES = document.getElementById("cupons")
    valorCupon = Number(CUPONES.value)
    applyDiscount(valorCupon) 
    DISCOUNT_TAG.innerHTML = `$${descuento}`

    calcTotal()
    PRICE_TAG.innerHTML = `$${total}`

}

