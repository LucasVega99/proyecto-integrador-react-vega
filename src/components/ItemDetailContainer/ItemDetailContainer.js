import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { database } from '../../services/firebase';

const ItemDetailContainer = () => {
    const [detalleProducto, setDetalleProducto] = useState([]);
    const [loading, setLoading] = useState(true)
    const { paramId } = useParams();
    
    useEffect(() => {
        setLoading(true)
        getDoc(doc(database, 'items', paramId)).then((QuerySnapshot) => {
            const product = {id: QuerySnapshot.id, ...QuerySnapshot.data()}
            setDetalleProducto(product)
        }).catch((error) => {
            console.log('Error searching item', error)
        }).finally(() => {
            setLoading(false)
        })
        
    }, [paramId])
    return (
        <div>
            {loading ? <h1> Loading </h1> : <ItemDetail item= {detalleProducto}/>}
        </div>
    )
}

export default ItemDetailContainer