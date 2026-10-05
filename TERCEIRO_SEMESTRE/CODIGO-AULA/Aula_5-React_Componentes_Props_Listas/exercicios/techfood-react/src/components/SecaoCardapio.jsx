import CardPrato from "./CardPrato";

// Uma seção do cardápio (ex.: "Sobremesa"). Recebe o título e a LISTA de pratos por props.
function SecaoCardapio({ titulo, pratos, onAdicionar }) {
  return (
    <section className="secao">
      {/* TODO (E4): mostre a quantidade de pratos no título. Ex.: "Sobremesa (2)" */}
      <h2>{titulo}</h2>
      {/* TODO (D1 — desafio): se a lista pratos estiver vazia, mostre <p className="vazio">Em breve!</p>
          no lugar da grade (use ternário). Teste colocando "Entrada" nas categorias do App. */}
      <div className="cardapio">
        {pratos.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            vegetariano={prato.vegetariano}
            destaque={prato.destaque}
            disponivel={prato.disponivel}
            // TODO (E2 e E3): mande também picante e precoPromocional
            onAdicionar={onAdicionar}
          />
        ))}
      </div>
    </section>
  );
}

export default SecaoCardapio;
