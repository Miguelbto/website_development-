import { useState } from "react";
import Selo from "./Selo";

// vegetariano, destaque e disponivel têm VALOR PADRÃO: se o pai não mandar, valem false / false / true.
// TODO (E2): receba a prop picante (valor padrão false).
// TODO (E3): receba a prop precoPromocional.
function CardPrato({ nome, preco, vegetariano = false, destaque = false, disponivel = true, onAdicionar }) {
  // (igual à aula 4) cada card guarda a sua própria quantidade
  const [quantidade, setQuantidade] = useState(1);

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
    setQuantidade(quantidade + 1);
  }

  function adicionar() {
    onAdicionar(quantidade);
    setQuantidade(1);
  }

  return (
    // Ternário no className: prato em destaque ganha a classe "destaque" (borda vermelha)
    <article className={destaque ? "card-prato destaque" : "card-prato"}>
      <h3>{nome}</h3>

      {/* && = só mostra o selo SE a condição for verdadeira */}
      <div className="selos">
        {destaque && <Selo texto="Destaque" tipo="destaque" />}
        {vegetariano && <Selo texto="Vegetariano" tipo="veg" />}
        {!disponivel && <Selo texto="Esgotado" tipo="esgotado" />}
        {/* TODO (E2): selo "Picante" (tipo="picante") só quando picante for true */}
      </div>

      {/* TODO (E3): ternário — se tiver precoPromocional, mostre o preço antigo riscado
          (<s className="preco-antigo">) e o promocional; senão, só o preço normal. */}
      <p className="preco">{precoFormatado}</p>

      {/* Ternário = mostra UMA coisa OU outra: com estoque, os botões; sem estoque, o aviso */}
      {disponivel ? (
        <>
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
        </>
      ) : (
        <button type="button" className="btn-indisponivel" disabled>
          Indisponível
        </button>
      )}
    </article>
  );
}

export default CardPrato;
