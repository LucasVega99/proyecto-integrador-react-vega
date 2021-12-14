import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { obtenerProductos } from '../../Functions/Item'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([])
    const { idCategoria } = useParams()

    useEffect(() => {
        obtenerProductos(idCategoria).then(item => {
            setListaProductos(item)
        }).catch(err => {
            console.log(err)
        })
        return(() => {
            setListaProductos([])
        })
        
    }, [idCategoria])
    return (
        <div className='itemListContainer'>
            <ItemList items={listaProductos}/>
        </div>
    )
}

export default ItemListContainer;