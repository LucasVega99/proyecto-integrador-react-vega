import React, {useState} from 'react';
import Button from './Button'
import './ItemCount.css'

const ItemCount = ({nombreProducto, stock}) => {

    const [contador, setContador] = useState (1);

    const restarCarrito = () => {
        if (contador > 1) {
            setContador (contador - 1)
        }
    }
    const sumarCarrito = () => {
        if (contador < stock) {
            setContador (contador + 1)
        } 
    }

    return(
        <div className='sumarItemCarrito'>
            <h3>{nombreProducto}</h3>
            <button onClick={restarCarrito}>-</button>
            <div>{contador}</div>
            <button onClick={sumarCarrito}>+</button>
            <Button label='Agregar al carrito'/>
        </div>
    )
}

export default ItemCount;