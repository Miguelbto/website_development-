function Header({ totalItens }) {
  return (
    <header className="header">
      <h1>TechFood — Sabor & Saber</h1>
      <p>O sabor que ensina</p>
      <p className="carrinho">Itens no pedido: {totalItens}</p>
      {/* TODO (D1 — desafio): botão "Limpar pedido" que zera o total.
          Dica: receba uma prop onLimpar e use onClick={onLimpar}. */}
    </header>
  );
}

export default Header;
