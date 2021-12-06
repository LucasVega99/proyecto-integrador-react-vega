import Button from '../Button/Button'

const ItemDetail = ({item}) => {
    return (
        <div>
            {item.map( o =>
                <div className='detalle-item'>
                    <div><h3 key={o.id}>{o.nombre}</h3></div>
                    <div className='contenedor-imagen-item'><img className='imagen-item' src={o.imagen} /> </div>
                    <div><p>{o.precio}</p></div>
                    <Button label='Comprar' />
                </div>)}
        </div>
    )
}

export default ItemDetail;