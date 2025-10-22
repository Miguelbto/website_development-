
/*Estamos criando a váriavel chamada botaoTema, onde não pode ser alterada */ 
/*document serve para representar toda a página HTML*/
/*.getElementById('btn-tema) está falando para procurar em toda a página um elemento com id btn-tema*/
const botaoTema = document.getElementById('btn-tema')
/*Declara a váriavel body e fala para procura-la na página do html*/ 
const body = document.body


/*pegamos a váriavel que criamos, ele fica esperando por um evento 
e quando clicado executa a função*/
botaoTema.addEventListener('click', function(){
    /*Pega a váriavel body, acessa a lista de classes CSS da tag body,
     e depois o toggle funciona como um interruptor para ligar e desligar o modo escuro */
    body.classList.toggle('dark-mode')
})


/*o querySelectorAll seleciona todos os elementos que estão identificados
com a classe .itens-menu, com todas as tags <a> e filtrar apenas as tags <a>
com o atributo href^= que começa com o simbolo #, assim impedindo que ele acesse links
externos como https://google.com */
const menuLinks = document.querySelectorAll('.itens-menu a[href^="#"')

/*menuLinks agora é uma lista, e usamos o .forEach para executar a função
em cada item da lista e vamos chama-los temporariamente de link*/
menuLinks.forEach(link => {

    /*adicionamos o ouvidor em cada link e criamos uma função com um 
    objeto chamado event que se refere ao click do mouse*/
    link.addEventListener('click', function(event){

        /*Aqui estamos falando para o event executar o preventDefault()
        assim impede o comportamento padrão de pular direto para o link ancora*/
        event.preventDefault()

        /*this se refere ao elemento que recebeu o event que é o link clicado
         e o .getAttribute está falando me dê o valor do href*/
        const href = this.getAttribute('href')

        /*Está falando para procurar na página HTML o elemento que corresponde
        ao seletor*/
        const targetSection = document.querySelector(href)

        /*pega a seção que acabamos de encontrar e rola a página até a mesma
        e o smooth está dizendo para fazer essa rolagem de forma suave*/
        targetSection.scrollIntoView({
            behavior:'smooth'
        })
    })
})

/*seleciona todos os cards que tem a classe produto-item*/
const todosOsProdutos = document.querySelectorAll('.produto-item')

/*Faz o loop em cada item*/
todosOsProdutos.forEach(produto => {

    /*adiciona o ouvidor click em cada item*/
    produto.addEventListener('click', function(){

        /*estamos dizendo para ele procurar apenas no produto e não na página inteira
        e para encontrar a classe produto-title, pegar apenas o texto desse elemento 
        e limpar o texto removendo os espaços em branco extras do inicio ao fim */
        const titulo = produto.querySelector('.produto-title').textContent.trim()

        /* */
        const preco = preco.querySelector('.produto-price h4').textContent.trim()
        alert(`Produto selecionado: ${titulo}\nPreço: ${preco}`)
    })
})