const { createElement } = require("react");


// 1. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}


/*
//2. Eventos de clique para CLASS - EVENT.TARGET

//buscar na págona toda
document.addEventListener('click', (event)=>{
    const clicadoBtn = event.target
    //fazer ação/mudança/aplicação que você quiser, medianete ao que foi clicado
})

const massas = document.querySelector('secao-massas')

massas.addEventListener('click', (event) =>{
    const clicado  = event.target

    if(clicado.classList.contains('btn-pedido')){
        console.log('Você cliclou em um botão de MASSAS!')
    }
})

//2.3 Buscar evento direto da CLASS
const botoesPedidoo = document.querySelectorAll('btn-pedido')
4
botoesPedido.forEach((botao) => {
    botao.addEventListener('click', (event) =>{
        botao.textContent = '✅Pedido enviado'
        botao.style.backgroundColor = 'red'
        botao.style.cursor = 'default'
        botao.disabled = true
    })
})

*/







// 2. INTERATIVIDADE NOS CARDS (Feedback visual)
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});


// 3. DELEGAÇÃO DE EVENTOS
const main = document.querySelector("main")
main.addEventListener("click", (event) =>{
    const clicado = event.target

    if (clicado.classList.contains("btn-menos")){
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        const vlrAtual = Number(spanQtd.textContent)
        spanQtd.textContent = Math.max(1, vlrAtual -1)
        atualizarPrecoCard(box)
        return
    }

    
    if (clicado.classList.contains("btn-mais")){
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        const vlrAtual = Number(spanQtd.textContent)
        spanQtd.textContent = Number(spanQtd.textContent) + 1
        atualizarPrecoCard(box)
        return
    }

    // 3.2 Ação do btn-pedido
    if(clicado.classList.contains("btn-pedido")){
        event.preventDefault()

        const card = clicado.parentElement
        const nomePrato = card.querySelector("h3").textContent
        const quantidade = card.querySelector(".qtd-valor").textContent
        const precoExibido = card.querySelector("preco").textContent

        // efeito visual quando clicado "Pedir agora"

        clicado.textContent = "✅"
        clicado.style.backGroundColor = ""
        clicado.disable = true

        setTimeout(() => {
            clicado.textContent = "Pedir Agora";
            clicado.style.backgroundColor = "";
            clicado.disabled = false;
            }, 1500);
        
        if(card.querySelector(".badge-adicionado")){
            card.insertAdjacentHTML(
                "beforeend", "<span class='badge-adicionado'> ✅ no resumo</span>"
            )
        }
    
    adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card);
    }
})

//FUNÇÕES DE ATUALIZAR PRECO E INSERIR PRODUTO

function atualizarPrecoCard(box){
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"))
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)
    const total = precoUnitario * quantidade
    spanPreco.textContent = "R$" + total.toFixed(2).replace(".", ",")
    spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22"

}

function adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card){
    const secaoResumo = document.querySelector("#secao-resumo")
    const listaResumo = document.querySelector("#lista-resumo")

    if(!secaoResumo || !listaResumo)return

    secaoResumo.style.display = "block"

    //CRIANDO UM ITEM NA LISTA 
    const itemli = createElement("li")
    itemli.classList.add("item-resumo")

    //INFORMAÇÕES TEXTO
    const textoSpan = document.createElement("span")
    textoSpan.textContent = quantidade + "X" + nomePrato + "-" + precoExibido

    // CRIANDO BOTÃO PARA REMOVER PRATO
    const btnRemover = document.createElement("button")
    btnRemover.textContent = "❌"
    btnRemover.style.classList("bnt-remover")
}

//CONTINUANDO





    