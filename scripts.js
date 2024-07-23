document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            // Открытие и закрытие меню с анимацией
            menu.classList.toggle('show');
        });

        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show');
                }
            }
        });
    } else {
        console.error('Элементы не найдены');
    }
});
