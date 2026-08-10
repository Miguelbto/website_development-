class Prato {
  constructor(nome, preco, categoria) {
    // 1. Correção nas atribuições do constructor
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }

  aplicarDesconto(percentual) {
    this.preco = this.preco * (1 - percentual / 100);
  }
}



const cardapio = [
  new Prato("Feijoada completa", 42.9, "Prato principal"),
  new Prato("Moqueca de peixe", 52.9, "Prato principal"),
  new Prato("Coxinha artesanal", 8.9, "Petisco"),
  new Prato("Brigadeiro gourmet", 12.9, "Sobremesa"),
  new Prato("Suco de laranja", 42.9, "Bebida"),
];

console.log("-----Pratos criados-----");
cardapio.forEach((p) => {
  console.log(`${p.nome} -> ${p.formatarPreco()}`);
});

const containerCardapio = document.querySelector("#cardapio");

// 2. Nome alinhado com a chamada (criarCardPrato)
function criarCardPrato(prato) {
  const card = document.createElement("div");
  card.className = "card-prato col-12 col-md-6 col-lg-4 p-4 bg-white rounded-3 shadow-sm";

  card.innerHTML = `
    <h3 class="fs-4 fw-bold text-dark mb-2">${prato.nome}</h3>
    <span class="categoria fs-6 d-block mb-3">${prato.categoria}</span>
    <div class="preco fs-5 fw-bold text-success">${prato.formatarPreco()}</div>
  `;

  card.addEventListener("click", () => {
    alert(`${prato.nome}`);
  });

  // 3. Adicionado o return para entregar o elemento criado
  return card; 
}

function renderizarCardapio() {
  if (!containerCardapio) return; // Proteção caso o elemento HTML não exista na página

  containerCardapio.innerHTML = "";

  cardapio.forEach((prato) => {
    const card = criarCardPrato(prato);
    containerCardapio.appendChild(card);
  });
}

renderizarCardapio();