import './ItemCount.css';

const ItemCount = ({sumarCarrito, restarCarrito}) => {
    return(
        <>
            <div className='contador'>            
                <button className='boton-stock' onClick={restarCarrito}>-</button>
                <button className='boton-stock' onClick={sumarCarrito}>+</button>
            </div>
        </>
    )
}

export default ItemCount