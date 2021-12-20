import Button from '../Button/Button'
import ItemCount from '../Item Count/ItemCount'
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { UseCart } from '../../Functions/Context/CartContext';

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
        console.log(item)
        addItem(datoProd)
        console.log('Producto agregado al carrito')
        history.push('/cart')
    } 
    
    return (
        <div>
            {[item].map( o =>
                <div className='detalle-item' >
                    <div key={o.id}><h3>{o.nombre}</h3></div>
                    <div className='contenedor-imagen-item'>
                        <img className='imagen-item' src={o.imagen} alt='product-img'/> 
                    </div>
                    <div>
                        <p>{o.descripcion}</p>
                    </div>
                    <div><p>{o.precio}</p></div>
                    <ItemCount restarCarrito={restarCarrito} sumarCarrito={sumarCarrito}/>
                    <p>{contador}</p>
                    <div>
                        {contador !== 0 && (
                        <Link to={'/cart'}><Button onClick={addProdCarrito}>Agregar Al carrito</Button></Link>)}
                    </div>
                </div>)}
        </div>
    )
}

export default ItemDetail;