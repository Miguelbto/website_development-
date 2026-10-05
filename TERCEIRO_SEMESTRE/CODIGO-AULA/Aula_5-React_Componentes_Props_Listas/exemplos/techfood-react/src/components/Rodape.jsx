// BÔNUS: rodapé com props e valor padrão.
// Se o App não mandar "ano", vale 2026.
function Rodape({ cidade, ano = 2026 }) {
  return (
    <footer className="rodape">
      TechFood — Sabor & Saber · {cidade} · {ano}
    </footer>
  );
}

export default Rodape;
