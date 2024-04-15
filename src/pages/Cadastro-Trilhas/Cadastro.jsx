import FormTrilha from "../../assets/components/forms/FomsTrilha";
import "./style.css";

function Cadastro () {
    return (
        <div className="tela-cadastro">
            <div className="container">
             <h1 className="titulo-cadastro">Cadastro de nova trilha</h1>
             <FormTrilha />
            </div>
        </div>
    )
}

export default Cadastro;