




class Prato{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }

    exibirComoMoeda(total){
        return "R$" + total.toFixed(2)
    }



}

const cardapio = [
    new Prato("lasanha bolonhesa", 45.99),
    new Prato("pizza margherita", 55.50),
    new Prato("salada caesar", 32.00)
];

// 3. Pegamos os elementos do HTML
const inputPrato = document.getElementById('input-prato');
const inputQuantidade = document.getElementById('input-quantidade');
const botaoCalcular = document.getElementById('botao-calcular');
const mensagemResultado = document.getElementById('mensagem-resultado');

// 4. Mandamos o JavaScript escutar o clique do botão
botaoCalcular.addEventListener('click', function() {
    
    // Pegamos o que o usuário digitou e transformamos tudo em minúsculo para facilitar a busca
    const nomeDigitado = inputPrato.value.toLowerCase();
    const quantidadeDigitada = parseInt(inputQuantidade.value); // Converte o texto para número

    // 5. A Mágica da Busca: Procuramos no cardápio um prato com o mesmo nome digitado
    const pratoEncontrado = cardapio.find(function(item) {
        return item.nome === nomeDigitado;
    });

    // 6. Verificamos se achou o prato ou não
    if (pratoEncontrado) {
        // Se achou, calcula o valor e exibe na tela usando o seu método
        const valorTotal = pratoEncontrado.preco * quantidadeDigitada;
        const textoMoeda = pratoEncontrado.exibirComoMoeda(valorTotal);
        
        mensagemResultado.style.color = "green";
        mensagemResultado.textContent = `Você pediu ${quantidadeDigitada}x ${pratoEncontrado.nome}. O total é ${textoMoeda}.`;
    
    } else {
        // Se não achou (digitou errado ou não existe no cardápio)
        mensagemResultado.style.color = "red";
        mensagemResultado.textContent = "Desculpe, não encontramos esse prato no nosso cardápio.";
    }
});





/*
alert("Seja bem vindo ao restaurante Sabor&Saber!")
*/
console.log("Teste")

const cliente = prompt("Bem vindo, Cliente. Para um atendimento personalizado digite seu nome: ")

let nomeFormatado = cliente.trim().toUpperCase()
alert(`Bem vindo:${nomeFormatado}`)

const horaAgora = new Date()

const hora = horaAgora.getHours()

if(hora < 11){
    alert(`Bom dia ${nomeFormatado}, aproveite as delicias do café da manhã!`)
    console.log("Antes das 11")
} else {
    alert(`Boa tarde, ${nomeFormatado}, aproveite as iguarias do almoço!`)
    console.log("Antes das 11")
}


const querPrato = confirm(`Fala meu querido ${nomeFormatado} quer um prato?`)

if(querPrato){
    let quantidade = prompt("Hoje, temos Lasanha a Bolonhesa qual é a quantidade de lasanha a bolonhesa que você quer?")
    let totalPratos = lasanha.preco * quantidade
    /*alert(total.toFixed(2))*/
    alert(`Bacana, o seu total de ${lasanha.exibirComoMoeda(totalPratos)}`)
} else {
    alert("Obrigado pela visita volte sempre!")
}


