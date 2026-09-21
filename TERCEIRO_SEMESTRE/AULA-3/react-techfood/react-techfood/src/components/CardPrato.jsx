

export default function CardPrato({ name, price, description, category }) {

    const numericValue = Number(price) || 0

    const priceFormatado = numericValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


    return (
        <article className="card-prato">
            <span className="categoria">{category === "Sobremesa" ? '🍰' : category}</span>
            <h2 className="name">{name}</h2>
            <h6 className="description">{description}</h6>
            <p className="price">{priceFormatado}</p>
        </article>
    )
}