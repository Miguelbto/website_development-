import CardPrato from "./CardPrato";

// Uma seção do cardápio (ex.: "Sobremesa"). Recebe o título e a LISTA de pratos por props.
function SecaoCardapio({ titulo, pratos, onAdicionar }) {
  return (
    <section className="secao">
      <h2>{titulo}</h2>
      <div className="cardapio">
        {pratos.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            vegetariano={prato.vegetariano}
            destaque={prato.destaque}
            disponivel={prato.disponivel}
            onAdicionar={onAdicionar}
          />
        ))}
      </div>
    </section>
  );
}

export default SecaoCardapio;
