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
    console.warn(`[Sistema] O elemento '${element}' não foi encontrado.`)
}

// ==========================================
// 1. FUNCIONALIDADE: CURTIR
// ==========================================
function initCurtir (){
    const curtirElement = document.querySelector(UI_config.selector.btnCurtir)
    const contadorCurtida = document.querySelector(UI_config.selector.contador)

    if(curtirElement){
        curtirElement.addEventListener('click', () => {
            Contador.cliquesCurtidas++
            if(contadorCurtida) contadorCurtida.textContent = Contador.cliquesCurtidas
        })
    } else {
        warnMissingElement('Botão curtir')
    }
}
initCurtir()

// ==========================================
// 2. FUNCIONALIDADE: CAMPO DE TEXTO
// ==========================================
function textCamp(event){
    const previewText = document.querySelector(UI_config.selector.previewTexto)
    if (!previewText) return; // Defesa rápida

    const textwrote = event.target.value

    if (textwrote === "") {
        previewText.textContent = "Digitando..."
    } else {
        previewText.textContent = `Digitando: ${textwrote}`
    }
}

function initTextCamp(){
    const text = document.querySelector(UI_config.selector.campoTexto)

    // Defesa adicionada!
    if (text) {
        text.addEventListener("input", textCamp)
    } else {
        warnMissingElement('Campo de Texto')
    }
}
initTextCamp()


// 3. FUNCIONALIDADE: CAIXA DE COR
function initColorBox(){
    const boxColor = document.querySelector(UI_config.selector.caixaCor)

    if(!boxColor) return warnMissingElement('Caixa de cor')

    boxColor.addEventListener("mouseenter", () => {
        boxColor.classList.add("caixa-destaque")
    })

    boxColor.addEventListener("mouseleave", () => {
        boxColor.classList.remove("caixa-destaque")
    })
}
initColorBox()


// 4. FUNCIONALIDADE: LIMPAR TUDO
function clearAll() {
    const contadorLook = document.querySelector(UI_config.selector.contador)
    const inputTexto = document.querySelector(UI_config.selector.campoTexto) // Nome alterado para evitar conflito!
    const previewText = document.querySelector(UI_config.selector.previewTexto)

    Contador.cliquesCurtidas = 0
    
    if (contadorLook) contadorLook.textContent = "0"
    if (inputTexto) inputTexto.value = ""
    if (previewText) previewText.textContent = "Digitando: ..."
}

function initClearAll() {
    const btnClear = document.querySelector(UI_config.selector.btnReset)

    if (btnClear){
        btnClear.addEventListener("click", clearAll)
    } else {
        warnMissingElement('Botão limpar')
    }
}
initClearAll()