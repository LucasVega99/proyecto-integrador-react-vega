import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {getProducts} from '../../services/firebase'

const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    useEffect(() => {
        setLoading(true)
        getProducts('categoria', '==', categoryId).then(products => {
            setListaProductos(products)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
        return(() => {
            setListaProductos([])
        })
        
    }, [categoryId])

    
    if(loading) {
        return (
            <h1>Cargando</h1>
        )
    }

    return (
        <div className='itemListContainer'>
            <ItemList items={listaProductos}/>
        </div>
    )
}

export default ItemListContainer;