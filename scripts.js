document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            // Открытие и закрытие меню с анимацией
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
});
