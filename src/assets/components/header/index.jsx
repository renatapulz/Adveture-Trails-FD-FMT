import "./style.css";

function Cabecalho() {
    return (
        <header className="header">
            <div className="titulo-header">Adventure Trails FD</div>
            <nav>
                <ul className="menu">
                    <li><a href="#">Explorar Trilhas</a></li>
                    <li><a href="#">Cadastrar Trilhas</a></li>
                </ul>
            </nav>
        </header>
    ) 
}

export default Cabecalho;