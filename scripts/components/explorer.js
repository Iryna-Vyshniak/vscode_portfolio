import { createTab } from './tabs.js';

export const initExplorer = () => {
    const files = document.querySelectorAll('.file');
    const sidebar = document.querySelector('.sidebar');

    files.forEach(file => {
        // Support keyboard interaction for accessibility
        file.addEventListener('click', () => {
            const filename = file.dataset.name;
            createTab(filename);
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('show-sidebar');
                const hamburgerMenu = document.getElementById('hamburger-menu');
                if (hamburgerMenu) hamburgerMenu.setAttribute('aria-expanded', 'false');
            }
        });
        
        file.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const filename = file.dataset.name;
                createTab(filename);
                if (window.innerWidth <= 768 && sidebar) {
                    sidebar.classList.remove('show-sidebar');
                    const hamburgerMenu = document.getElementById('hamburger-menu');
                    if (hamburgerMenu) hamburgerMenu.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
};
