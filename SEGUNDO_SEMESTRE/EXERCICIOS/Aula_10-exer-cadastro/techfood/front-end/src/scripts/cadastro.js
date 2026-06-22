/* ==========================================================================
   CADASTRO.JS — Lógica da tela de inserção de novos produtos. 
   ========================================================================== */

// ─────────────────────────────────────────────────────────────────────────────
// MAPEAMENTO GLOBAL DOS ELEMENTOS DO DOM
// ─────────────────────────────────────────────────────────────────────────────
const form = document.querySelector('.form-produto');
const inputImagem = document.getElementById('produto-image');
const btnSubmit = document.getElementById('btn-submit');

// Elementos de Interface (Feedback Visual e Prévia)
const imagemPreviewBox = document.getElementById('imagemPreviewBox');
const imagePreview = document.getElementById('imagePreview');
const feedbackSection = document.getElementById('feedbackSection');
const produtoOut = document.getElementById('produtoOut');

// ─────────────────────────────────────────────────────────────────────────────
// SISTEMA DE PREVIEW DE IMAGEM (ATUALIZADO PARA ALTA PERFORMANCE)
// ─────────────────────────────────────────────────────────────────────────────
inputImagem.addEventListener('change', () => {
    const arquivo = inputImagem.files[0];

    if (arquivo) {
        // screateObjectURL cria um link temporário na memória local do navegador.
        // É instantâneo, não exige eventos assíncronos (onload) e consome quase zero memória.
        imagePreview.src = URL.createObjectURL(arquivo);
        imagemPreviewBox.classList.remove('oculta');
    } else {
        limparPainelPreview();
    }
});

// ─────────────────────────────────────────────────────────────────────────────
// CAPTURA DO FORMULÁRIO E ENVIO ASSÍNCRONO (ATUALIZADO PARA ESCALABILIDADE)
// ─────────────────────────────────────────────────────────────────────────────
form.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    limparErrosFormulario()
    let temErro = false

    // Validação da imagem isolada
    if (!inputImagem.files[0]) {
        mostrarErro('produto-image', 'erro-imagem', 'Por favor, selecione uma foto.')
        temErro = true
        return;
    }

    const formData = new FormData(form);

        // MUDANÇA INTELIGENTE: Varre todos os dados capturados.
        // Se o dado for um texto (string), ele aplica o .trim() para remover espaços.
        // Assim, você não precisa fazer isso manualmente um por um!
        for (let [key, value] of formData.entries()) {
            if (typeof value === 'string') {
                formData.set(key, value.trim());
            }
        }

        if (!formData.get('nome')) {
            mostrarErro('produto-nome', 'erro-nome', 'O nome do produto é obrigatório.')
            temErro = true
        }

        const precoBruto = formData.get('preco')
        const precoNormalizado = precoBruto ? preco.replace(',','.') : ''
        formData.set('preco', precoNormalizado)

        const precoNumerico = Number(precoNormalizado)
        if (!precoNumerico || precoNumerico <= 0) {
            mostrarErro('produto-preco', 'erro-preco', 'Digite um preço válido maior que zero.')
            temErro = true
        }

        if (!formData.get('descricao')) {
            mostrarErro('produto-descricao', 'erro-descricao', 'A descrição é obrigatória')
            temErro = true
        }

        if (temErro) return 

    try {
        // Bloqueio de Segurança contra Duplo Clique
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = 'Cadastrando... ⏳';

        // Consome a função assíncrona (api.js) enviando o formData automatizado
        const respostaServidor = await cadastrarProduto(formData);

        // Exibe o card passando o formData para que ele saiba quais dados foram enviados
        exibirCardSucesso(respostaServidor, formData);
        
        // Reseta tudo
        form.reset();
        limparPainelPreview();

    } catch (erro) {
        console.error('Falha na operação de cadastro:', erro);
        alert(`Falha no cadastro: ${erro.message}`);
    } finally {
        btnSubmit.disabled = false;
        btnSubmit.innerText = 'Cadastrar Produtos';
    }
});

// ─────────────────────────────────────────────────────────────────────────────
// FUNÇÕES AUXILIARES E DE RENDERIZAÇÃO
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Constrói o painel de confirmação visual
 * @param {Object} resposta Dados devolvidos pelo servidor
 * @param {FormData} dadosEnviados Os dados validados que acabaram de ser enviados
 */
function exibirCardSucesso(resposta, dadosEnviados) {
    feedbackSection.classList.remove('oculto');
    
    // MUDANÇA: Agora pegamos o valor direto do formData, que já passou pelo .trim()
    const precoFormatado = Number(dadosEnviados.get('preco')).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // MUDANÇA: HTML mais limpo. Recomendo criar as classes 'card-sucesso' e 'texto-sucesso' no seu arquivo CSS.
   produtoOut.textContent = ''

   const cardSucesso = document.createElement('div')
   cardSucesso.classList.add('card-sucesso')

   const pMensagem = document.createElement('p')
   pMensagem.classList.add('texto-sucesso')
   pMensagem.innerHTML = `<strong>✔️ ${resposta.mensagem || 'Produto salvo com sucesso!'}</strong>`; 
    // (Podemos usar innerHTML aqui porque a 'resposta.mensagem' vem do NOSSO servidor, não do input do usuário)

    // 4. Cria o parágrafo do Nome do Produto (AQUI ESTÁ A SEGURANÇA)
    const pNome = document.createElement('p');
    const strongNome = document.createElement('strong');
    strongNome.textContent = 'Item: '; // textContent é blindado contra hackers
    pNome.appendChild(strongNome);
    pNome.appendChild(document.createTextNode(dadosEnviados.get('nome'))); 

    
    // 5. Cria o parágrafo do Preço
    const pPreco = document.createElement('p');
    const strongPreco = document.createElement('strong');
    strongPreco.textContent = 'Valor cadastrado: ';
    pPreco.appendChild(strongPreco);
    pPreco.appendChild(document.createTextNode(precoFormatado));

    // 6. Monta o quebra-cabeça colocando os parágrafos dentro do card, e o card na tela
    cardSucesso.append(pMensagem, pNome, pPreco);
    produtoOut.appendChild(cardSucesso);

    feedbackSection.scrollIntoView({ behavior: 'smooth' });
}

function limparPainelPreview() {
    // MUDANÇA: Boa prática para liberar a memória cache gerada pelo createObjectURL
    if (imagePreview.src) URL.revokeObjectURL(imagePreview.src);
    
    imagePreview.src = '';
    imagemPreviewBox.classList.add('oculta');
}

function mostrarErro (idInput, idSpan, mensagem) {
    const input = document.getElementById(idInput)
    const span = document.getElementById(idSpan)

    input.classList.add('input-erro')
    span.textContent = mensagem
    span.style.display = 'block'
}

function limparErrosFormulario(){
    document.querySelectorAll('.input-erro').forEach(input => input.classList.remove('input-erro'));
    document.querySelectorAll('.mensagem-erro').forEach(span => span.style.display = 'none');
}