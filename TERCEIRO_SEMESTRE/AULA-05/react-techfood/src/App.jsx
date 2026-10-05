import Footer from "./components/Footer"
import Header from "./components/Header"
import './App.css'
import { useState } from "react"
import SessaoCardapio from "./components/SessaoCardapio"
import { cardapio } from "./data/cardapio"


export default function App() {


  const [totalItens, setTotalItens] = useState(0)

  function adicionarAopedido(quantidade) {
    setTotalItens(totalItens + quantidade)
  }

  const categorias = ["Prato principal", "Sobremesa", "Bebida"]

  return (
    <main className="app">

      <Header totalItens={totalItens} />

      {categorias.map((categoria) => (
        <SessaoCardapio
          key={categoria}
          titulo={categoria}
          pratos={cardapio.filter((prato) => prato.category === categoria)}
          onAdicionar={adicionarAopedido}
        />
      )
      )}

      <Footer />
    </main>
  )
}