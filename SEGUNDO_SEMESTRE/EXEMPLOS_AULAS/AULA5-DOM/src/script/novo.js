const tituloNhoque = document.querySelector('#card-nhoque h3')
const botoesCompra = document.querySelectorAll('.btn-pedido')
const terceiroCard = document.querySelectorAll('.card:nth-child(3)')

console.log('1. Mostrando o titulo Nhoque (pelo ID)', tituloNhoque)
console.log('2. Quantidade de botões de pedido: ', botoesCompra.length)
console.log('3. O quarto Card terá a posição: ', terceiroCard)


const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#boas-vindas')
const seuNome = document.querySelector('#nome')


saudacao.textContent = hora < 18 ? "Bem vindo, boa tarde!" : "Bem vindo, boa noite!"

seuNome.innerHTML = "Meu nome é Celso"


const imagem_lasanha = document.querySelector('#foto-destaque')
const card_lasanha = document.querySelector('#card-lasanha')

/*
imagem_lasanha.alt = "Produto esgotado"
imagem_lasanha.scr = "./src/images/esgotado.jpg"
*/

tituloNhoque.style.color = "#e67e22"

card_lasanha.classList.add('em-promocao')

