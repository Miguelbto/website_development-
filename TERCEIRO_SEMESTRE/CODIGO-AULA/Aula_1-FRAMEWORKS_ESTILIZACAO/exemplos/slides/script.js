/* ==================================================
   Explorador Bootstrap — Demo interativa
   Cada botão renderiza um exemplo ao vivo do conceito
   e mostra o HTML aplicado embaixo.
   ================================================== */

const visualEl = document.getElementById('visual');
const codigoEl = document.getElementById('codigo');


function mostrar(htmlExemplo, htmlCodigo) {
  visualEl.innerHTML = htmlExemplo;
  codigoEl.innerHTML = `<code>${htmlCodigo.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>`;
}


// ============================================
// GRID DEMOS
// ============================================

function demoGrid(tipo) {
  if (tipo === '6-6') {
    mostrar(
      `<div class="row g-2">
        <section class="col-6 bg-primary text-white p-4 text-center rounded">col-6</section>
        <section class="col-6 bg-danger text-white p-4 text-center rounded">col-6</section>
      </div>`,
      `<div class="row">
  <section class="col-6">Metade esquerda</section>
  <section class="col-6">Metade direita</section>
</div>`
    );
  } else if (tipo === '4-4-4') {
    mostrar(
      `<div class="row g-2">
        <article class="col-4 bg-primary text-white p-4 text-center rounded">col-4</article>
        <article class="col-4 bg-danger text-white p-4 text-center rounded">col-4</article>
        <article class="col-4 bg-success text-white p-4 text-center rounded">col-4</article>
      </div>`,
      `<div class="row">
  <article class="col-4">Primeiro terço</article>
  <article class="col-4">Segundo terço</article>
  <article class="col-4">Terceiro terço</article>
</div>`
    );
  } else if (tipo === 'responsivo') {
    mostrar(
      `<div class="row g-2">
        <article class="col-12 col-md-6 col-lg-4 bg-primary text-white p-4 text-center rounded">Card 1</article>
        <article class="col-12 col-md-6 col-lg-4 bg-danger text-white p-4 text-center rounded">Card 2</article>
        <article class="col-12 col-md-6 col-lg-4 bg-success text-white p-4 text-center rounded">Card 3</article>
      </div>
      <p class="text-muted mt-3 mb-0"><small>💡 Redimensione a janela do navegador para ver mudar!</small></p>`,
      `<div class="row">
  <article class="col-12 col-md-6 col-lg-4">Card 1</article>
  <article class="col-12 col-md-6 col-lg-4">Card 2</article>
  <article class="col-12 col-md-6 col-lg-4">Card 3</article>
</div>`
    );
  }
}


// ============================================
// UTILITIES DEMOS
// ============================================

function demoSpacing() {
  mostrar(
    `<div class="bg-warning p-1 mb-2 text-center">p-1 (padding pequeno)</div>
     <div class="bg-warning p-3 mb-2 text-center">p-3 (padding médio)</div>
     <div class="bg-warning p-5 mb-2 text-center">p-5 (padding grande)</div>
     <div class="bg-info text-white text-center mt-4" style="width: 60%;">Div normal</div>
     <div class="bg-info text-white text-center mt-4 mx-auto" style="width: 60%;">Mesma div com mx-auto (centralizada)</div>`,
    `<div class="p-1">Padding pequeno</div>
<div class="p-3">Padding médio</div>
<div class="p-5">Padding grande</div>
<div class="mx-auto">Centralizada</div>`
  );
}

function demoText() {
  mostrar(
    `<p class="text-start">📌 text-start (alinhado à esquerda)</p>
     <p class="text-center">📌 text-center (centralizado)</p>
     <p class="text-end">📌 text-end (alinhado à direita)</p>
     <hr>
     <p class="fw-light">fw-light (leve)</p>
     <p class="fw-normal">fw-normal (normal)</p>
     <p class="fw-bold">fw-bold (negrito)</p>
     <hr>
     <p class="fs-1">fs-1 (maior)</p>
     <p class="fs-4">fs-4 (médio)</p>
     <p class="fs-6 mb-0">fs-6 (menor)</p>`,
    `<p class="text-center fw-bold fs-3">
  Título grande, centralizado e em negrito
</p>`
  );
}

function demoColors() {
  mostrar(
    `<div class="bg-primary text-white p-3 mb-2 rounded">bg-primary (azul)</div>
     <div class="bg-success text-white p-3 mb-2 rounded">bg-success (verde)</div>
     <div class="bg-danger text-white p-3 mb-2 rounded">bg-danger (vermelho)</div>
     <div class="bg-warning text-dark p-3 mb-2 rounded">bg-warning (amarelo)</div>
     <div class="bg-info text-white p-3 mb-2 rounded">bg-info (ciano)</div>
     <div class="bg-light text-dark p-3 mb-2 rounded border">bg-light (claro)</div>
     <div class="bg-dark text-white p-3 mb-2 rounded">bg-dark (escuro)</div>
     <p class="text-muted mb-0">text-muted (cinza discreto — ótimo pra secundário)</p>`,
    `<div class="bg-danger text-white p-3">
  Alerta em vermelho
</div>
<p class="text-muted">Texto secundário</p>`
  );
}

function demoDisplay() {
  mostrar(
    `<h6 class="text-muted small">d-flex + justify-content-between:</h6>
     <div class="d-flex justify-content-between bg-light p-3 rounded mb-3">
       <span class="badge bg-primary">Esquerda</span>
       <span class="badge bg-danger">Direita</span>
     </div>

     <h6 class="text-muted small">d-flex + justify-content-center + gap-2:</h6>
     <div class="d-flex justify-content-center gap-2 bg-light p-3 rounded mb-3">
       <span class="badge bg-primary">A</span>
       <span class="badge bg-danger">B</span>
       <span class="badge bg-success">C</span>
     </div>

     <h6 class="text-muted small">d-none (esconde no mobile), d-md-block (mostra em tablet+):</h6>
     <p class="d-none d-md-block bg-warning p-2 rounded mb-0">
       Este texto SÓ aparece em telas >= 768px. Redimensione pra sumir!
     </p>`,
    `<div class="d-flex justify-content-between">
  <span>Esquerda</span>
  <span>Direita</span>
</div>

<nav class="d-none d-md-block">
  Menu (só desktop)
</nav>`
  );
}


// ============================================
// RESET
// ============================================
function resetar() {
  visualEl.innerHTML = '<em class="text-muted">Clique num botão pra ver o efeito.</em>';
  codigoEl.innerHTML = '<code class="text-white-50">// nada ainda</code>';
}
