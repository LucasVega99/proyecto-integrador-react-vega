import { useState, useEffect } from 'react';
import {  obtenerItemPorId } from '../../Functions/Item';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [detalleProducto, setDetalleProducto] = useState([]);
    const { paramId } = useParams();
    console.log(detalleProducto)
    
    useEffect(() => {
        obtenerItemPorId(paramId).then(item => {
            setDetalleProducto(item)
            console.log(item)
        }).catch(err => {
            console.log(err)
        })
        
    }, [paramId])
    return (
        <div>
            <ItemDetail item= {detalleProducto}/>
        </div>
    )
}

export default ItemDetailContainer