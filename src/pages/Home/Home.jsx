import "./style.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="container-image">
                    <img className="image-principal" src="\src\assets\images\img-home.jpg"></img>
                    <div className="text-image">
                        <h1>Que tal aproveitar um tempo <br />com a natureza?</h1>
                        <p>Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!</p>
                        <Link to="/lista-trilhas"><button className="buttom-home">Explorar Trilhas</button></Link>
                    </div>
                </div>
            <div className="container">
                <section className="content">
                    <h1>Explore trilhas incríveis</h1>
                    <p>O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo.
                        Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas
                        majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e
                        dicas úteis para uma experiência eco-friendly.</p>
                    <Link to="/lista-trilhas"><button className="buttom-home">Explorar trilhas</button></Link>
                </section>
                <section className="content split-section">
                    <div className="conteudo-secao-2">
                        <h1>Compartilhe fotos,<br />dicas e localização das<br />suas trilhas favoritas</h1>
                        <Link to="/cadastro-trilhas"><button className="buttom-home buttom-register">Cadastrar nova trilha</button></Link>
                    </div>
                    <img className="image-section" src="\src\assets\images\img-section.jpg"></img>
                </section>
            </div>
        </div>
    )
}

export default Home;