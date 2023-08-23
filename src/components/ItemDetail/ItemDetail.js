import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';
import './ItemDetail.css'




const ItemDetail = ({ id, Nombre, Img, Categoría, Descripción, Precio, Stock}) => {

    console.log(ItemDetail)

    const[quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, Nombre, Precio
        }

        addItem(item, quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {Nombre}
                </h2>
            </header>
            <picture>
                <img src={Img} alt={Nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {Categoría}
                </p>
                <p className="Info">
                    Descripción: {Descripción}
                </p>
                <p className="Info">
                    Precio: ${Precio}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to = '/cart' className="Option"><button type="button" className="btn btn-light">Terminar compra</button></Link>
                    ) : (
                        <ItemCount initial={1} Stock={Stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail