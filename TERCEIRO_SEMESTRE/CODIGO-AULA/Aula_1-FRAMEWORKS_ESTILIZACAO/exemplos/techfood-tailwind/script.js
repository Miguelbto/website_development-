/* ==================================================
   Sabor & Saber — Cardápio dinâmico com Tailwind CSS
   
   O JavaScript é IDÊNTICO ao da versão Bootstrap.
   A única diferença: as classes CSS que aplicamos
   nos cards são Tailwind em vez de Bootstrap.
   
   Isso demonstra um ponto importante:
   o JS não sabe (nem precisa saber) qual framework
   CSS você está usando. Só muda os nomes das classes.
   ================================================== */


/* -----------------------------------------------------------
   Classe Prato — igual às aulas anteriores
   ----------------------------------------------------------- */
class Prato {
  constructor(nome, preco, categoria) {
    this.nome      = nome;
    this.preco     = preco;
    this.categoria = categoria;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
  }
}


/* -----------------------------------------------------------
   Cardápio (mock)
   ----------------------------------------------------------- */
const cardapio = [
  new Prato("Feijoada Completa",   42.90, "Prato Principal"),
  new Prato("Moqueca de Peixe",    58.00, "Prato Principal"),
  new Prato("Coxinha Artesanal",    8.50, "Petisco"),
  new Prato("Brigadeiro Gourmet",   6.00, "Sobremesa"),
  new Prato("Suco de Maracujá",    12.00, "Bebida"),
  new Prato("Bolinho de Bacalhau", 15.00, "Petisco"),
];


/* -----------------------------------------------------------
   Criar card — agora com classes TAILWIND
   
   COMPARATIVO das classes usadas:
   
   Bootstrap                     Tailwind
   ─────────────────────────────────────────────────
   p-4                    →      p-4         (igual!)
   bg-white               →      bg-white    (igual!)
   rounded-3              →      rounded-xl
   shadow-sm              →      shadow-sm   (igual!)
   h-100                  →      h-full
   fs-4 fw-bold           →      text-xl font-bold
   text-dark              →      text-gray-800
   fs-6                   →      text-sm
   text-muted             →      text-gray-500
   d-block mb-3           →      block mb-3  (igual!)
   fs-5 fw-bold           →      text-lg font-bold
   text-success           →      text-green-600
   ─────────────────────────────────────────────────
   
   Perceba: p-4, shadow-sm, block, mb-3 são iguais!
   Tailwind e Bootstrap compartilham várias convenções.
   ----------------------------------------------------------- */

const containerCardapio = document.querySelector('#cardapio');

function criarCardPrato(prato) {
  const card = document.createElement('article');
  // Classes Tailwind:
  // card-prato     = nossa classe custom (hover definido no input.css)
  // p-4            = padding interno (igual Bootstrap)
  // bg-white       = fundo branco
  // rounded-xl     = cantos arredondados (= rounded-3 do Bootstrap)
  // shadow-sm      = sombra suave (igual Bootstrap)
  // h-full         = altura 100% (= h-100 do Bootstrap)
  card.className = 'card-prato p-4 bg-white rounded-xl shadow-sm h-full';

  card.innerHTML = `
    <h3 class="text-xl font-bold text-gray-800 mb-2">${prato.nome}</h3>
    <span class="text-sm text-gray-500 block mb-3 categoria">${prato.categoria}</span>
    <div class="text-lg font-bold text-green-600">${prato.formatarPreco()}</div>
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
