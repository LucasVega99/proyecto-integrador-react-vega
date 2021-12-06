import { useState, useEffect } from 'react';
import { obtenerItem } from '../../Functions/Item';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({children}) => {
    const [detalleProducto, setDetalleProducto] = useState([])
    useEffect(() => {
        const producto = obtenerItem()

        producto.then(respuesta => {
            setDetalleProducto(respuesta)
        })
    }, [])
    return (
        <div>
            {children}
            <ItemDetail item= {detalleProducto}/>
        </div>
    )
}

export default ItemDetailContainer