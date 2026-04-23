// 1. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

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
        spanQtd.textContent = Math.max(1, vlrAtual - 1)
        atualizarPrecoCard(box)
        return
    }
    
    if (clicado.classList.contains("btn-mais")){
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        const vlrAtual = Number(spanQtd.textContent)
        spanQtd.textContent = vlrAtual + 1
        atualizarPrecoCard(box)
        return
    }

    // 3.2 Ação do btn-pedido
    if(clicado.classList.contains("btn-pedido")){
        event.preventDefault()

        const card = clicado.parentElement
        const nomePrato = card.querySelector("h3").textContent
        const quantidade = card.querySelector(".qtd-valor").textContent
        // CORREÇÃO: Ponto na classe '.preco'
        const precoExibido = card.querySelector(".preco").textContent

        // efeito visual quando clicado "Pedir agora"
        clicado.textContent = "✅"
        // CORREÇÃO: backgroundColor em camelCase correto e disabled no lugar de disable
        clicado.style.backgroundColor = ""
        clicado.disabled = true

        setTimeout(() => {
            clicado.textContent = "Pedir Agora";
            clicado.style.backgroundColor = "";
            clicado.disabled = false;
        }, 1500);
        
        // CORREÇÃO: Sinal de '!' para inserir apenas SE NÃO existir
        if(!card.querySelector(".badge-adicionado")){
            card.insertAdjacentHTML(
                "beforeend", "<span class='badge-adicionado'> ✅ no resumo</span>"
            )
        }
    
        adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card);
    }
})

// FUNÇÕES DE ATUALIZAR PRECO E INSERIR PRODUTO
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

    if(!secaoResumo || !listaResumo) return

    secaoResumo.style.display = "block"

    // CORREÇÃO: document.createElement em vez de createElement nativo do React
    const itemli = document.createElement("li")
    itemli.classList.add("item-resumo")

    // INFORMAÇÕES TEXTO
    const textoSpan = document.createElement("span")
    textoSpan.textContent = quantidade + "X " + nomePrato + " - " + precoExibido

    // CRIANDO BOTÃO PARA REMOVER PRATO
    const btnRemover = document.createElement("button")
    btnRemover.textContent = "❌"
    // CORREÇÃO: sintaxe correta para adicionar classe
    btnRemover.classList.add("btn-remover")

    btnRemover.addEventListener("click", () => {
        itemli.remove()
        
        const badge = card.querySelector(".badge-adicionado")
        if(badge) badge.remove()

        if (listaResumo.children.length === 0){
            secaoResumo.style.display = "none";
        }
    })

    itemli.appendChild(textoSpan);
    itemli.appendChild(btnRemover);
    listaResumo.appendChild(itemli);
}

const btnLimpar = document.querySelector("#btn-limpar")

if (btnLimpar) {
    btnLimpar.addEventListener("click", () =>{
        const listaResumo = document.querySelector("#lista-resumo")
        const secaoResumo = document.querySelector("#secao-resumo")

        // CORREÇÃO: querySelectorAll em vez de querySelector para usar o forEach
        document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove())

        // Remove filhos da lista um a um com firstElementChild
        while (listaResumo.firstElementChild) {
            listaResumo.firstElementChild.remove()
        }

        secaoResumo.style.display = "none"
    })
}