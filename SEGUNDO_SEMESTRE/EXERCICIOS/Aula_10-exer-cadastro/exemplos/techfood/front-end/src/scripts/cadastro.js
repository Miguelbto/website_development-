const form = document.querySelector('.form-produto');
const inputNome = document.getElementById('produto-nome');
const inputPreco = document.getElementById('produto-preco');
const inputDescricao = document.getElementById('produto-descricao');
const inputImagem = document.getElementById('produto-image');

// Elementos de Preview e Feedback
const imagemPreviewBox = document.getElementById('imagemPreviewBox');
const imagePreview = document.getElementById('imagePreview');
const feedbackSection = document.getElementById('feedbackSection');
const produtoOut = document.getElementById('produtoOut');

// URL base da sua API (ajuste a porta se o seu servidor rodar em outra, ex: 3000)
const API_URL = 'http://localhost:3000/produtos';

inputImagem.addEventListener('change', () => {
    const arquivo = inputImagem.files[0]

    if (arquivo) {
        const reader = new FileReader() //pra que serve?

        reader.onload = (e) => {
            imagePreview.src = e.target.result
            imagemPreviewBox.classList.remove('oculta')
        }

        reader.readAsDataURL(arquivo)
    } else {
        imagePreview.src = ''
        imagemPreviewBox.classList.add('oculta')
    }
})

//-------------------------
// ENVIO FORMULÁRIO
//------------------------

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (!inputNome.value.trim() || !inputPreco.value || !inputDescricao.value.trim()) {
        alert('Por favor, preencha todos os campos obrigatórios')
        return
    }

    if (!inputImagem.files[0]) {
        alert('Por favor, selecione uma imagem para o produto.')
        return
    }

    try {
        
        const formData = new FormData()

        formData.append*('nome', inputNome.value.trim())
        formData.append('preco', inputPreco.value)
        formData.append('descricao', inputDescricao.value.trim())
        formData.append('file', inputImagem.files[0])

        const btnSubmit = document.querySelector('#btn-submit')
        btnSubmit.disable = true 
        btnSubmit.innerHTML = 'Cadastrando...'

        const response = await fetch(API_URL, {
            method: 'POST',
            body: formData
        })

        const resultado = await response.json()

        if (!response.ok) {
            throw new Error(resultado.mensagem || 'Erro ao cadastrar produto')
        }

        exibirFeedbackSucesso(resultado)
        form.reset()
        imagemPreviewBox.classList.add('oculta')

    } catch (erro) {

        console.error('Erro na requisição:', erro)
        alert(`Falha no cadastro: ${erro.message}`)
        } finally {

            const btnSubmit = document.querySelector('btn-submit')
            btnSubmit.disable = false
            btnSubmit.innerText = 'Cadastrar Produtos'
        }
        
    })