import './NavBar.css';
import CartWidget from '../Cart Widget/CartWidget';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { database } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'
 
const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect (() => {
        
    (async () => {
        try {
            const querySnapshot = await getDocs(collection(database, 'categories'))
            const categories = querySnapshot.docs.map( doc => {
                return {id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        } catch (error) {
        console.log('error searching categories:', error)
        }
    })()
    }, [])
    return (
        <nav className="nav-bar">
            <div className="logo">
            <Link to={'/'}><h2>Flexbox Footwear</h2></Link>
            </div>
            <div>
                {categories.map(categ => <Link key={categ.id} to={`/categoria/${categ.id}`}><Button>{categ.descripcion}</Button></Link>)}
            </div>
            <Link to={'/cart'}><CartWidget /></Link>
        </nav>
    )
}

export default NavBar;