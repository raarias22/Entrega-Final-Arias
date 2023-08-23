import { useState } from 'react';

const ItemCount = ({Stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < Stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
            <button type="button" class="btn btn-success" onClick={increment}>+</button>
                <h4 className='Number'>{quantity}</h4>
                <button type="button" class="btn btn-danger" onClick={decrement} >-</button>
            </div>
        <div> 
        <button type="button"
        onClick={() => onAdd(quantity)} disabled={!Stock} class="btn btn-primary">Agregar al carrito</button>
        </div>
    </div>
    )
}

export default ItemCount