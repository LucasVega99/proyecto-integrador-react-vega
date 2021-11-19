import './NavBar.css';
import Button from './Button';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="logo">
            <a><h2>Flexbox Footwear</h2></a>
            </div>
            ­<ul className="lista-nav">
                <a><li>Hombre</li></a>
                <a><li>Mujer</li></a>
                <a><li>Niños</li></a>
                <a><li>Deportes</li></a>
            </ul>
            <Button label='Ingresar' />
            <CartWidget />
        </nav>
    )
}

export default NavBar;