import { ShoppingCartOutlined } from '@ant-design/icons';
import Button from '../Button/Button';

const CartWidget = () => {
    return (
       <Button><ShoppingCartOutlined style={{ fontSize: '3rem', padding: '1rem' }}/></Button> 
    )
};

export default CartWidget;