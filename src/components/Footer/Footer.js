import React from 'react';


export const Footer = () => {
    return (
        <div class="container">
            <footer class="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" class="nav-link px-2 text-secondary-light">Harmony's</a></li>
                    <li className="nav-item"><a href="/category/Guitarras" class="nav-link px-2 text-body-secondary-light">Guitarras</a></li>
                    <li className="nav-item"><a href="/category/Bajos" class="nav-link px-2 text-body-secondary-light">Bajos</a></li>
                    <li className="nav-item"><a href="/category/Baterias" class="nav-link px-2 text-body-secondary-light">Baterias</a></li>
                </ul>
                <p class="text-center text-body-secondary-white">&copy; 2023 Harmony's, Inc</p>
            </footer>
        </div>
    )
}

export default Footer

