import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import "./App.css";

// O "banco de dados" da tela: um array de objetos.
const cardapio = [
  { id: 1, nome: "Feijoada", preco: 42.9, categoria: "Prato principal" },
  { id: 2, nome: "Moqueca", preco: 49.9, categoria: "Prato principal" },
  { id: 3, nome: "Pudim", preco: 15.0, categoria: "Sobremesa" },
];

function App() {
  return (
    <main className="app">
      <Header />
      <section className="cardapio">
        {/* .map() gera um CardPrato para cada prato. key = id único. */}
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
