/* ============================================
   Sabor & Saber — Kickoff Live Code
   Objetivo: refrescar OO + DOM ANTES de entrar em React.

   Fluxo:
     1. Definir classe Prato (OO)
     2. Instanciar objetos
     3. Selecionar e manipular o DOM
     4. Adicionar eventos
   ============================================ */


/* -----------------------------------------------------------
   PARTE 1 — OO
   Por que classe e não só um objeto literal ({nome, preco})?
   Porque com classe temos MÉTODOS (comportamento) junto
   dos dados, e conseguimos criar MUITOS pratos com o mesmo molde.
   ----------------------------------------------------------- */
class Prato {
  constructor(nome, preco, categoria) {
    // `this` aponta pro objeto que está sendo criado agora.
    // Sem `this`, o valor "some" quando o constructor acaba.
    this.nome      = nome;
    this.preco     = preco;
    this.categoria = categoria;
  }

  // Método porque é uma AÇÃO do prato — ele SABE se formatar.
  // Formatar preço fora da classe funcionaria, mas espalha lógica.
  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
  }

  // Método que MUTA o estado interno do prato.
  // Ex.: promoção de terça-feira.
  aplicarDesconto(percentual) {
    this.preco = this.preco * (1 - percentual / 100);
  }
}


/* -----------------------------------------------------------
   PARTE 2 — Instanciando objetos
   Aqui simulamos o que virá da API do Back-End no projeto real.
   Cada `new Prato(...)` é um objeto novo com dados próprios,
   mas todos compartilham os métodos definidos na classe.
   ----------------------------------------------------------- */
const cardapio = [
  new Prato("Feijoada Completa",  42.90, "Prato Principal"),
  new Prato("Moqueca de Peixe",   58.00, "Prato Principal"),
  new Prato("Coxinha Artesanal",   8.50, "Petisco"),
  new Prato("Brigadeiro Gourmet",  6.00, "Sobremesa"),
  new Prato("Suco de Maracujá",   12.00, "Bebida"),
];

// Demonstração no console — mostrar que o método funciona
console.log("=== Pratos criados ===");
cardapio.forEach(p => {
  console.log(`${p.nome} → ${p.formatarPreco()}`);
});


/* -----------------------------------------------------------
   PARTE 3 — DOM: selecionar e renderizar
   Aqui vem o "custo" do vanilla JS: cada card é montado
   manualmente com createElement / innerHTML.
   Em React, isso vira 3 linhas de JSX.
   ----------------------------------------------------------- */

// Seleção — 1 elemento pelo ID via querySelector (moderno)
const containerCardapio = document.querySelector('#cardapio');

// Função dedicada para renderizar UM prato → boa prática de organização.
// Separar em função pequena facilita testar e trocar depois.
function criarCardPrato(prato) {
  const card = document.createElement('div');
  card.className = 'card';

  // Template string: mais legível que concatenar com "+"
  card.innerHTML = `
    <h3>${prato.nome}</h3>
    <span class="categoria">${prato.categoria}</span>
    <div class="preco">${prato.formatarPreco()}</div>
  `;

  /* Evento por card (PARTE 4).
     ⚠️ Repare: adicionamos DENTRO da função de criação —
     assim cada card ganha SEU listener no momento em que é criado. */
  card.addEventListener('click', () => {
    alert(
      `🍽️ ${prato.nome}\n\n` +
      `Categoria: ${prato.categoria}\n` +
      `Preço: ${prato.formatarPreco()}`
    );
  });

  return card;
}

// Renderizar TUDO — loop simples
function renderizarCardapio() {
  // Limpar antes de renderizar → evita duplicar em re-render
  containerCardapio.innerHTML = '';

  cardapio.forEach(prato => {
    const card = criarCardPrato(prato);
    containerCardapio.appendChild(card);
  });
}

// Primeira renderização quando a página carrega
renderizarCardapio();


/* -----------------------------------------------------------
   BÔNUS para explorar em aula:
   Rode no console e veja o cardápio se atualizar!

   cardapio[0].aplicarDesconto(20);
   renderizarCardapio();

   Percebeu? No vanilla você tem que CHAMAR renderizar de novo.
   No React, atualizar o estado já dispara a re-renderização
   automaticamente. Isso é o "declarativo" na prática.
   ----------------------------------------------------------- */
