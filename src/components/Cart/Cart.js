import { Link } from "react-router-dom"
import { UseCart } from '../../Functions/Context/CartContext'

const Cart = () => {
    const { cart, addItem, removeItem } = UseCart();
    console.log(cart)
    return(
    <>
        <h2>Cart</h2>
            {cart === 0 ? <div>
                El carrito esta vacío 
                <div>
                    <Link to={'/'}>Volver al inicio</Link>
                </div>
            </div> :
            cart.map((producto) => (
            <div key={producto.id} className="prod-detail">
                <div>{producto.name}</div>
                <div>
                <img className='imagen-item' src={producto.imagen} alt='product-img'/>
                </div>
                <div>{producto.cantidad} x {producto.precio}</div>
            </div>
        ))}
    </>
    )
}

export default Cart