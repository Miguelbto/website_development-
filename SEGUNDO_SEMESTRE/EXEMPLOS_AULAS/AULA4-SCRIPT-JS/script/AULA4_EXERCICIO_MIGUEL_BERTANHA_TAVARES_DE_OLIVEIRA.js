




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
/*
let valorTotal = prompt("Qual o valor total da conta:")

let pessoas = prompt("Quantas pessoas tem na mesa:")

let conta1 = new Conta(pessoas, valorTotal)


alert(`cada amigo deve pagar ${conta1.valorIndividual()}`)*/
