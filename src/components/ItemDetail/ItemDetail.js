import Button from '../Button/Button'
import ItemCount from '../Item Count/ItemCount'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({item}) => {
    const [contador, setContador] = useState (0);

    const sumarCarrito = () => {
        if (contador < item.stock) {
            const valor = contador + 1
            setContador(valor)
        } 
    }

    const restarCarrito = () => {
        if (contador > 0) {
            const valor = contador - 1 
            setContador (valor)
        }
    }

    return (
        <div>
            {[item].map( o =>
                <div className='detalle-item'>
                    <div><h3 key={o.id}>{o.nombre}</h3></div>
                    <div className='contenedor-imagen-item'>
                        <img className='imagen-item' src={o.imagen} /> 
                    </div>
                    <div>
                        <p>{o.descripcion}</p>
                    </div>
                    <div><p>{o.precio}</p></div>
                    <ItemCount restarCarrito={restarCarrito} sumarCarrito={sumarCarrito}/>
                    <p> {contador} </p>
                    <div>
                    {contador !== 0 && (<Link to={'/cart'}><Button>Comprar</Button></Link>)}
                    </div>
                </div>)}
        </div>
    )
}

export default ItemDetail;