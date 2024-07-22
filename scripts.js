console.log('JavaScript загружен');

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const closeBtn = document.getElementById('close-btn');

    if (hamburger && menu && closeBtn) {
        console.log('JavaScript загружен и элементы найдены');

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
            console.log('Hamburger clicked');
        });

        closeBtn.addEventListener('click', () => {
            menu.classList.remove('show');
            console.log('Close button clicked');
        });

        // Закрытие меню при клике вне его области
        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove('show');
                console.log('Clicked outside menu');
            }
        });
    } else {
        console.error('Элементы не найдены');
    }
});
