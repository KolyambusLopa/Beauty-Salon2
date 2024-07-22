document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('close-btn');

    if (hamburger && menu && closeBtn) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

        closeBtn.addEventListener('click', () => {
            menu.classList.remove('show');
        });

        // Закрытие меню при клике вне его области
        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
    }
});
