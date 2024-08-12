document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const langButtons = document.querySelectorAll('.language-selector button');

    // Проверка на наличие сохраненного языка и его установка
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
        changeLanguage(savedLang);
        langButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-lang') === savedLang) {
                button.classList.add('active');
            }
        });
    }

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
            if (menu.classList.contains('show')) {
                animateMenuLinks();
            } else {
                resetMenuLinks();
            }
        });

        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show');
                    resetMenuLinks();
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
            const selectedLang = button.getAttribute('data-lang');
            localStorage.setItem('selectedLanguage', selectedLang);
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            changeLanguage(selectedLang);
        });
    });

    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang-content]');
        elements.forEach(el => {
            const fixedText = el.getAttribute('data-lang-content');
            if (fixedText) {
                el.textContent = fixedText;
            } else {
                el.textContent = el.getAttribute(`data-lang-${lang}`);
            }
        });
    }
});
