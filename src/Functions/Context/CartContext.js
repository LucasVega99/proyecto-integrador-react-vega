import React, {createContext, useContext, useState} from 'react'
const CreateCartContext = createContext()

export const UseCart = () => {
    return useContext(CreateCartContext);
};

export const CartContext = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (prod) => {
        if (!exists(prod.id)) {
            setCart([...cart, prod]);
        } else {
            cart.forEach((product, index) => {
            if (product.id === prod.id) {
                cart[index].cantidad = product.cantidad + prod.cantidad;
                setCart([...cart]);
            }
            });
        }
    }

    const exists = (id) => {
        const exist = cart.find((product) => product.id === id);
        return exist === undefined ? false : true;
    };

    const removeItem = (prod) => {
        if (exists) {
            const remove = cart.filter((producto) => producto.id !== prod)
            setCart(remove)
        }
        return setCart
    }

    const clearCart = () => {
        setCart([])
    }

    const priceItem = () => {
        let total = 0
        cart.forEach(({cantidad, precio}) => {
            total = total + cantidad * precio
        })
        return total
    }
    
    return (
        <CreateCartContext.Provider value={{cart, addItem, removeItem, clearCart, priceItem}}>
            {children}
        </CreateCartContext.Provider>
    )
}