import ItemCount from '../Item Count/ItemCount'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { UseCart } from '../../Functions/Context/CartContext';
import './itemDetail.css'

const ItemDetail = ({item}) => {
    const [contador, setContador] = useState (0)

    const history = useHistory()

    const { addItem } = UseCart()
    
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

    const addProdCarrito = () => {
        const datoProd = {...item, cantidad: contador}

        addItem(datoProd)

        history.push('/cart')
    } 

    return (
        <div>
            {[item].map( o =>
                <div className='detalle-item' key={o.id}>
                    <div ><h3>{o.nombre}</h3></div>
                    <div className='contenedor-imagen-item'>
                        <img className='imagen-item' src={o.imagen} alt='product-img'/> 
                    </div>
                    <div>
                        <p>{o.descripcion}</p>
                    </div>
                    <div><p>${o.precio}</p></div>
                    <ItemCount restarCarrito={restarCarrito} sumarCarrito={sumarCarrito}/>
                    <p>{contador}</p>
                    <div>
                        {contador !== 0 && (
                        <button className='button' onClick={addProdCarrito}>Agregar Al carrito</button>)}
                    </div>
                </div>)}
        </div>
    )
}

export default ItemDetail;