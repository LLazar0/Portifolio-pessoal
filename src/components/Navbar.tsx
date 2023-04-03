import React from "react";

function Navbar() {
    return (
        <header className="header">
            <a href="#" className="logo">Luki</a>

            <nav className="navbar">
                <a href="#" className="active">Home</a>
                <a href="#">Sobre Mim</a>
                <a href="#">Projetos</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    )
}

export default Navbar;