import "./style.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="container-image">
                    <img className="image-principal" src="https://s3-alpha-sig.figma.com/img/d499/89ee/a6d23a7a9ffd6d136e430c855a72ebc0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCBgR7Pyqff8u8MSpH-UVgBRmgzDWPO89CvVWTUVK36oAJSDic0TFiF7MpDBbeQEgmTwR96kWtNSzFP2yEVfxEr6cKkR~I5g4vQ02vhX7lLrG0RYgiPsa8Nkv~1VCpK~C42quIejs4dZC7uZvGgPOe7y6A-SxuRsampbxZyfspUw3R372dO~GnpLnEfWoi44zMHxu~12qRqD3DiMCduubXZLxlpG1hDEsVuQc6F4TRB-XyV-vnlMj2iVsFx8-MIvocK2xE-jti4n~7r75dMhHLTVPy22FDNxcEiMZtxbJrQNXKIyagTyxYipldkopUnaY6~MGItO-Bdyipg~NBzatw__"></img>
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
                    <img className="image-section" src="https://s3-alpha-sig.figma.com/img/749a/d3cd/b59b552226c32b61fb8ba0ba617adccb?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NGwjSnDaaKjKexnlWu1ilnUx6YJb1BX6YieK~FC2nlRpPiOasMRO~AP3FP45EnCtHAZ7p2I~2jTq3P1GvnJ0jouuxFzflK6SBchxsbYzVzfXKiNhhz6tE7ahAT8zig2kt9whVF5d0KEUyt5axCosM15nhnXy43DIBsY6sXhHtXyfFYaai1ucxjdWf2x3aBHsYkXV6PMLsmEbhdLR4Bt8dzoiPgywb63o5rgUFm7HitTMI9I0MlEnT-6piPXEvZm7YZfRen1kTsHf99~tSueQdaIpBOheAiufn4e3KVQoHaq8IZhpv~KGtJZ7tvIAXAcotvxenDlM7lKeK~uovykcYQ__"></img>
                </section>
            </div>
        </div>
    )
}

export default Home;