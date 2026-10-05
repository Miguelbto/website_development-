import { useState } from "react";
import Selo from './Selo'

export default function CardPrato({ name, price, category, onAdicionar, vegetariano = false, destaque = false, disponivel = true }) {

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

        <article className={destaque ? "card-prato destaque" : "card-prato"}>

            <span className="categoria">{category === "Sobremesa" ? '🍰' : category}</span>
            <div className="selos">
                {destaque && <Selo texto="Destaque" tipo="destaque" />}
                {vegetariano && <Selo texto="Vegetariano" tipo="veg" />}
                {!disponivel && <Selo texto="Esgotado" tipo="esgotado" />}
            </div>
            <p className="preco">{priceFormatado}</p>

            {disponivel ? (
                <>
                    <div className="quantidade">
                        <button type="button" onClick={decrease} aria-label={`Diminuir quantidade de ${name}`}>
                            −
                        </button>
                        <span>{priceFormatado}</span>
                        <button type="button" onClick={increase} aria-label={`Aumentar quantidade de ${name}`}>
                            +
                        </button>
                    </div>

                    <button type="button" className="btn-adicionar" onClick={add}>
                        Adicionar ao pedido
                    </button>
                </>
            ) : (
                <button type="button" className="btn-indisponivel" disabled>
                    Indisponível
                </button>
            )
            }

        </article>
    )
}

