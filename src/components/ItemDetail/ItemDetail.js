import Button from '../Button/Button'
import { ButtonCount, InputCount } from '../../Functions/Contadores/ItemCount'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({item, inputType = 'input'}) => {
    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const [count, setCount] = useState(0)

    return (
        <div>
            {[item].map( o =>
                <div className='detalle-item'>
                    <div><h3 key={o.id}>{o.nombre}</h3></div>
                    <div className='contenedor-imagen-item'><img className='imagen-item' src={o.imagen} /> </div>
                    <div>
                        <p>{o.descripcion}</p>
                    </div>
                    <div><p>{o.precio}</p></div>
                    <ItemCount onConfirm={agregarAlCarrito} stock={o.stock} />
                    <div>
                        <Link to={'/cart'}><Button label='Comprar'/></Link>
                    </div>
                    
                </div>)}
        </div>
    )
}

export default ItemDetail;