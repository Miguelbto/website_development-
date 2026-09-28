import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import "./App.css";
// TODO (E2): depois de criar o Rodape.jsx, importe ele aqui.

const cardapio = [
  { id: 1, nome: "Feijoada", preco: 42.9, categoria: "Prato principal" },
  { id: 2, nome: "Moqueca", preco: 49.9, categoria: "Prato principal" },
  { id: 3, nome: "Pudim", preco: 15.0, categoria: "Sobremesa" },
  // TODO (E1): adicione mais 2 pratos aqui (com id, nome, preco, categoria).
];

function App() {
  return (
    <main className="app">
      <Header />
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
          />
        ))}
      </section>
      {/* TODO (E2): use aqui o seu <Rodape /> */}
    </main>
  );
}

export default App;
