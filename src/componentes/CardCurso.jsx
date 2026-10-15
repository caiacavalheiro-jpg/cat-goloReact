function CardCurso({nome, duracao, modalidade, nivel, vagas }) {
  return (
    <>
    <br /><br /><br /><br />
        <h3>nome: {nome}</h3>
        <h3>duração: {duracao}</h3>
        <h3>modalidade: {modalidade}</h3>
        <h3>nível: {nivel}</h3>
        <h3>vagas: {vagas > 0? 'disponivel' : 'indisponivel'}</h3>
    </>
  )
}

export default CardCurso