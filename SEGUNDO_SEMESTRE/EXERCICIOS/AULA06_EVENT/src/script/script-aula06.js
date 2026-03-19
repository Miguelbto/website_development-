/*Interação (Clique): Ao clicar no botão "Curtir", incremente o número no contador de curtidas.
Monitoramento (Input): Sempre que o usuário digitar no campo de texto, o parágrafo de "Preview" deve mostrar o texto em tempo real.
Sensores (Mouse): Ao entrar com o mouse na caixa de cor, mude-a para azul. Ao sair, ela deve voltar à cor original.
Desafio Extra (Reset): Crie um botão (ou use uma tecla) que limpe o input e zera o contador ao mesmo tempo. */



const UI_config = {
    isProduction: false,
    selector: {
        btnCurtir:'#btn-curtir',
        caixa:  '#caixa-cor',
    },

}

function warnMissingElement(selectorName) {
    if(!UI_config.isProduction){
        console.warn(`O elemento ${selectorName} não foi encontrado na sua página⚠️⚠️`)
    }
}

function curtir(){
    const btnCurtir = document.querySelector(UI_config.selector.btnCurtir)

    if(btnCurtir) {
        btnCurtir.addEventListener('click', () =>{
            let clique = clique++
            console.log(clique)
        })
    }
}

