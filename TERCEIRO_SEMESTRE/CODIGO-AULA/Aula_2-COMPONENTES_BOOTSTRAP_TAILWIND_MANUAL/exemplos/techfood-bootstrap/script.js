/* ============================================================
   TechFood — script.js (Bootstrap — Componentes — COMPLETO)
   ============================================================ */

class Prato {
  constructor(nome, preco, categoria, descricao) {
    this.nome      = nome;
    this.preco     = preco;
    this.categoria = categoria;
    this.descricao = descricao;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
  }
}

const cardapio = [
  new Prato("Feijoada Completa",  42.90, "Prato Principal", "Feijão preto, carnes, couve e farofa."),
  new Prato("Moqueca de Peixe",   58.00, "Prato Principal", "Peixe fresco no leite de coco."),
  new Prato("Coxinha Artesanal",   8.50, "Petisco",         "Massa crocante, recheio cremoso."),
  new Prato("Brigadeiro Gourmet",  6.00, "Sobremesa",       "Brigadeiro com cobertura especial."),
  new Prato("Suco de Maracujá",   12.00, "Bebida",          "Polpa natural, sem conservantes."),
];

const containerCardapio = document.querySelector('#cardapio');

function criarCardPrato(prato) {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-6 col-lg-4';

  const card = document.createElement('article');
  card.className = 'card-prato card h-100';

  // Componente card do Bootstrap com botão que abre o modal
  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title fw-bold">${prato.nome}</h5>
      <p class="card-text text-muted">${prato.categoria}</p>
      <p class="card-text fs-5 fw-bold text-success">${prato.formatarPreco()}</p>
    </div>
    <div class="card-footer bg-transparent border-top-0 pb-3">
      <button class="btn btn-danger w-100"
              data-bs-toggle="modal"
              data-bs-target="#modalPrato"
              data-nome="${prato.nome}"
              data-categoria="${prato.categoria}"
              data-preco="${prato.formatarPreco()}"
              data-descricao="${prato.descricao}">
        Ver detalhes
      </button>
    </div>
  `;

  col.appendChild(card);
  return col;
}

function renderizarCardapio() {
  containerCardapio.innerHTML = '';
  cardapio.forEach(prato => {
    containerCardapio.appendChild(criarCardPrato(prato));
  });
}

renderizarCardapio();

// Conecta os dados do prato ao modal quando ele é aberto
// O evento show.bs.modal dispara antes da animação de abertura
document.addEventListener('show.bs.modal', (event) => {
  const btn  = event.relatedTarget;
  if (!btn) return;

  document.getElementById('modalNome').textContent      = btn.getAttribute('data-nome');
  document.getElementById('modalCategoria').textContent = btn.getAttribute('data-categoria');
  document.getElementById('modalPreco').textContent     = btn.getAttribute('data-preco');
  document.getElementById('modalDescricao').textContent = btn.getAttribute('data-descricao');
});
