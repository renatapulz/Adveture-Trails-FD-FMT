import CardTrilha from "../../assets/components/CardTrilha/CardTrilha.jsx";
import { TrilhasContext } from "../../hooks/TrilhasContext.jsx"
import { useContext } from "react";
import "./style.css";
import ImagemListagem from "./../../assets/images/img-listagem.jpg";

function Listagem() {

  const { data, loading, error } = useContext(TrilhasContext)

  if (loading) return "Carregando...";
  if (error) return "Erro ao carregar as informações na tela!";

  return (
    <div>
      <img className="image-tela-lista-trilha" src={ImagemListagem} />
      <div className="container">
        <div className="container-listagem">
          <h1 className="titulo">Explore Trilhas Incríveis</h1>
          {data !== null && data.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Listagem;