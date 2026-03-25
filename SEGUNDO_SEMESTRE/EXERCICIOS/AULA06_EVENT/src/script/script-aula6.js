const UI_config = {
    selector:{
        btnCurtir: '#btn-curtir',
        contador: '#contador',
        campoTexto: '#campo-texto',
        previewTexto: '#preview-texto',
        caixaCor: '#caixa-cor',
        btnReset: '#btn-reset'
    }
};

const Contador = {
    cliquesCurtidas: 0,
};

function warnMissingElement (element){
    console.warn(`O elemento ${element}, não foi encontrado`)
}


function initCurtir (){
    const curtirElement = document.querySelector(UI_config.selector.btnCurtir)
    const contadorCurtida = document.querySelector(UI_config.selector.contador)

    if(curtirElement){
        curtirElement.addEventListener('click', () => {
        Contador.cliquesCurtidas++
        contadorCurtida.textContent = Contador.cliquesCurtidas
    })
    } else{warnMissingElement('Botão curtir')}
}

initCurtir()


function textCamp(event){
    const previewText = document.querySelector(UI_config.selector.previewTexto)
    const textwrote = event.target.value

    if (textwrote === "") {
        previewText.textContent = "Digitando..."
    } else {
        previewText.textContent = `Digitando: ${textwrote}`
    }
}

function initTextCamp(){
    const text = document.querySelector(UI_config.selector.campoTexto)

    text.addEventListener("input", textCamp)
}

initTextCamp()


