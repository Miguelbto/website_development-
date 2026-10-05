import CardPrato from "./CardPrato"

export default function SessaoCardapio({ titulo, pratos, onAdicionar }) {


    return (
        <section className="secao">
            <h2 className="titulo-secao">{titulo}</h2>
            <div className="cardapio">
                {
                    pratos.map((p) => (
                        <CardPrato
                            key={p.id}
                            name={p.name}
                            price={p.price}
                            description={p.description}
                            category={p.category}
                            vegetariano={p.vegetariano}
                            destaque={p.destaque}
                            disponivel={p.disponivel}
                            Onclick={onAdicionar}
                        />
                    ))
                }
            </div>
        </section>
    )
}