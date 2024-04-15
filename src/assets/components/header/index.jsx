import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header className="background-header">
            <div className="container">
                <div className="header">
                    <div><Link to="/" className="link-menu">Adventure Trails FD</Link></div>
                    <nav>
                        <ul className="menu">
                            <li><Link to="/lista-trilhas" className="link-menu">Explorar Trilhas</Link></li>
                            <li><Link to="/cadastro-trilhas" className="link-menu">Cadastrar Trilhas</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavBar;