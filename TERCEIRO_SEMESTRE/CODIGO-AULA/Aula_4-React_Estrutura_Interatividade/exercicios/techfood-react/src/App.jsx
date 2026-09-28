import { useState } from "react";
import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import { cardapio } from "./data/cardapio";
import "./App.css";

function App() {
  const [totalItens, setTotalItens] = useState(0);
  // TODO (D2 — desafio): crie um estado "totalValor" para somar o valor do pedido em R$.

  function adicionarAoPedido(quantidade) {
    setTotalItens(totalItens + quantidade);
  }

  // TODO (D1 — desafio): crie a função limparPedido() que zera o total e passe para o Header.

  return (
    <main className="app">
      <Header totalItens={totalItens} />
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            onAdicionar={adicionarAoPedido}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
