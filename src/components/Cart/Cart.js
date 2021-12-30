import { useState } from "react"
import { Link } from "react-router-dom"
import { UseCart } from '../../Functions/Context/CartContext'
import { database } from '../../services/firebase'
import { doc, addDoc, collection, getDoc, Timestamp, writeBatch } from 'firebase/firestore'
import './cart.css'

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)


    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: ''
    })


    const { cart, removeItem, clearCart, priceItem } = UseCart();


    const deleteItem = (id) => {
    removeItem(id)
    }


    const confirmOrder = () => {
        setProcessingOrder(true)

        const itemOrder = {
            items: cart,
            total: priceItem(),
            name: contact.name,
            phone: contact.phone,
            address: contact.address,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(database)
        const outOfStock = []

        itemOrder.items.forEach((prod) => {
            getDoc(doc(database, 'items', prod.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= prod.cantidad) {
                    batch.update(doc(database, 'items', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.cantidad
                    })
                } else {
                    outOfStock.push( {id: documentSnapshot.id, ...documentSnapshot.data()})
                }
            })
        });

        if(outOfStock.length === 0) {
            addDoc(collection(database, 'orders'), itemOrder).then(( {id} ) => {
                batch.commit().then(() => {
                    console.log('El id de su orden es: ', id)
                })
            }).catch((error) => {
                console.log(`error ejecutando la orden: ${error} `)
            }).finally(() => {
                clearCart()
                setProcessingOrder(false)
            })
        }
    }


    if (processingOrder) {
        return (
            <h2>Su pedido se esta procesando</h2>
        )
    }

    const submitData = (e) => {
        e.preventDefault()
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
            <h1>{`Total de productos: $${priceItem().toFixed(2)}`}</h1>
            <button className="btn-cart" onClick={clearCart}>Cancelar compra</button>
            <button className="btn-cart" onClick={confirmOrder}>Confirmar compra</button>
            </div>
            <div>
                <form onSubmit={submitData}>
                    <h3>Nombre y apellido</h3>
                    <input type='text' name="name" onChange={(e)=>setContact({...contact, name : e.target.value})} />
                    <h3>Teléfono celular:</h3>
                    <input type='text' name="phone" onChange={(e)=>setContact({...contact, phone : e.target.value})} />
                    <h3>E-mail</h3>
                    <input type='text' name="address" onChange={(e)=>setContact({...contact, address : e.target.value})} />
                    <button onClick={submitData}>Confirmar</button>
                </form>
                <div>
                    <h3> `Nombre y apellido: {contact.name}`</h3>
                    <h3>`Teléfono celular: {contact.phone}`</h3>
                    <h3>`E-mail: {contact.address}`</h3>
                </div>
            </div>
        </>
        )}
}
export default Cart