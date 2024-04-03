import PropTypes from 'prop-types';
import "./style.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

function CardTrilha({ dadosTrilha }) {
  return (
    <div className='card_container'>
      <img className='img_card' src={dadosTrilha.UrlImage} alt="Imagem trilha" />
      <div className='container-text'>
        <div className='titulo-card'>
          <h3>{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} / {dadosTrilha.estado}</h3>
          <FavoriteBorderIcon className='like' />
        </div>
        <p className='autor'>Por: {dadosTrilha.nomeUsuario}</p>
        <div className='infosAdicionais'>
          <p>Duração: {dadosTrilha.duracao} min</p>
          <p>Trajeto: {dadosTrilha.trajeto} km</p>
        </div>
        <div>
          <div className='etiqueta'>{dadosTrilha.dificuldade}</div>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

CardTrilha.propTypes = {
  dadosTrilha: PropTypes.exact({
    nomeTrilha: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    trajeto: PropTypes.number.isRequired,
    dificuldade: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    nomeUsuario: PropTypes.string.isRequired,
    UrlImage: PropTypes.string.isRequired,
  })
};

export default CardTrilha;