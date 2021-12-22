import { Link } from "react-router-dom"
import { UseCart } from '../../Functions/Context/CartContext'
import './cart.css'

const Cart = () => {
const { cart, removeItem, clearCart, priceItem } = UseCart();

 const deleteItem = (id) => {
    removeItem(id)
 }

if (cart.length === 0) {
    return (
    <div>
        <h1>El carrito esta vacío </h1>
        <div>
            <Link to={'/'} ><button className="button">Volver al inicio</button></Link>
        </div>
    </div>)} else {
    return(
    <>
        <div><h2>Carrito de compras</h2></div> 
        <div className="cart-container">
            {cart.map((producto) => (
            <div key={producto.id} className="prod-detail">
                <button className='btn-remove-item' onClick={() => deleteItem(producto.id)}>x</button>
                <div>
                <div className='img-cart-container'><img src={producto.imagen} alt='img-product'/></div>
                </div>
                <div>{producto.nombre}</div>
                <div>{producto.cantidad} x ${producto.precio}</div>
                <div> {`Total: $${(producto.cantidad * producto.precio).toFixed(2)}`} </div>
            </div>
        ))}
        <h1>{`Total de productos: $${priceItem().toFixed(2)} `}</h1>
        <button className="btn-remove-cart" onClick={clearCart}> Eliminar todo</button>
        </div>
    </>
    )}
}

export default Cart