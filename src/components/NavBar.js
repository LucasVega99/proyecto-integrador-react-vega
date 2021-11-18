import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <h2>Flexbox Footwear</h2>
            </div>
            ­<ul className="lista-nav">
                <a><li>Hombre</li></a>
                <a><li>Mujer</li></a>
                <a><li>Niños</li></a>
                <a><li>Deportes</li></a>
                <div className="drop-down-menu">
                    <div className="drop-down-menu-content">
                        <a href="">Running</a>
                        <a href="">Urbano</a>
                        <a href="">Futbol</a>
                        <a href="">Training</a>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;