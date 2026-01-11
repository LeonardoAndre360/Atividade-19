import { useState } from 'react';
import CardProduto from './components/CardProduto';

function App() {
  const [adicionado, setAdicionado] = useState(false);

  const handleAdicionar = () => {
    setAdicionado(prev => !prev);
  };

  return (
    <div>
      <h1>Loja de Produtos</h1>
      <CardProduto 
        nome="Produto Exemplo" 
        preco={29.99} 
        adicionado={adicionado}
        onAdicionar={handleAdicionar}
      />
    </div>
  );
}

export default App;