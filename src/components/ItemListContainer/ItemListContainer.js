import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { obtenerProductos } from '../../Functions/Item';
import { obtenerCategorias } from '../../Functions/Item';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ItemListContainer = ({children}) => {
    const [listaProductos, setListaProductos] = useState([])
    const {idCategoria} = useParams()
    useEffect(() => {
        const lista = obtenerProductos()

        lista.then(respuesta => {
            setListaProductos(respuesta)
        })
    }, [])
    return (
        <div >
            {children}
            <ItemList items={listaProductos}/>
        </div>
    )
}

export default ItemListContainer;