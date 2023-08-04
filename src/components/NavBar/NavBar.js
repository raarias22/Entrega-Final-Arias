import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"



const NavBar = () => {
    return (
        <nav class="navbar bg-body-tertiary">
            
            <div class="container-fluid">
                <Link to='/'>
                <h2>Harmonys</h2>
                </Link>
                <NavLink to={`/category/guitarras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}/>Guitarras
                <NavLink to={`/category/bajos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}/>Bajos
                <NavLink to={`/category/baterias`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}/>Baterias
            </div>
                <CartWidget/>
            
        </nav>

        



    )
}


export default NavBar