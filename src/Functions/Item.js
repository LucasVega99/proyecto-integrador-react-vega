const productos = [
    {
        id: 1,
        nombre: 'Nike Air Max 270',
        precio: '$120',
        imagen: '/imgs/nike-airforce-270.jpg',
        stock: 38,
        categoria: 'nike',
        descripcion: 'Actualiza tu pisada con las Nike Air Max 270 React SE. Aportan un toque de colores pastel para ofrecer un estilo divertido y veraniego. Los materiales superligeros, transpirables y sin costuras proporcionan un look moderno, al tiempo que la amortiguación Nike Air en la planta del pie añade elasticidad a cada pisada.'
    },
    {
        id: 2,
        nombre: 'Nike Zoom Gravity',
        precio: '$60',
        imagen: '/imgs/Nike-Zoom-Gravity-White.webp',
        stock: 25,
        categoria: 'nike',
        descripcion: 'Las Zapatillas Nike Air Zoom Gravity con una capellada completamente transpirable tienen un diseño elegante y estilizado para que luzcas a la moda mientras tus pisadas amortiguadas te dan velocidad y estabilidad mientras corres, entrenas o estas en tus actividades diarias.'
    },
    {
        id: 3,
        nombre: 'Adidas Superstar',
        precio: '$100',
        imagen: '/imgs/Zapatillas_Superstar_Blanco.jpg',
        stock: 12,
        categoria: 'adidas',
        descripcion: 'Originalmente creadas para las canchas de básquet en los 70. Usadas por la realeza del hip-hop en los 80. Hoy en día las zapatillas adidas Superstar representan a los amantes de la moda urbana. Su distintiva silueta con puntera con relieve sigue relevante, brindando estilo y protección. Tal cual cómo lo hizo en las canchas de básquet en sus comienzos.Hoy en día te permiten explorar la selva urbana con la tranquilidad de tener los dedos de los pies protegidos. Las 3 Tiras dentadas y el logo adidas Superstar encapsulado evocan el estilo del modelo original para completar tu look.'
    },
    {
        id: 4,
        nombre: 'Adidas Supernova M',
        precio: '$110',
        imagen: '/imgs/adidas=supernova.jpg',
        stock: 14,
        categoria: 'adidas',
        descripcion: 'Cumplí con tus objetivos uno por uno. Estas zapatillas de running adidas están diseñadas para que rompás tus marcas personales en cada salida a correr. La tecnología Boost en el antepié y el talón se combina con la amortiguación Bounce para ofrecerte una pisada balanceada y llena de energía. Llegó la hora de superar tus propias expectativas.'
    }
];

const categorias = [
    {id:'adidas', descripcion:'Adidas'},
    {id:'nike', descripcion:'Nike'},
]

export const obtenerCategorias = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categorias)
        }, 1000)
    })
}
export const obtenerProductos = (categoria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            categoria ? resolve(productos.filter(producto => producto.categoria === categoria)) : resolve(productos)
        }, 1000)
    })
}

export const obtenerItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const producto = productos.find(product => parseInt(product.id) === parseInt(id))
        setTimeout(()=> resolve(producto), 1000)
    })
}
