import './NavBar.css';
import CartWidget from '../Cart Widget/CartWidget';
import { Link } from 'react-router-dom';
import { obtenerCategorias } from '../../Functions/Item';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';

const NavBar = () => {
    const [categorias, setCategorias] = useState([])

    useEffect (() => {
        obtenerCategorias().then(categorias => {
            setCategorias(categorias)
        })
    }, [])
    return (
        <nav className="nav-bar">
            <div className="logo">
            <Link to={'/'}><h2>Flexbox Footwear</h2></Link>
            </div>
            <div>{categorias.map(categ => <Link key={categ.id} to={`/categoria/${categ.id}`}><Button>{categ.descripcion}</Button></Link>)}</div>
            <Link to={'/cart'}><CartWidget /></Link>
        </nav>
    )
}

export default NavBar;