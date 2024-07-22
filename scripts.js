document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Закрытие меню при клике вне его области (если нужно)
    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});