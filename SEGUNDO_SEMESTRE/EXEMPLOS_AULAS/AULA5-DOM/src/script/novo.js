const tituloNhoque = document.querySelector('#card-nhoque h3')
const botoesCompra = document.querySelectorAll('.btn-pedido')
const quartoCard = document.querySelectorAll('.card:nth-child(3)')

console.log('1. Mostrando o titulo Nhoque (pelo ID)', tituloNhoque)
console.log('2. Quantidade de botões de pedido: ', botoesCompra.length)
console.log('3. O quarto Card terá a posição: ', quartoCard)

const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#boas-vindas')
const seuNome = document.querySelector('#nome')


saudacao.textContent = hora < 18 ? "Bem vindo, boa tarde!" : "Bem vindo, boa noite!"

seuNome.innerHTML = "Meu nome é Celso"