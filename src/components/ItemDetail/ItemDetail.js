import Button from '../Button/Button'

const ItemDetail = ({item}) => {
    return (
        <div>
            {item.map( o =>
                <div className='detalle-item'>
                    <div><h3 key={o.id}>{o.nombre}</h3></div>
                    <div className='contenedor-imagen-item'><img className='imagen-item' src={o.imagen} /> </div>
                    <div><p>Las Zapatillas Nike Air Zoom Gravity con una capellada completamente transpirable tienen un diseño elegante y estilizado para que luzcas a la moda mientras tus pisadas amortiguadas te dan velocidad y estabilidad mientras corres, entrenas o estas en tus actividades diarias.</p></div>
                    <div><p>{o.precio}</p></div>
                    <Button label='Comprar' />
                </div>)}
        </div>
    )
}

export default ItemDetail;