import Button from '../Button/Button'

const ItemList = ({items}) => {

    return (
        <div>
            {items.map( p =>
                <picture className='picture-item'>
                    <div><h3 key={p.id}>{p.nombre}</h3></div>
                    <img src={p.imagen} />
                    <div><p>{p.precio}</p></div>
                    <Button label='Ver detalle del producto' />
                </picture>)}
        </div>
    )
}

export default ItemList