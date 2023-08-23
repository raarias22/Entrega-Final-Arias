import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cart, clearCart, totalQuantity} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Harmony's</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id}{...p}/>)}
            <button onClick={() => clearCart() } className="btn btn-light">Limpiar carrito</button>
            <Link to = '/checkout' className= 'Option'><button type="button" class="btn btn-info">Checkout</button></Link> 
        </div>
    )
}

export default Cart