/*
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

let cupom = confirm("Você tem cupom de desconto? (clique 'ok' ou 'cancelar')")

let temCupom = prompt("Você tem cupom de desconto? (Digite 'sim' ou 'nao')").toLocaleLowerCase().trim();

if (valorCompra > 150 || temCupom === "sim") {
    console.log("Frete Grátis Liberado");
} else {
    console.log("Frete Pago");
}

let palpiteusuario = parseInt(prompt("Escolha um número de 1 a 10:")) //transforma string em numero

let numeroSorteado = Math.floor(Math.random() * 10) + 1 //escolhe um número aleatório entre 0.0 e 0.9999, e arredonda para o numero inteiro mais baixo, e depois transforma em numero inteiro começando a contar do 1

if (palpiteusuario === numeroSorteado) {
    alert("Parabéns, você acertou o número")
} else {
    alert(`Infelizmente você  errou, o número sorteado foi ${numeroSorteado}`)
}*/

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

let modelo = prompt(`me informe o modelo do seu carro`)
let marca = prompt(`me informe o marca do seu carro`)
let ano = parseInt(prompt(`me informe o ano do seu carro`))

let carro2 = new Veiculo(modelo, marca, ano) 

let idadecarro = alert(`seu carro tem ${carro2.idadeVeiculo(2026)}`)