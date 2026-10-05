import { useState } from "react";
import Header from "./components/Header";
import SecaoCardapio from "./components/SecaoCardapio";
import Rodape from "./components/Rodape";
import { cardapio } from "./data/cardapio";
import "./App.css";

// Lista com os nomes das categorias, na ordem em que aparecem na tela.
const categorias = ["Prato principal", "Sobremesa", "Bebida"];

function App() {
  // (igual à aula 4) total de itens do pedido
  const [totalItens, setTotalItens] = useState(0);

  function adicionarAoPedido(quantidade) {
    setTotalItens(totalItens + quantidade);
  }

  return (
    <main className="app">
      <Header totalItens={totalItens} />

      {/* Para cada categoria, uma SecaoCardapio só com os pratos daquela categoria */}
      {categorias.map((categoria) => (
        <SecaoCardapio
          key={categoria}
          titulo={categoria}
          pratos={cardapio.filter((prato) => prato.categoria === categoria)}
          onAdicionar={adicionarAoPedido}
        />
      ))}

      <Rodape cidade="Itu/SP" />
    </main>
  );
}

export default App;
