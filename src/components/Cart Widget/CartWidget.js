import { ShoppingCartOutlined } from '@ant-design/icons';

const CartWidget = () => {
    return (
       <button className='boton-cart'><ShoppingCartOutlined style= {{   fontSize: '3rem', padding: '1rem'}}/></button>
    )
};

export default CartWidget;