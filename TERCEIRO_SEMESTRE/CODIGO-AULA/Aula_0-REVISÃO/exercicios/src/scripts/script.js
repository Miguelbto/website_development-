/* ============================================
   GABARITO — Exercícios do Kickoff
   Tema: Bebidas do Sabor & Saber
   Contém os 5 exercícios em ordem incremental.
   ============================================ */


/* -----------------------------------------------------------
   Exercício 1 — Classe básica
   Objetivo: constructor, atributos e método simples.
   ----------------------------------------------------------- */
class Bebida {
  constructor(nome, preco, volume) {
    // volume esperado em ml — decidido no enunciado.
    this.nome   = nome;
    this.preco  = preco;
    this.volume = volume;
  }

  descricao() {
    // Template string para leitura fácil — pontinho de estilo.
    return `${this.nome} - ${this.volume}ml - R$ ${this.preco.toFixed(2)}`;
  }

  /* -------------------------------------------------------
     Exercício 2 — Método com lógica
     emLitros() precisa dividir por 1000 e retornar string "0.35L".
     ------------------------------------------------------- */
  emLitros() {
    const litros = this.volume / 1000;
    return `${litros.toFixed(2)}L`;
  }
}

// Teste do Exercício 1 e 2 no console — os alunos devem ver isso.
const coca      = new Bebida("Coca-Cola",         7.50,  350);
const suco      = new Bebida("Suco de Laranja",  10.00,  500);
const agua      = new Bebida("Água Mineral",      4.00,  500);
const cafe      = new Bebida("Café Espresso",     6.50,   50);
const guarana   = new Bebida("Guaraná Antártica", 7.00,  350);
const chaGelado = new Bebida("Chá Gelado",        8.00,  400);

console.log("=== Exercício 1 (descricao) ===");
console.log(coca.descricao());
console.log(suco.descricao());

console.log("=== Exercício 2 (emLitros) ===");
console.log(`${coca.nome}: ${coca.emLitros()}`);
console.log(`${suco.nome}: ${suco.emLitros()}`);
console.log(`${cafe.nome}: ${cafe.emLitros()}`);


/* -----------------------------------------------------------
   Exercício 3 — Renderizar no DOM
   Instanciar 3 bebidas (aqui temos 6 pra dar mais graça no filtro)
   e criar um <div class="card"> para cada uma dentro de #lista-bebidas.
   ----------------------------------------------------------- */
const listaBebidas = [coca, suco, agua, cafe, guarana, chaGelado];

const container = document.querySelector('#lista-bebidas');

// Isolamos a criação do card numa função só —
// isso deixa o Ex4 (evento) e o Ex5 (re-render no filtro) mais limpos.
function criarCardBebida(bebida) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h3>${bebida.nome}</h3>
    <div class="info">${bebida.descricao()}</div>
  `;

  /* -------------------------------------------------------
     Exercício 4 — Adicionar evento de clique.
     A adição do listener acontece DENTRO da criação do card,
     por isso cada card ganha um evento próprio associado
     à bebida que ele representa (closure sobre `bebida`).
     ------------------------------------------------------- */
  card.addEventListener('click', () => {
    alert(`🥤 ${bebida.nome}\nVolume em litros: ${bebida.emLitros()}`);
  });

  return card;
}


/* -----------------------------------------------------------
   Exercício 5 — Filtro dinâmico (desafio)
   A função abaixo aceita um texto e re-renderiza a lista
   filtrada. É chamada no primeiro render (sem texto) E toda
   vez que o input muda.

   Reflexão pro professor conduzir:
   Sempre que o usuário digita 1 tecla, o container inteiro é
   limpo e reconstruído. Isso funciona, mas é caro.
   É EXATAMENTE esse problema que o Virtual DOM do React resolve.
   ----------------------------------------------------------- */
function renderizarLista(textoBusca = '') {
  const filtro = textoBusca.trim().toLowerCase();

  // Limpa o container antes de re-renderizar → boa prática de idempotência.
  container.innerHTML = '';

  const bebidasFiltradas = listaBebidas.filter(b =>
    b.nome.toLowerCase().includes(filtro)
  );

  bebidasFiltradas.forEach(bebida => {
    container.appendChild(criarCardBebida(bebida));
  });

  // Fallback amigável quando nada bate — UX básico.
  if (bebidasFiltradas.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#888;">Nenhuma bebida encontrada.</p>`;
  }
}

// Primeira renderização (sem filtro).
renderizarLista();

// Ouve o input em tempo real (evento 'input' dispara a cada tecla).
const inputFiltro = document.querySelector('#filtro');
inputFiltro.addEventListener('input', (event) => {
  renderizarLista(event.target.value);
});


/* -----------------------------------------------------------
   PROVOCAÇÃO FINAL (comentário só de leitura)
   Descomente o bloco abaixo e rode a página. Depois digite
   no filtro. Veja o console.
   Cada tecla dispara N criações de DIV → esse é o custo
   que o React vai otimizar via Virtual DOM.
   -----------------------------------------------------------

   const origAppend = container.appendChild.bind(container);
   let contador = 0;
   container.appendChild = (el) => {
     contador++;
     console.log(`DIV #${contador} criada`);
     return origAppend(el);
   };
*/
