import './Item.css'
import { Link } from "react-router-dom"
const Item = ({ id, name, img, price, stock }) => {

    return (
        <div className="container fluid">
            <div className='row'>
                <div className='col-md'>
                    <div className='card'>
                        <div className='card-body'>
                            <article className="CardItem">
                                <h4 className='card-title'>
                                    <header className="Header">
                                        <h2 className="ItemHeader">
                                            {name}
                                        </h2>
                                    </header>
                                </h4>
                                <picture className="img">
                                    <img src={img} alt={name} className="ItemImg" />
                                </picture>
                                <div className='card-text'>
                                    <section className="footer">
                                        <p className="Info">
                                            Precio: ${price}
                                        </p>
                                        <p className="Info">
                                            Stock disponible: {stock}
                                        </p>

                                        <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
                                    </section>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )





}

export default Item

