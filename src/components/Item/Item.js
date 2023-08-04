

import { Link } from "react-router-dom"
const Item = ({id, name, img, price, stock}) => {

    return (
        <article className = "CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">Ver detalle</button>
            </footer>
            <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
        </article>


    )

}

export default Item