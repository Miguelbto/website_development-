import { useState } from "react";

function CardPrato({ nome, preco, categoria, onAdicionar }) {
  const [quantidade, setQuantidade] = useState(1);
  // TODO (E2): crie um estado "curtidas" começando em 0.
  // TODO (E4): crie um estado "mostrarDescricao" começando em false.

  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function diminuir() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function aumentar() {
    // TODO (E3): não deixe a quantidade passar de 10.
    setQuantidade(quantidade + 1);
  }

  function adicionar() {
    onAdicionar(quantidade);
    setQuantidade(1);
  }

  return (
    <article className="card-prato">
      <span className="categoria">{categoria}</span>
      <h2>{nome}</h2>
      <p className="preco">{precoFormatado}</p>

      <div className="quantidade">
        <button type="button" onClick={diminuir} aria-label={`Diminuir quantidade de ${nome}`}>
          −
        </button>
        <span>{quantidade}</span>
        <button type="button" onClick={aumentar} aria-label={`Aumentar quantidade de ${nome}`}>
          +
        </button>
      </div>

      <button type="button" className="btn-adicionar" onClick={adicionar}>
        Adicionar ao pedido
      </button>

      {/* TODO (E2): botão "❤️ Curtir (N)" que soma 1 em curtidas. Use className="btn-secundario". */}
      {/* TODO (E4): botão "Ver descrição / Esconder" + {mostrarDescricao && <p className="descricao">...</p>} */}
    </article>
  );
}

export default CardPrato;
