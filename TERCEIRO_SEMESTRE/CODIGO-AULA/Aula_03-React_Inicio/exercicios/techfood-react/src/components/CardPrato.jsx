function CardPrato({ nome, preco, categoria }) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="card-prato">
      <span className="categoria">{categoria}</span>
      <h2>{nome}</h2>
      <p className="preco">{precoFormatado}</p>
      {/* TODO (E3): receba a prop "descricao" (no topo, junto de nome/preco/categoria)
          e mostre aqui: <p className="descricao">{descricao}</p> */}
    </article>
  );
}

export default CardPrato;
