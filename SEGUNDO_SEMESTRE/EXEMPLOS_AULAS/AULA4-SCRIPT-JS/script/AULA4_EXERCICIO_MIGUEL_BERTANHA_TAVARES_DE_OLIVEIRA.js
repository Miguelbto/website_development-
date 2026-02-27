




class Conta {
    constructor(qntPessoas, vlrTotal){
        this.qntPessoas = qntPessoas
        this.vlrTotal = vlrTotal
    }

    valorIndividual(){
        console.log(`A conta de cada um ficou: R$${vlrTotal / qntPessoas}`)
    }
}



const nome = prompt(`Seja bem vindo, insira seu nome logo a seguir:`)

const sobrenome = prompt(`Insira seu sobrenome:`)

let nomeCompleto = nome + sobrenome

let nomeFormatado = nomeCompleto.trim().concat().toLowerCase()

alert(`Oque você deseja Sr(a).${nomeFormatado}`)

alert(`Seu nome tem ${nomeFormatado.length} letras`)


const querAlgo = confirm(`olá ${nomeFormatado}, você desejaria a conta?`)

if(querAlgo){
    let valorTotal = prompt(`Qual o valor total da conta:`)

    let pessoas = prompt(`Quantas pessoas tem na mesa:`)

    let valorporp = alert(`O valor de cada amigo ficou R$:${valorTotal / pessoas}`)
    

} else {
    alert(`Volte sempre!`)
}


let valorCompra = parseFloat(prompt("Digite o valor da compra:"));

let temCupom = prompt("Você tem cupom de desconto? (Digite 'sim' ou 'nao')");

if (valorCompra > 150 || temCupom === "sim") {
    console.log("Frete Grátis Liberado");
} else {
    console.log("Frete Pago");
}

let palpiteusuario = parseInt(prompt("Escolha um número de 1 a 10:"))

let numeroSorteado = Math.floor(Math.random() * 10) + 1

if (palpiteusuario === numeroSorteado) {
    alert("Parabéns, você acertou o número")
} else {
    alert(`Infelizmente você  errou, o número sorteado foi ${numeroSorteado}`)
}

class Veiculo {
    constructor(modelo, marca, ano){
        this.modelo = modelo
        this.marca = marca 
        this.ano = ano
    }


    idadeVeiculo(anoAtual){
        console.log(`A idade do veiculo é: ${anoAtual - this.ano}anos`)
    }

}

const veiculo1 = new Veiculo("corolla", "toyota", 2020)