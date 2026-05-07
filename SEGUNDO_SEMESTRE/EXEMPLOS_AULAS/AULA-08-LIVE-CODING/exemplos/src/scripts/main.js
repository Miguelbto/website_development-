document.addEventListener("DOMContentLoaded", function(){
    inicializarHouverCards()
})

function inicializarHouverCards(){
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
}

function inicializarVitrine(){
    const main = document.querySelector("main")

    if(!main) return

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
            const quantidade = Number(card.querySelector(".qtd-valor").textContent)
            const preco = parseFloat(card.querySelector(".preco").getAttribute("data-preco"))

            // efeito visual quando clicado "Pedir agora"
            clicado.textContent = "✅"
            clicado.style.backgroundColor = ""
            clicado.disabled = true

            setTimeout(() => {
                clicado.textContent = "Pedir Agora";
                clicado.style.backgroundColor = "";
                clicado.disabled = false;
            }, 1500);
            
            // CORREÇÃO: Sinal de '!' para inserir apenas SE NÃO existir
            const badgeExistente = card.querySelector(".badge-adicionado")
            if(badgeExistente) badgeExistente.remove()

            card.insertAdjacentHTML(
                    "beforeend", "<span class='badge-adicionado'> ✅ no resumo</span>"
                )
            
            setTimeout(function(){
                const badge = card.querySelector(".badge-adicionado")
                if(badge) badge.remove()
            }, 2000)
            
            const box = card.querySelector(".quantidade-box")

            if(box){
                box.querySelector(".quantidade-valor").textContent = "1"
                atualizarPrecoCard()

            }

            salvarPedido({nome: nomePrato, quantidade: quantidade, preco: preco})

            atualizarContadorPedidos()

        
        }
    })
}

function atualizarPrecoCard(box){
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"))
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)
    const total = precoUnitario * quantidade
    spanPreco.textContent = "R$" + total.toFixed(2).replace(".", ",")
    spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22"
}

function salvarPedido(pedido){
    const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]")

    pedido.subtotal = pedido.preco * pedido.qtd
    lista.push(pedido)

    localStorage.setItem("techfood_pedidos", JSON.stringify(lista))
}

function atualizarContadorPedidos(){
    
}

