const botoesCompra = document.querySelectorAll('.btn-pedido')

botoesCompra.forEach(function(botao) {
    botao.addEventListener('click', function(evento){
        evento.preventDefault();
        const botaoClicado = evento.target;

        if (botaoClicado.disabled === true) {
            return;
        }

        const mensagemSucesso = document.createElement('p');

        mensagemSucesso.textContent = "✅ Item adicionado ao carrinho!";
        mensagemSucesso.style.color = "#28a745";
        mensagemSucesso.style.fontWeight = "bold";
        mensagemSucesso.style.marginTop = "10px";

        const cardDoPrato = botaoClicado.closest('article');

        cardDoPrato.appendChild(mensagemSucesso);

        botaoClicado.textContent = "No carrinho";
        botaoClicado.style.backgroundColor = "#ccc";
        botaoClicado.style.color = "#666";
        botaoClicado.style.cursor = "not-allowed"

        botaoClicado.disabled = true

        /*
        botaoClicado.textContent = "Adicionado";
        botaoClicado.style.backgroundColor = "#28a745"
        botaoClicado.style.color = "black"
        */
    })
})

/*
const tituloNhoque = document.querySelector('#card-nhoque h3')

const imagem_lasanha = document.querySelector('#foto-destaque')
const card_lasanha = document.querySelector('#card-lasanha')

/*
imagem_lasanha.alt = "Produto esgotado"
imagem_lasanha.scr = "./src/images/esgotado.jpg"
*/
/*
tituloNhoque.style.color = "#e67e22"

card_lasanha.classList.add('em-promocao')
*/