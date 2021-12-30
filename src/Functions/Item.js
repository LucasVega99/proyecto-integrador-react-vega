const categorias = [
    {id:'adidas', description:'Adidas'},
    {id:'nike', description:'Nike'},
]

export const obtenerCategorias = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categorias)
        }, 1000)
    })
}
// export const obtenerProductos = (categoria) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             categoria ? resolve(productos.filter(producto => producto.categoria === categoria)) : resolve(productos)
//         }, 1000)
//     })
// }

// export const obtenerItemPorId = (id) => {
//     return new Promise((resolve, reject) => {
//         const producto = productos.find(product => parseInt(product.id) === parseInt(id))
//         setTimeout(()=> resolve(producto), 1000)
//     })
// }
