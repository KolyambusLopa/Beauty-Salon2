document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
            hamburger.classList.toggle('active'); // Toggle active class on hamburger
        });

        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove('show');
                hamburger.classList.remove('active'); // Remove active class on hamburger
            }
        });
    } else {
        console.error('Элементы не найдены');
    }
});