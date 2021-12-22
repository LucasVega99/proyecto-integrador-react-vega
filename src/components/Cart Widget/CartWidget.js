import { ShoppingCartOutlined } from '@ant-design/icons';
import { UseCart } from '../../Functions/Context/CartContext';

const CartWidget = () => {
    const { cart } = UseCart()

    return (
        <button className='boton-cart'>
            <ShoppingCartOutlined style= {{   fontSize: '3rem', padding: '1rem'}}/>
            {cart.length}
        </button>
    )
};

export default CartWidget;