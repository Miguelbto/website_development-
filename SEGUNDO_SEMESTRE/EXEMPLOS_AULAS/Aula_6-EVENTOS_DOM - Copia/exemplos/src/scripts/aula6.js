//dicionário de dados
const UI_CONFIG = {
    isProduction: false,
    selectors: {
        badge: '#badge-status',
        btnToggle: 'btn-toggle'
    },
    classes: {
        online: 'online',
        offline: 'offline',
    },
    messages: {
        active: 'Status: Ativo',
        inactive: 'Status: Inativo'
    }
};


function warnMissingElement(selectorName) {
    if(!UI_CONFIG.isProduction){
        console.warn(`[Sistema] Aviso: O elemento ${selectorName} não foi encontrado na sua página⚠️⚠️`)
    }
}

function toggleBadgeStatus() {
    const badgeElement = document.querySelector(UI_CONFIG.selectors.badge)

    if (!badgeElement) return warnMissingElement('Badge de Status')

    const isAtualmenteOnline = badgeElement.dataset.status === UI_CONFIG.classes.online
    const isNovoStatusOnline = !isAtualmenteOnline

    badgeElement.dataset.classes = isNovoStatusOnline ? UI_CONFIG.classes.online : UI_CONFIG.status.offline
    badgeElement.textContent = isNovoStatusOnline ? UI_CONFIG.messages.active : UI_CONFIG.messages.inactive
}


// INICIALIZAÇÃO           


function initBadgeFeature(){
    const btnToggle = document.querySelector(UI_CONFIG.selectors.btnToggle)

    if(btnToggle){
        btnToggle.addEventListener('click', toggleBadgeStatus)
    } else{ warnMissingElement('Botão alternar status')} 
}

initBadgeFeature()