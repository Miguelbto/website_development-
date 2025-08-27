document.addEventListener('DOMContentLoaded', () => {
    const mobileIcon = document.getElementById('mobile-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const body = document.body;

    const toggleMenu = () => {
        // Alterna a classe para a animação do menu
        mobileMenu.classList.toggle('is-open');
        
        // Alterna a classe para impedir a rolagem da página
        body.classList.toggle('no-scroll');
    };

    // Abre/fecha o menu ao clicar no ícone
    mobileIcon.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em um dos links
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});