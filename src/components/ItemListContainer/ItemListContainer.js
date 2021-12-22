import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {collection, getDocs, query, where } from 'firebase/firestore'
import { database } from '../../services/firebase'

const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()

    useEffect(() => {
        if(!idCategoria) {
        setLoading(true)
        getDocs(collection(database, 'items')).then((QuerySnapshot) => {
            const products = QuerySnapshot.docs.map(doc => {
                return { id : doc.id, ...doc.data()}
            })
            setListaProductos(products)
        }).catch((error) => {
            console.log('error searching items', error)
        }).finally(() => {
            setLoading(false)
        })
    } else {
        
        setLoading(true)
        getDocs(query(collection(database, 'items'), where('category', '==', idCategoria))).then((QuerySnapshot) => {
            const products = QuerySnapshot.docs.map(doc => {
                return { id : doc.id, ...doc.data()}
            })
            setListaProductos(products)
        }).catch((error) => {
            console.log('error searching items', error)
        }).finally(() => {
            setLoading(false)
        })
    }
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