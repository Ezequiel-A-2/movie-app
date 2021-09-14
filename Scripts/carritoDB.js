const DATA_BASE = []



class Products {
    constructor(id, productName, title, type, price, image, description) {
        this.id = id
        this.productName = productName
        this.title = title
        this.type = type
        this.price = price
        this.image = `../resources/img/${image}`
        this.description = description
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

DATA_BASE.push(new Products(1, "Balde de Pochoclos", `Balde de pochoclos`, `popcorn`, 340, "balde.png", `1 Balde de pochoclos.`))

DATA_BASE.push(new Products(2, "Bolsa de Pochoclos", `Bolsa de Pochoclos`, `popcorn`, 290, "bolsa.png", `1 Bolsa de pochoclos mediana.`))

DATA_BASE.push(new Products(3, "Coca Mediana", `Vaso de Coca Mediano`, `drink`, 250, "bebida-coca.png", `1 Gaseosa tamaño medio 500 ml`))

DATA_BASE.push(new Products(4, "Coca Grande", `Vaso de Coca Grande`, `drink`, 270, "bebida-coca.png", `1 Gaseosa tamaño grande 750 ml`))

DATA_BASE.push(new Products(5, "Agua", `Botella de Agua`, `drink`, 150, "bebida-agua.png", `Botella de Agua`))

DATA_BASE.push(new Products(6, "Combo 1", `Combo 1`, `combo`, 520, "combo-1p.png", `1 balde de pochoclos + 1 gaseosa grande. `))

DATA_BASE.push(new Products(7, "Combo 2", `Combo 2`, `combo`, 755, "combo-2p.png", `Balde de pochoclos + 2 gaseosas grandes + 1 golosina.`))

DATA_BASE.push(new Products(8, "Combo 3", `Combo 3`, `combo`, 840, "combo-4p.png", `2 Bolsas de pochoclos medianas + 4 gaseosas medianas + 1 golosinas.`))

DATA_BASE.push(new Products(9, "Combo 4", `Combo 4`, `combo`, 390, "combo-nachos.png", `Nachos con queso + 1 gaseosa grande.`))

DATA_BASE.push(new Products(10, "Combo 5", `Combo 5`, `combo`, 340, "como-pancho.png", `1 Pancho + 1 gaseosa grande. `))

DATA_BASE.push(new Products(11, "Alfajor", `Alfajor`, `snack`, 120, "snack-alfajor.png", `Valor por unidad.`))

DATA_BASE.push(new Products(12, "Chocolate", `Chocolate`, `snack`, 250, "snack-milka.png", `Valor por unidad.`))

DATA_BASE.push(new Products(13, "Rocklets", `Paquete de Rocklets`, `snack`, 360, "snack-rocklets.png", `Valor por unidad.`))

DATA_BASE.push(new Products(14, "Sugus", `Paquete de Sugus`, `snack`, 130, "snack-sugus.png", `Valor por unidad.`))


// filtros de la base de datos

const COMBOS = DATA_BASE.filter( ({ type }) => type === `combo` )

// Las constants de abajo dejaron de cumplir su utilidad pero los dejo para debugear

// const POPCORN = DATA_BASE.filter( ({ type }) => type === `popcorn` )

// const DRINKS = DATA_BASE.filter( ({ type }) => type === `drink` )

// const SNACKS = DATA_BASE.filter( ({ type }) => type === `snack` )