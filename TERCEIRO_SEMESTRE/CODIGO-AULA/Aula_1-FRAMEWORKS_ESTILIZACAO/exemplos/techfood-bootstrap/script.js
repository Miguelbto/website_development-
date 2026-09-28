/* ==================================================
   Sabor & Saber — Cardápio dinâmico com Bootstrap
   
   Este JS é IGUAL ao da Aula 0 (Kickoff).
   A diferença: agora usamos classes Bootstrap ao criar
   cada card, em vez de CSS custom.
   
   O foco do 2º semestre inteiro continua sendo JAVASCRIPT.
   Bootstrap é só a "roupa" que a gente vestiu no HTML/CSS.
   ================================================== */


/* -----------------------------------------------------------
   Classe Prato — igual à Aula 0
   ----------------------------------------------------------- */
class Prato {
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
  }
}


/* -----------------------------------------------------------
   Cardápio (mock — em breve virá da API do Back-End)
   ----------------------------------------------------------- */
const cardapio = [
  new Prato("Feijoada Completa",  42.90, "Prato Principal"),
  new Prato("Moqueca de Peixe",   58.00, "Prato Principal"),
  new Prato("Coxinha Artesanal",   8.50, "Petisco"),
  new Prato("Brigadeiro Gourmet",  6.00, "Sobremesa"),
  new Prato("Suco de Maracujá",   12.00, "Bebida"),
  new Prato("Bolinho de Bacalhau", 15.00, "Petisco"),
];


/* -----------------------------------------------------------
   DOM — igual à Aula 0.
   O que MUDOU: as classes que aplicamos no card agora são
   utilities Bootstrap (col, p-3, mb-3, bg-white, rounded, shadow).
   ----------------------------------------------------------- */

const containerCardapio = document.querySelector('#cardapio');

function criarCardPrato(prato) {
  // O article absorve as classes de coluna diretamente — sem div wrapper extra.
  // Bootstrap funciona com qualquer elemento HTML, não só <div>.
  // article é semanticamente correto: cada prato é um conteúdo independente e reutilizável.
  const card = document.createElement('article');
  card.className = 'card-prato col-12 col-md-6 col-lg-4 p-4 bg-white rounded-3 shadow-sm';

  card.innerHTML = `
    <h3 class="fs-4 fw-bold text-dark mb-2">${prato.nome}</h3>
    <span class="categoria fs-6 d-block mb-3">${prato.categoria}</span>
    <div class="preco fs-5 fw-bold text-success">${prato.formatarPreco()}</div>
  `;

  card.addEventListener('click', () => {
    alert(
      `🍽️ ${prato.nome}\n\n` +
      `Categoria: ${prato.categoria}\n` +
      `Preço: ${prato.formatarPreco()}`
    );
  });

  return card;
}

function renderizarCardapio() {
  containerCardapio.innerHTML = '';
  cardapio.forEach(prato => {
    containerCardapio.appendChild(criarCardPrato(prato));
  });
}

renderizarCardapio();
