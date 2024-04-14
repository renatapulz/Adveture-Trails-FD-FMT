import FormTrilha from "../../assets/components/forms/FomsTrilha";
import "./style.css";

function Cadastro () {
    return (
        <div className="tela-cadastro">
            <h1 className="titulo-cadastro">Cadastro de nova trilha</h1>
            <FormTrilha />
        </div>
    )
}

export default Cadastro;