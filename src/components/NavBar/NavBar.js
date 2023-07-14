import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav class="navbar bg-body-tertiary">
            
            <div class="container-fluid">
                <h2>Harmonys</h2>
                <button class="btn btn-outline-primary me-2" type="button">Guitarras</button>
                <button class="btn btn-outline-success me-2" type="button">Bajos</button>
                <button class="btn btn-outline-danger me-2" type="button">Teclados</button>
                <CartWidget/>
            </div>
            
        </nav>

        



    )
}


export default NavBar