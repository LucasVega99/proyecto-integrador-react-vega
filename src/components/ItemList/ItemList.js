import './itemList.css';

import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const ItemList = ({items = []}) => {

    return (
        <div className='products-container'>
            {items.map( p =>
                <picture className='picture-item'>
                    <div><h3 key={p.id}>{p.nombre}</h3></div>
                    <div className='img-container'><img src={p.imagen} /></div>
                    <div><p>{p.precio}</p></div> 
                    <Link to={`/detail/${p.id}`}><Button>Ver detalle</Button></Link>
                </picture>)}
        </div>
    )
}

export default ItemList