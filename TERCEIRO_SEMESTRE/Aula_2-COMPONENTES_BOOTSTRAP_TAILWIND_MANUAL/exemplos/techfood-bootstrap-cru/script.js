/* ============================================================
   TechFood — script.js (Bootstrap — Componentes)
   Base: Aula 0 + Aula 1. O que MUDA: usar componente card
   do Bootstrap no innerHTML em vez de HTML manual.
   ============================================================ */

class Prato {
  constructor(nome, preco, categoria, descricao) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    this.descricao = descricao;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }
}

const cardapio = [
  new Prato(
    "Feijoada Completa",
    42.9,
    "Prato Principal",
    "Feijão preto, carnes, couve e farofa.",
  ),
  new Prato(
    "Moqueca de Peixe",
    58.0,
    "Prato Principal",
    "Peixe fresco no leite de coco.",
  ),
  new Prato(
    "Coxinha Artesanal",
    8.5,
    "Petisco",
    "Massa crocante, recheio cremoso.",
  ),
  new Prato(
    "Brigadeiro Gourmet",
    6.0,
    "Sobremesa",
    "Brigadeiro com cobertura especial.",
  ),
  new Prato(
    "Suco de Maracujá",
    12.0,
    "Bebida",
    "Polpa natural, sem conservantes.",
  ),
];

const containerCardapio = document.querySelector("#cardapio");

function criarCardPrato(prato) {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4";

  const card = document.createElement("article");
  card.className = "card-prato card h-100";

  /*
    LIVE CODE — PASSO 2:
    Trocar o innerHTML abaixo pelo componente Bootstrap:

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

    ///////

    card.innerHTML = `
    <div class="p-4">
      <h3>${prato.nome}</h3>
      <span>${prato.categoria}</span>
      <div>${prato.formatarPreco()}</div>
    </div>
  `;
  
  */

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
  containerCardapio.innerHTML = "";
  cardapio.forEach((prato) => {
    containerCardapio.appendChild(criarCardPrato(prato));
  });
}

renderizarCardapio();



  document.addEventListener('show.bs.modal', (event) => {
    const btn    = event.relatedTarget;
    const nome   = btn.getAttribute('data-nome');
    const cat    = btn.getAttribute('data-categoria');
    const preco  = btn.getAttribute('data-preco');
    const desc   = btn.getAttribute('data-descricao');

    document.getElementById('modalNome').textContent      = nome;
    document.getElementById('modalCategoria').textContent = cat;
    document.getElementById('modalPreco').textContent     = preco;
    document.getElementById('modalDescricao').textContent = desc;
  });

