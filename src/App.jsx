import CardTrilha from "./assets/components/CardTrilha/CardTrilha";
import Cabecalho from "./assets/components/header";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState(null);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState(null);

  useEffect (() => {
    fetch ('http://localhost:3000/trilhas')
    .then(response => {
      if (response.ok) {
      return response.json()
    }
    throw response;
  })
  .then(data => {
    console.log('Dados recebidos da API:', data);
    setData(data.trilhas);
  })
  .catch(error => {
    console.log("Erro na Api.", error);
    setError(error);
  })
  .finally(() => {
    setLoading(false);
  })
}, [])

  if(loading) return "Carregando...";
  if(error) return "Erro ao carregar as informações!";

  return (
    <div className="container">
      <Cabecalho />
      <h1 className="titulo">Explore Trilhas Incríveis</h1>
      {data !== null && data.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha} key={index} />
      ))}
    </div>
  );
}

export default App;
