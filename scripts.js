document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const langButtons = document.querySelectorAll('.language-selector button');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            // Открытие и закрытие меню с анимацией
            menu.classList.toggle('show');
            if (menu.classList.contains('show')) {
                animateMenuLinks();
                const currentPageLink = document.querySelector('.nav-menu a.current-page');
                if (currentPageLink) {
                    currentPageLink.style.display = 'none';
                }
            } else {
                resetMenuLinks();
                const currentPageLink = document.querySelector('.nav-menu a.current-page');
                if (currentPageLink) {
                    currentPageLink.style.display = 'block';
                }
            }
        });

        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show');
                    resetMenuLinks();
                    const currentPageLink = document.querySelector('.nav-menu a.current-page');
                    if (currentPageLink) {
                        currentPageLink.style.display = 'block';
                    }
                }
            }
        });
    } else {
        console.error('Элементы не найдены');
    }

    function animateMenuLinks() {
        const links = document.querySelectorAll('.nav-menu a');
        links.forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 200 * (index + 1));
        });
    }

    function resetMenuLinks() {
        const links = document.querySelectorAll('.nav-menu a');
        links.forEach(link => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(20px)';
        });
    }

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang-content]');
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-lang-${lang}`);
        });
    }
});
