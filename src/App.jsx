import CardTrilha from "./assets/components/CardTrilha/CardTrilha";
import "./App.css";

function App() {
  const listaTrilhas = [{
    nomeTrilha: "Trilha Lagoinha do Leste",
    cidade: "Florianópolis",
    estado: "SC",
    duracao: 120,
    trajeto: 1,
    dificuldade: "Alta",
    tipo: "trekking",
    nomeUsuario: "Renata Pulz",
    UrlImage: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }]

  return (
    <div className="container">
      <h1 className="titulo">Explore Trilhas Incríveis</h1>
      {listaTrilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha} key={index} />
      ))}
    </div>
  );
}

export default App;
