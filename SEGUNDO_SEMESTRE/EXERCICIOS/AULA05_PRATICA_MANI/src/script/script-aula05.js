/* CONST */ 
const nomeUsuario = document.querySelector("#nome-usuario")
const foto = document.querySelector("#foto-perfil")
const perfil = document.querySelector("#container-perfil")
const statusChange = document.querySelector("#badge-status")
const contar = document.querySelectorAll(".skill")

/* IDENTIDADE */
nomeUsuario.innerHTML = "Miguel Bertabnha Tavares de Oliveira"

/* AVATAR */
foto.src = 'https://media.istockphoto.com/id/1317323736/pt/foto/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=is&k=20&c=x8PqcRcfmSOJMZuJplOBaJFvXGqzxc2JtZ-RBI3ppSk='

/* PERSONALIZAÇÃO */
perfil.style.backroundColor = 'blue'

/* STATUS REAL */
statusChange.classList.add("online")
statusChange.textContent = 'Online'

/* AUDITORIA */



console.log(`O número de skills do usuário é de:${contar.length}`)


/*

// CÓDIGO MELHORADO E EVOLUIDO 
//dicionário de dados
const UI_CONFIG = {
    selectors: {
        badge: '#badge-status'
    },
    classes: {
        online: 'online'
    },
    messages: {
        active: 'Status: Ativo'
    }
};

//fnction para o código rodar apenas quando ser chamado e não apenas por abrir o site 
function updateBadgeToOnline(){
    const badgeElement = document.querySelector(UI_CONFIG.selectors.badge);
    //Eu crie o const aqui pegando o elemento do dicionario para caso haja uma futura mudança preciso mudar apenas o elemento chamado no dicionario


    if (badgeElement) {
        console.warn(`Aviso: O elemento ${UI_CONFIG.selectors.badge} não foi encontrado`)
        return
    }
    //O código não para de rodar mesmo que não encontre o elemento apenas mmostra um sinala amarelo no termial avisando que algo não aconteceu como devia

    badgeElement.classList.add(UI_CONFIG.classes.online)
    badgeElement.textContent = UI_CONFIG.messages.active

    badgeElement.setAttribute('aria-live', 'polite');
    //indica que o texto mudou

}

updateBadgeToOnline()

*/