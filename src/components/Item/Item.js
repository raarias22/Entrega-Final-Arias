import './Item.css'
import { Link } from "react-router-dom"
const Item = ({id, Categoría, Descripción, Img, Nombre, Precio, Stock }) => {

    return (
        <div className="container text-center">
            <div className='row align-items-start'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>
                            <article className="CardItem">
                                <h4 className='card-title'>
                                    <header className="Header">
                                        <h2 className="ItemHeader">
                                            {Nombre}
                                        </h2>
                                    </header>
                                </h4>
                                <picture className="img">
                                    <img src={Img} alt={Nombre} className="ItemImg" />
                                </picture>
                                <div className='card-text'>
                                    <section className="footer">
                                        <p className="Info">
                                            Precio: ${Precio}
                                        </p>
                                        <p className="Info">
                                            Stock disponible: {Stock}
                                        </p>
                                        <Link to={`/item/${id}` } className='Option'><button type="button" class="btn btn-info">Ver detalles</button></Link>
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

