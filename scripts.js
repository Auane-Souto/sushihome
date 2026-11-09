const menuMobile = document.querySelector('.menu-mobile');
const nav = document.querySelector('.caixa-nav nav');

menuMobile.addEventListener('click', () => {
    const aberto = nav.classList.toggle('ativo');

    menuMobile.setAttribute('aria-expanded', aberto);
    menuMobile.innerHTML = aberto ? '&times;' : '☰';
});

document.querySelectorAll('.caixa-nav nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('ativo');
        menuMobile.setAttribute('aria-expanded', 'false');
        menuMobile.innerHTML = '☰';
    });
});