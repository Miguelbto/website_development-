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

    pedidos.forEach(function(pedido, indice){

        const li = document.createElement("li")
        li.classList.add("item-pedido")


    // INFORMAÇÕES TEXTO
    const textoSpan = document.createElement("span")
    textoSpan.innerHTML = "<strong>" + pedido.nome + "<strong>" + "-" + pedido.qtd + "X" + "R$" + pedido.preco.toFixed(2).replace(".", ",") + "= <span class= 'subtotal-item'> R$" + pedido.subtotal.toFixed(2).replace(".", ",")

    

    // CRIANDO BOTÃO PARA REMOVER PRATO
    const btnRemover = document.createElement("button")
    btnRemover.textContent = "❌"
    // CORREÇÃO: sintaxe correta para adicionar classe
    btnRemover.classList.add("btn-remover")

    btnRemover.addEventListener("click", () => {
        
        const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]")

        lista.splice(indice, 1)

        localStorage.setItem("techfood_pedidos")
        renderizarPedidos()
        
    })

    li.appendChild(textoSpan);
    li.appendChild(btnRemover);
    lista.appendChild(li);
    total += pedido.subtotal

    });

    const totalFmt = "R$" + total.toFixed(2).replace(".", ",")
    




    
}


function configurarLimparPedidos () {
    const btn = document.querySelector("#btn-limpar-pedidos")

    if (!btn) return

    btn.addEventListener("click", function () {
        localStorage.removeItem("techfood_pedidos")
        renderizarPedidos()
    })
}