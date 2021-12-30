import './itemList.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const ItemList = ({items = []}) => {

    return (
        <div className='products-container'>
            {items.map( p =>
                <picture key={p.id} className='picture-item' >
                    <div><h3 >{p.nombre}</h3></div>
                    <div className='img-container'><img src={p.imagen} alt='img-product'/></div>
                    <div><p>${p.precio}</p></div> 
                    <Link to={`/detail/${p.id}`}><Button>Ver detalle</Button></Link>
                </picture>)}
        </div>
    )
}

export default ItemList