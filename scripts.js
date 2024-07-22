console.log('JavaScript загружен');

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('close-btn');

    if (hamburger && menu && closeBtn) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
            closeBtn.style.display = menu.classList.contains('show') ? 'block' : 'none';
            hamburger.classList.toggle('disabled', menu.classList.contains('show'));
        });

        closeBtn.addEventListener('click', () => {
            menu.classList.remove('show');
            closeBtn.style.display = 'none';
            hamburger.classList.remove('disabled');
        });

        // Закрытие меню при клике вне его области
        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !menu.contains(event.target) && !closeBtn.contains(event.target)) {
                menu.classList.remove('show');
                closeBtn.style.display = 'none';
                hamburger.classList.remove('disabled');
            }
        });
    } else {
        console.error('Элементы не найдены');
    }
});
