// === Declaracion de constantes ===

const DATA_BASE = []


class Products {
    constructor({ id, productName, title, type, price, image, description }) {
        this.id = id
        this.productName = productName
        this.title = title
        this.type = type
        this.price = price
        this.image = `/resources/img/${image}`
        this.description = description
    }
}

/* 
Sintaxis:
    1) id: numero identificador del producto
    2) productName: nombre del producto delntro de la base de datos
    3) title: nombre a mostrar al cliente en la tarjeta
    4) type: tipo de producto para luego poder filtrar la categoria
    5) price: precio
    6) image: ruta a la imagen del archivo (actualmente estan en local)
    7) description: descripcion del producto para mostrar en la tarjeta
*/

// Unos cuantos push a la base de datos =)

DATA_BASE.push(new Products({
    id: 1, 
    productName: "Balde de Pochoclos", 
    title: `Balde de pochoclos`, 
    type: `popcorn`, 
    price: 340, 
    image: "balde.png", 
    description: `1 Balde de pochoclos.`
}))

DATA_BASE.push(new Products({
    id: 2, 
    productName: "Bolsa de Pochoclos", 
    title: `Bolsa de Pochoclos`, 
    type: `popcorn`, 
    price: 290, 
    image: "bolsa.png", 
    description: `1 Bolsa de pochoclos mediana.`
}))

DATA_BASE.push(new Products({
    id: 3, 
    productName: "Coca Mediana", 
    title: `Vaso de Coca Mediano`, 
    type: `drink`, 
    price: 250, 
    image: "bebida-coca.png", 
    description: `1 Gaseosa tamaño medio 500 ml`
}))

DATA_BASE.push(new Products({
    id: 4, 
    productName: "Coca Grande", 
    title: `Vaso de Coca Grande`, 
    type: `drink`, 
    price: 270, 
    image: "bebida-coca.png", 
    description: `1 Gaseosa tamaño grande 750 ml`
}))

DATA_BASE.push(new Products({
    id: 5, 
    productName: "Agua", 
    title: `Botella de Agua`, 
    type: `drink`, 
    price: 150, 
    image: "bebida-agua.png", 
    description: `Botella de Agua`
}))

DATA_BASE.push(new Products({
    id: 6, 
    productName: "Combo 1", 
    title: `Combo 1`, 
    type: `combo`, 
    price: 520, 
    image: "combo-1p.png", 
    description: `1 balde de pochoclos + 1 gaseosa grande.`
}))

DATA_BASE.push(new Products({
    id: 7, 
    productName: "Combo 2", 
    title: `Combo 2`, 
    type: `combo`, 
    price: 755, 
    image: "combo-2p.png", 
    description: `Balde de pochoclos + 2 gaseosas grandes + 1 golosina.`
}))

DATA_BASE.push(new Products({
    id: 8, 
    productName: "Combo 3", 
    title: `Combo 3`, 
    type: `combo`, 
    price: 840, 
    image: "combo-4p.png", 
    description: `2 Bolsas de pochoclos medianas + 4 gaseosas medianas + 1 golosinas.`
}))

DATA_BASE.push(new Products({
    id: 9, 
    productName: "Combo 4", 
    title: `Combo 4`, 
    type: `combo`, 
    price: 390, 
    image: "combo-nachos.png", 
    description: `Nachos con queso + 1 gaseosa grande.`}))

DATA_BASE.push(new Products({
    id: 10, 
    productName: "Combo 5", 
    title: `Combo 5`, 
    type: `combo`, 
    price: 340, 
    image: "como-pancho.png", 
    description: `1 Pancho + 1 gaseosa grande.`
}))

DATA_BASE.push(new Products({
    id: 11, 
    productName: "Alfajor", 
    title: `Alfajor`, 
    type: `snack`, 
    price: 120, 
    image: "snack-alfajor.png", 
    description: `Valor por unidad.`}))

DATA_BASE.push(new Products({
    id: 12, 
    productName: "Chocolate", 
    title: `Chocolate`, 
    type: `snack`, 
    price: 250, 
    image: "snack-milka.png", 
    description: `Valor por unidad.`
}))

DATA_BASE.push(new Products({
    id: 13, 
    productName: "Rocklets", 
    title: `Paquete de Rocklets`, 
    type: `snack`, 
    price: 360, 
    image: "snack-rocklets.png", 
    description: `Valor por unidad.`
}))

DATA_BASE.push(new Products({
    id: 14, 
    productName: "Sugus", 
    title: `Paquete de Sugus`, 
    type: `snack`, 
    price: 130, 
    image: "snack-sugus.png", 
    description: `Valor por unidad.`
}))


// El siguiente filtro es empleado para mostrar (por defecto) los combos en carrito.html

const COMBOS = DATA_BASE.filter( ({ type }) => type === `combo` )