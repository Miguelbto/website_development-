class Bebida {
    constructor(nome, preco, volume){
        this.nome = nome
        this.preco = preco
        this.volume = volume
    }

    descricao() {
        return `${this.nome} - ${this.volume}ml - R$ ${this.preco}`
    }

    emLitros() {
        return `${(this.volume / 1000).toFixed(2)}`
    }

}

const bebidas = [
    new Bebida('suco de laranja', 10.9, 900),
    new Bebida('suco de maracuja', 8.9, 850),
    new Bebida('Coca cola', 9.9, 500)
]

console.log("--bebidas criadas---")
bebidas.forEach(b => {
    console.log(`${b.nome} -> ${b.emLitros()}`)
})

const containerLista = document.querySelector('#lista-bebidas')

function criarListaBebidas(bebida){
    const card = document.createElement('div')
    card.className = 'card'

    card.innerHTML = `
    <h3>${bebida.nome}</h3>
    <span class="categoria">${bebida.preco}</span>
    <div class="preco">${bebida.emLitros()}</div>`

    card.addEventListener('click', () => {
        alert(`${bebida.nome} foi clicado(a)`)
    })

    return card
}

function renderizarListaBebida(){
    if (!containerLista) return 

    containerLista.innerHTML = ''

    bebidas.forEach(b => {
        const card = criarListaBebidas(b)
        containerLista.appendChild(card)
    })
}

renderizarListaBebida()