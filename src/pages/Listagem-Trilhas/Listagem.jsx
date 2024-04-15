import CardTrilha from "../../assets/components/CardTrilha/CardTrilha.jsx";
import { TrilhasContext } from "../../hooks/TrilhasContext.jsx"
import { useContext } from "react";
import "./style.css";

function Listagem() {

  const { data, loading, error } = useContext(TrilhasContext)

  if (loading) return "Carregando...";
  if (error) return "Erro ao carregar as informações na tela!";

  return (
    <div>
      <img className="image-tela-lista-trilha" src="https://s3-alpha-sig.figma.com/img/d499/89ee/a6d23a7a9ffd6d136e430c855a72ebc0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCBgR7Pyqff8u8MSpH-UVgBRmgzDWPO89CvVWTUVK36oAJSDic0TFiF7MpDBbeQEgmTwR96kWtNSzFP2yEVfxEr6cKkR~I5g4vQ02vhX7lLrG0RYgiPsa8Nkv~1VCpK~C42quIejs4dZC7uZvGgPOe7y6A-SxuRsampbxZyfspUw3R372dO~GnpLnEfWoi44zMHxu~12qRqD3DiMCduubXZLxlpG1hDEsVuQc6F4TRB-XyV-vnlMj2iVsFx8-MIvocK2xE-jti4n~7r75dMhHLTVPy22FDNxcEiMZtxbJrQNXKIyagTyxYipldkopUnaY6~MGItO-Bdyipg~NBzatw__"></img>
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