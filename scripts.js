document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
                menu.style.animation = 'none'; // Убираем анимацию при закрытии
                setTimeout(() => {
                    menu.style.animation = ''; // Сбрасываем стиль анимации
                }, 600); // Время должно соответствовать длительности анимации
            } else {
                menu.classList.add('show');
                menu.style.animation = 'slide-in 0.6s ease-in-out'; // Добавляем анимацию при открытии
            }
        });

        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove('show');
                menu.style.animation = 'none'; // Убираем анимацию при закрытии
                setTimeout(() => {
                    menu.style.animation = ''; // Сбрасываем стиль анимации
                }, 600); // Время должно соответствовать длительности анимации
            }
        });
    } else {
        console.error('Элементы не найдены');
    }
});
