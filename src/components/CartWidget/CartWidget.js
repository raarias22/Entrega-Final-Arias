import carrito from './assets/cart.svg';
import '../CartWidget/CartWidget.css';


const CartWidget = () => {
    return (
        <div className='carrito'>
        <img src={carrito} alt="cart-widget"/>
        0
        </div>
    )
}

export default CartWidget

