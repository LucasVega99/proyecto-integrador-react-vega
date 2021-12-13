import React, {useState} from 'react';
import './ItemCount.css';

// detalle de los items 
const ItemCount = ({stock}) => {

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
            <div className='contador'>            
                <button className='boton-stock' onClick={restarCarrito}>-</button>
                <div>{contador}</div>
                <button className='boton-stock' onClick={sumarCarrito}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;