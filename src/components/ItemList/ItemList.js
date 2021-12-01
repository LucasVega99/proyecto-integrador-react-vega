import Button from '../Button/Button'

const ItemList = ({items}) => {

    return (
        <div>
        {items.map( o =>   
        <picture className='picture-item'>
            <div><h3 key={o.id}>{o.nombre}</h3></div>
            <img src={o.imagen} />
            <div><p>{o.precio}</p></div>
            <Button label='Ver detalle del producto' />
        </picture>)}
        </div>
    )
}

export default ItemList