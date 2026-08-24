/* TechFood — script.js (Tailwind — Componentes — COMPLETO) */

class Prato {
  constructor(nome, preco, categoria, descricao) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    this.descricao = descricao;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
  }
}

const cardapio = [
  new Prato("Feijoada Completa", 42.90, "Prato Principal", "Feijão preto, carnes, couve e farofa."),
  new Prato("Moqueca de Peixe", 58.00, "Prato Principal", "Peixe fresco no leite de coco."),
  new Prato("Coxinha Artesanal", 8.50, "Petisco", "Massa crocante, recheio cremoso."),
  new Prato("Brigadeiro Gourmet", 6.00, "Sobremesa", "Brigadeiro com cobertura especial."),
  new Prato("Suco de Maracujá", 12.00, "Bebida", "Polpa natural, sem conservantes."),
];

const containerCardapio = document.querySelector('#cardapio');

function criarCardPrato(prato) {
  const card = document.createElement('article');

  // Tailwind: flex-col + h-full para os cards ficarem do mesmo tamanho
  card.className = 'bg-white rounded-xl shadow-sm flex flex-col h-full card-prato';

  card.innerHTML = `
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="font-bold text-xl mb-1">${prato.nome}</h3>
      <p class="text-gray-500 text-sm mb-2">${prato.categoria}</p>
      <p class="font-bold text-green-600 text-lg mb-4">${prato.formatarPreco()}</p>
      <button class="mt-auto bg-red-600 text-white rounded-lg py-2 px-4
                     hover:bg-red-700 transition-colors font-medium"
              data-nome="${prato.nome}"
              data-categoria="${prato.categoria}"
              data-preco="${prato.formatarPreco()}"
              data-descricao="${prato.descricao}"
              onclick="abrirModal(this)">
        Ver detalhes
      </button>
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

// Modal com JS puro — Tailwind não tem modal embutido
function abrirModal(btn) {
  document.getElementById('modalNome').textContent = btn.getAttribute('data-nome');
  document.getElementById('modalCategoria').textContent = btn.getAttribute('data-categoria');
  document.getElementById('modalPreco').textContent = btn.getAttribute('data-preco');
  document.getElementById('modalDescricao').textContent = btn.getAttribute('data-descricao');
  document.getElementById('modal').classList.remove('hidden');
}

function fecharModal() {
  document.getElementById('modal').classList.add('hidden');
}

// Fechar clicando fora do modal
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) fecharModal();
});
