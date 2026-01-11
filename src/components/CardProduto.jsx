import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const NomeProduto = styled.h2`
  font-size: 1.5em;
  margin-bottom: 8px;
  color: #333;
`;

const PrecoProduto = styled.p`
  font-size: 1.2em;
  margin-bottom: 16px;
  color: #007bff;
  font-weight: bold;
`;

const BotaoAdicionar = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  color: white;
  background-color: ${props => props.adicionado ? '#198754' : '#6c757d'};
  &:hover {
    opacity: 0.9;
  }
`;

function CardProduto({ nome, preco, adicionado, onAdicionar }) {
  return (
    <CardContainer>
      <NomeProduto>{nome}</NomeProduto>
      <PrecoProduto>R$ {preco.toFixed(2)}</PrecoProduto>
      <BotaoAdicionar 
        adicionado={adicionado}
        onClick={onAdicionar}
      >
        Adicionar ao carrinho
      </BotaoAdicionar>
    </CardContainer>
  );
}

export default CardProduto;