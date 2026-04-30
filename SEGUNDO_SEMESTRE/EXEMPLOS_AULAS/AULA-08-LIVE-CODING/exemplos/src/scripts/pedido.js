document.addEventListener("DOMContentLoaded", function(){

})






function renderizarPedidos(){
    const spanResumo = document.querySelector("#valor-total-resumo")
    const lista = document.querySelector("#lista-pedidos")
    const spanTotal = document.querySelector("#valor-total")
    const spanContador = document.querySelector("#contador-itens")

    if(!lista) return

    const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]")

    if(pedidos.length === 0){
        lista.innerHTML = 
        "<li class='pedido-vazio'>Nenhum pedido ainda. Acesse o " +
      "<a href='index.html'>Cardápio</a> para adicionar! 😊</li>";
    }

    if (spanTotal) spanTotal.textContent = "R$ 0,00"
    if (spanResumo) spanResumo.textContent = "R$ 0,00"
    if (spanContador) spanContador.textContent = "0 itens"

    lista.innerHTML = ""
    let total = 0


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