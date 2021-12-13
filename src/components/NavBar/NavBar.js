import './NavBar.css';
import CartWidget from '../Cart Widget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="logo">
            <Link to={'/'}><h2>Flexbox Footwear</h2></Link>
            </div>
            <Link to={'/'} className='opcion'>Todos los productos</Link>
            <Link to={'/Adidas'} className='opcion'>Adidas</Link>
            <Link to={'/Nike'} className='opcion'>Nike</Link>
            <CartWidget />
        </nav>
    )
}

export default NavBar;