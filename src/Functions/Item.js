const productos = [
    {
        id: '1',
        nombre: 'Nike Air Max 270',
        precio: '$120',
        imagen: '/imgs/nike-airforce-270.jpg'
    },
    {
        id: '2',
        nombre: 'Nike Zoom Gravity',
        precio: '$60',
        imagen: '/imgs/Nike-Zoom-Gravity-White.webp'
    },
    {
        id: '3',
        nombre: 'Adidas Superstar',
        precio: '$100',
        imagen: '/imgs/Zapatillas_Superstar_Blanco.jpg'
    },
    {
        id: '4',
        nombre: 'Adidas Supernova M',
        precio: '$110',
        imagen: '/imgs/adidas=supernova.jpg'
    }
];

export const obtenerProductos = () => {
    return new Promise((resolve, reject) => {

        setTimeout(()=> resolve(productos), 2000)

    })
}

export const obtenerItem = () => {
    return new Promise((resolve, reject) => {
        
        setTimeout(()=> resolve(productos.slice(1, 2)), 2000)

    })
}