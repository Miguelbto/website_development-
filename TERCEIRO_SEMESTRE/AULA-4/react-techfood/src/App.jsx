import CardPrato from "./components/CardPrato"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { cardapio } from "./data/cardapio"
import './App.css'
import { useState } from "react"


export default function App() {

  const contagemPratos = cardapio.length

  const [totalItens, setTotalItens] = useState(0)

  function adicionarAopedido(quantidade) {
    setTotalItens(totalItens + quantidade)
  }

  return (
    <main className="app">

      <Header totalItens={totalItens} />

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
              Onclick={adicionarAopedido}
            />
          ))
        }
      </section>

      <Footer />
    </main>
  )
}