document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const closeBtn = document.querySelector('.close-btn');

    if (hamburger && menu && closeBtn) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
            closeBtn.style.display = menu.classList.contains('show') ? 'block' : 'none';
        });

        closeBtn.addEventListener('click', () => {
            menu.classList.remove('show');
            closeBtn.style.display = 'none';
        });

        // Закрытие меню при клике вне его области
        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !menu.contains(event.target) && !closeBtn.contains(event.target)) {
                menu.classList.remove('show');
                closeBtn.style.display = 'none';
            }
        });
    } else {
        console.error('Элементы не найдены');
    }
});
