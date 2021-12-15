import React, {useState} from 'react';
import './ItemCount.css';
import Button from '../../components/Button/Button';

export const InputCount = ({onConfirm, stock}) => {
    const [contador, setContador] = useState (0);

    const handleChange = ({target}) => {
        if(target.value <= stock && target.value >= 0) {
            setContador(target.value)
        }
    }

    return(
        <>
        <input type='number' onChange={handleChange} value={contador} />
        <Button onClick={() => onConfirm(contador)}>Agregar al carrito</Button>
        </>
    )
}


export const ButtonCount = ({onConfirm, stock}) => {

    const [contador, setContador] = useState (0);

    const restarCarrito = () => {
        if (contador > stock) {
            setContador (contador - 1)
        }
    }
    const sumarCarrito = () => {
        if (contador < stock) {
            setContador (contador + 1)
        } 
    }

    return(
        <>
            <div className='contador'>            
                <button className='boton-stock' onClick={restarCarrito}>-</button>
                <div>{contador}</div>
                <button className='boton-stock' onClick={sumarCarrito}>+</button>
            </div>
            <Button onClick={() => onConfirm=(contador)}>Agregar al carrito</Button>
        </>
    )
}