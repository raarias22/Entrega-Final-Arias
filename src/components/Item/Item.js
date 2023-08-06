import './Item.css'
import { Link } from "react-router-dom"
const Item = ({id, name, img, price, stock}) => {

    return (
        
        <article className = "CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture className = "img">
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section className="footer">
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            
            <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </section>
        </article>
       

        


    )

    

}

export default Item

