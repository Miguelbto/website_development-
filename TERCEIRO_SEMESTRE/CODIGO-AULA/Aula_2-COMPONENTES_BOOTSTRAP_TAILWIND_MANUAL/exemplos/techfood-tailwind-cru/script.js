/* ============================================================
   TechFood — script.js (Tailwind — Componentes — CRU)

   LIVE CODE — PASSO 2: preencher className e innerHTML
   com as classes Tailwind equivalentes aos componentes Bootstrap.
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
  const card = document.createElement('article');

  /*
    LIVE CODE — preencher className com Tailwind:

    Bootstrap: class="card h-100"
    Tailwind:  class="bg-white rounded-xl shadow-sm flex flex-col h-full card-prato"

    O Tailwind não tem card-body, card-footer, card-title.
    Você descreve o layout diretamente.
  */
  card.className = '';

  /*
    LIVE CODE — preencher innerHTML com estrutura Tailwind:

    Equivalente do card-body + card-footer Bootstrap:

    card.innerHTML = `
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="font-bold text-xl mb-1">${prato.nome}</h3>
        <p class="text-gray-500 text-sm mb-2">${prato.categoria}</p>
        <p class="font-bold text-green-600 text-lg mb-4">${prato.formatarPreco()}</p>
        <button class="mt-auto bg-red-600 text-white rounded-lg py-2 px-4
                       hover:bg-red-700 transition-colors"
                onclick="abrirModal('${prato.nome}', '${prato.categoria}',
                                    '${prato.formatarPreco()}', '${prato.descricao}')">
          Ver detalhes
        </button>
      </div>
    `;
  */
  card.innerHTML = `
    <div class="p-4">
      <h3>${prato.nome}</h3>
      <span>${prato.categoria}</span>
      <div>${prato.formatarPreco()}</div>
    </div>
  `;

  return card;
}

function renderizarCardapio() {
  containerCardapio.innerHTML = '';
  cardapio.forEach(prato => {
    containerCardapio.appendChild(criarCardPrato(prato));
  });
}

renderizarCardapio();

/*
  LIVE CODE — Modal no Tailwind:
  Tailwind não tem modal pronto. Opções:
  1. JS puro (mostrar/esconder com classList)
  2. DaisyUI (componente modal Tailwind-friendly)
  3. Headless UI (para React)

  Versão simples com JS puro:

  function abrirModal(nome, categoria, preco, descricao) {
    document.getElementById('modalNome').textContent      = nome;
    document.getElementById('modalCategoria').textContent = categoria;
    document.getElementById('modalPreco').textContent     = preco;
    document.getElementById('modalDescricao').textContent = descricao;
    document.getElementById('modal').classList.remove('hidden');
  }

  function fecharModal() {
    document.getElementById('modal').classList.add('hidden');
  }
*/
