import React from 'react';


export const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-secondary-light">Harmony's</a></li>
                    <li className="nav-item"><a href="/category/Guitarras" className="nav-link px-2 text-body-secondary-light">Guitarras</a></li>
                    <li className="nav-item"><a href="/category/Bajos" className="nav-link px-2 text-body-secondary-light">Bajos</a></li>
                    <li className="nav-item"><a href="/category/Baterias" className="nav-link px-2 text-body-secondary-light">Baterias</a></li>
                </ul>
                <p className="text-center text-body-secondary-white">&copy; 2023 Harmony's, Inc</p>
            </footer>
        </div>
    )
}

export default Footer

