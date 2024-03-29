import PropTypes from 'prop-types';

function CardTrilha({ dadosTrilha }) {
  return (
    <div>
      <h1>{dadosTrilha.nomeTrilha}</h1>
      <p>Cidade: {dadosTrilha.cidade}</p>
      <p>Estado: {dadosTrilha.estado}</p>
      <p>Duração: {dadosTrilha.duracao} minutos</p>
      <p>Trajeto: {dadosTrilha.trajeto}</p>
      <p>Dificuldade: {dadosTrilha.dificuldade}</p>
      <p>Tipo: {dadosTrilha.tipo}</p>
      <p>Nome do Usuário: {dadosTrilha.nomeUsuario}</p>
      <img width={200} src={dadosTrilha.UrlImage} alt="Imagem trilha" />
    </div>
  );
}

CardTrilha.propTypes = {
  dadosTrilha: PropTypes.shape({
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