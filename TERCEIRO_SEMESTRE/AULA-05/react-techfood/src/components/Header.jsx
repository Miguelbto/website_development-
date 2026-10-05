

export default function Header({ totalItens }) {
    return (
        <header className="header">
            <h1>techfood - Sabor&Saber</h1>
            <p>Onde a culinaria encontra a inteligência</p>

            <p className="carrinho">itens no pedido:{totalItens}</p>
        </header>
    )
}