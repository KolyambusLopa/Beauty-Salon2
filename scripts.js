document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        console.log('JavaScript загружен и элементы найдены');

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
            console.log('Hamburger clicked');
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