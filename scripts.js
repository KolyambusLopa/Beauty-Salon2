document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');

    if (hamburger && menu && closeMenu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

        closeMenu.addEventListener('click', () => {
            menu.classList.remove('show');
        });

        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
    }
});