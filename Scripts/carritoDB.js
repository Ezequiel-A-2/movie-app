const DATA_BASE = []



class Products {
    constructor(id, productName, title, type, price, image, description) {
        this.id = id
        this.productName = productName
        this.title = title
        this.type = type
        this.price = price
        this.image = image
        this.description = description // descripcion para tarjeta
    }
}

/* 
Orden de sintaxis:
    1) id: numero identificador del producto
    2) productName: nombre del producto delntro de la base de datos
    3) title: nombre a mostrar al cliente en la tarjeta
    4) type: tipo de producto para luego poder filtrar la categoria
    5) price: precio
    6) image: ruta a la imagen del archivo (actualmente estan en local)
    7) description: descripcion del producto para mostrar en la tarjeta
*/

DATA_BASE.push(new Products(0, "Balde de Pochoclos", `Balde de pochoclos`, `popcorn`, 340, "../resources/img/balde.png", `1 Balde de pochoclos.`))

DATA_BASE.push(new Products(1, "Bolsa de Pochoclos", `Bolsa de Pochoclos`, `popcorn`, 290, "../resources/img/bolsa.png", `1 Bolsa de pochoclos mediana.`))

DATA_BASE.push(new Products(2, "Coca Mediana", `Vaso de Coca Mediano`, `drink`, 250, "../resources/img/bebida-coca.png", `1 Gaseosa tamaño medio 500 ml`))

DATA_BASE.push(new Products(3, "Coca Grande", `Vaso de Coca Grande`, `drink`, 270, "../resources/img/bebida-coca.png", `1 Gaseosa tamaño grande 750 ml`))

DATA_BASE.push(new Products(4, "Agua", `Botella de Agua`, `drink`, 150, "../resources/img/bebida-agua.png", `Botella de Agua`))

DATA_BASE.push(new Products(5, "Combo 1", `Combo 1`, `combo`, 520, "../resources/img/combo-1p.png", `1 balde de pochoclos + 1 gaseosa grande. `))

DATA_BASE.push(new Products(6, "Combo 2", `Combo 2`, `combo`, 755, "../resources/img/combo-2p.png", `Balde de pochoclos + 2 gaseosas grandes + 1 golosina.`))

DATA_BASE.push(new Products(7, "Combo 3", `Combo 3`, `combo`, 840, "../resources/img/combo-4p.png", `2 Bolsas de pochoclos medianas + 4 gaseosas medianas + 1 golosinas.`))

DATA_BASE.push(new Products(8, "Combo 4", `Combo 4`, `combo`, 390, "../resources/img/combo-nachos.png", `Nachos con queso + 1 gaseosa grande.`))

DATA_BASE.push(new Products(9, "Combo 5", `Combo 5`, `combo`, 340, "../resources/img/como-pancho.png", `1 Pancho + 1 gaseosa grande. `))

DATA_BASE.push(new Products(10, "Alfajor", `Alfajor`, `snack`, 120, "../resources/img/snack-alfajor.png", `Valor por unidad.`))

DATA_BASE.push(new Products(11, "Chocolate", `Chocolate`, `snack`, 250, "../resources/img/snack-milka.png", `Valor por unidad.`))

DATA_BASE.push(new Products(12, "Rocklets", `Paquete de Rocklets`, `snack`, 360, "../resources/img/snack-rocklets.png", `Valor por unidad.`))

DATA_BASE.push(new Products(13, "Sugus", `Paquete de Sugus`, `snack`, 130, "../resources/img/snack-sugus.png", `Valor por unidad.`))


// filtros de la base de datos

const COMBOS = DATA_BASE.filter( ({ type }) => type === `combo` )

// Los de abajo dejaron de cumplir su utilidad pero los dejo para hacer debugear

// const POPCORN = DATA_BASE.filter( ({ type }) => type === `popcorn` )

// const DRINKS = DATA_BASE.filter( ({ type }) => type === `drink` )

// const SNACKS = DATA_BASE.filter( ({ type }) => type === `snack` )