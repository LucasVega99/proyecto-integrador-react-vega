import { ShoppingCartOutlined } from '@ant-design/icons';
// import { UseCart } from '../../Functions/Context/CartContext';

const CartWidget = () => {

    return (
        <button className='boton-cart'><ShoppingCartOutlined style= {{   fontSize: '3rem', padding: '1rem'}}/>
            
        </button>
    )
};

export default CartWidget;