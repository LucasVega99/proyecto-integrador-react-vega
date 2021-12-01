import { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { obtenerProductos } from '../../Functions/Item';

const ItemListContainer = ({children}) => {
    const [listaProductos, setListaProductos] = useState([])
    useEffect(() => {
        const lista = obtenerProductos()

        lista.then(respuesta => {
            setListaProductos(respuesta)
        })
    }, [])
    return (
        <div>
            <ItemList items={listaProductos}/>
            {children}
            <ItemCount nombreProducto='Adidas Superstar' stock={25} />
            <ItemCount nombreProducto='Adidas Supernova' stock={15}/>
            <ItemCount nombreProducto='Nike Air Max 270' stock={25}/>
            <ItemCount nombreProducto='Nike Zoom Gravity' stock={5}/>
        </div>
    )
}

export default ItemListContainer;