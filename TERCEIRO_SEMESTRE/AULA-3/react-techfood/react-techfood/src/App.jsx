import CardPrato from "./components/CardPrato"
import Footer from "./components/Footer"
import Header from "./components/Header"



const cardapio = [
  {
    id: 1,
    name: "Feijoada",
    price: 42.90,
    description: "Feijoada muito recheada com bastante carne e tempero",
    category: "Prato principal",
  },

  {
    id: 2,
    name: "Moqueca",
    price: 49.90,
    description: "Moqueca muito recheada com bastante carne e tempero",
    category: "Prato principal",
  },

  {
    id: 3,
    name: "Brownie",
    price: "15.00",
    description: "Brownie muito chocolatudo com bastante sabor e sorvete",
    category: "Sobremesa",
  },
]

export default function App() {

  const contagemPratos = cardapio.length

  return (
    <main className="app">

      <Header />

      <section className="cardapio">

        <h3>Nosso cardapio exibe {contagemPratos} pratos</h3>

        {
          cardapio.map((p) => (
            <CardPrato
              key={p.id}
              name={p.name}
              price={p.price}
              description={p.description}
              category={p.category}
            />
          ))
        }
      </section>

      <Footer />
    </main>
  )
}