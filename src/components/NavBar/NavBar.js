import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import logo from "../Assets/img/logo4.png"


const NavBar = () => {
    return (
      <header className="header">
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src={logo} width="50" alt="logo" /> Harmony's Music Store
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to={"/category/Guitarras"}>Guitarras</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/Bajos"}>
                      Bajos
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/Baterias"}>
                      Baterias
                    </NavLink>
                  </li>
                  <li className="nav-item">
                  <CartWidget />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  };


export default NavBar