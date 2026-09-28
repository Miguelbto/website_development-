import { useState } from "react";


export default function CardPrato({ name, price, description, category, onAdicionar }) {

    const numericValue = Number(price) || 0

    const priceFormatado = numericValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const [quantidade, setQuantidade] = useState(1)

    function decrease() {
        if (quantidade > 1) {
            setQuantidade(prev => prev - 1)
        } else {
            console.log('Mínima quantidade possível')
        }
    }

    function increase() {
        if (quantidade <= 9) {
            setQuantidade(prev => prev + 1)
        } else return
    }

    function add() {
        onAdicionar(quantidade)
        setQuantidade(1)
    }

    return (

        <article className="card-prato">
            <span className="categoria">{category === "Sobremesa" ? '🍰' : category}</span>
            <h2 className="name">{name}</h2>
            <h6 className="description">{description}</h6>
            <p className="price">{priceFormatado}</p>
            <div className="quantidade">
                <span aria-label="value" className="quantity">{quantidade}</span>
                <button className=".btn-secundario" onClick={increase}>Curtir ❤️</button>
            </div>
            <button className="add" onClick={add}></button>

        </article>
    )
}