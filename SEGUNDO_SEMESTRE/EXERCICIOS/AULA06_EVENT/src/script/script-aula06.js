
//  1.  Contador de Curtidas 
const btnCurtir = document.querySelector("#btn-curtir");
const contador = document.querySelector("#contador");
let totalCurtidas = 0; 

btnCurtir.addEventListener("click", () => {
  totalCurtidas++; 
  contador.textContent = totalCurtidas; 
});

// --- 2.Preview em Tempo Real ---
const campoTexto = document.querySelector("#campo-texto");
const previewTexto = document.querySelector("#preview-texto");

campoTexto.addEventListener("input", (event) => {
  const textoDigitado = event.target.value;
  
  if (textoDigitado === "") {
    previewTexto.textContent = "Digitando: ...";
  } else {
    // adiciona o que o usuário escreveu
    previewTexto.textContent = `Digitando: ${textoDigitado}`;
  }
});

//  Caixa de Cor
const caixaCor = document.querySelector("#caixa-cor");

caixaCor.addEventListener("mouseenter", () => {
  caixaCor.style.backgroundColor = "blue";
  caixaCor.style.color = "white"; // Muda a letra para branco para dar contraste
});

caixaCor.addEventListener("mouseleave", () => {
  caixaCor.style.backgroundColor = ""; // Remove o azul, volta ao CSS original
  caixaCor.style.color = ""; // Volta a cor de letra original
});

//  4. ] Limpar Tudo 
const btnReset = document.querySelector("#btn-reset");

if (btnReset) {
  
  // Função que limpa tudo
  const limparTudo = () => {
    // Zera o contador
    totalCurtidas = 0;
    contador.textContent = "0";

    // Limpa o input e o preview
    campoTexto.value = "";
    previewTexto.textContent = "Digitando: ...";
  };


  // Escuta o clique no botão
  btnReset.addEventListener("click", limparTudo);

  // Escuta a tecla "Escape" (ESC) em qualquer lugar da página
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      limparTudo();
    }
  });
}