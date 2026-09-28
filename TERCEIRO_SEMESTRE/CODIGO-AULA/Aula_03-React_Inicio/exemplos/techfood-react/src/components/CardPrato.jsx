function CardPrato({ nome, preco, categoria }) {
  // Preparamos o valor ANTES do return (boa prática).
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="card-prato">
      <span className="categoria">{categoria}</span>
      <h2>{nome}</h2>
      <p className="preco">{precoFormatado}</p>
    </article>
  );
}

export default CardPrato;
