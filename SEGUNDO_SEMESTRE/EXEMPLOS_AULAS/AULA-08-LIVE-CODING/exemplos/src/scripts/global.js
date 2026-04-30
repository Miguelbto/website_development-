document.addEventListener("DOMContentLoaded", function(){
    exibirBoasVindas()
})

function exibirBoasVindas(){
    const saudacao = document.querySelector("#boas-vindas");
    const hora = new Date().getHours();
    if (saudacao) {
        saudacao.textContent =
            hora < 12
                ? "Bom dia! Qual o seu pedido?"
                : "Boa tarde! Confira nosso cardápio.";
    }
}



