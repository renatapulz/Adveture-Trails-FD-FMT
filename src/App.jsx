import CardTrilha from "./assets/components/CardTrilha/CardTrilha";

function App() {
  const listaTrilhas = [{
    nomeTrilha: "Trilha Lagoinha do Leste",
    cidade: "Florianópolis",
    estado: "SC",
    duracao: 120,
    trajeto: 1,
    dificuldade: "média/alta",
    tipo: "trekking",
    nomeUsuario: "Renata Pulz",
    UrlImage: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }]

  return (
    <div>
      {listaTrilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha} key={index} />
      ))}
    </div>
  );
}

export default App;
