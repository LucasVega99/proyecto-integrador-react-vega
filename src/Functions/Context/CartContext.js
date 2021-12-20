import React, {createContext, useContext, useState} from 'react'

const CreateCartContext = createContext()

export const UseCart = () => {
    return useContext(CreateCartContext);
};

export const CartContext = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
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

    const removeItem = (id) => {
        const remove = cart.filter((item) => item.id !== id)
        setCart(remove)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CreateCartContext.Provider value={{cart, addItem, removeItem}}>
            {children}
        </CreateCartContext.Provider>
    )
}