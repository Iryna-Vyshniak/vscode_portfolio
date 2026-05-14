export const initSidebar = () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    
    if (hamburgerMenu && sidebar) {
        hamburgerMenu.addEventListener('click', () => {
            const isExpanded = sidebar.classList.contains('show-sidebar');
            if (isExpanded) {
                sidebar.classList.remove('show-sidebar');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
            } else {
                sidebar.classList.add('show-sidebar');
                hamburgerMenu.setAttribute('aria-expanded', 'true');
            }
        });

        hamburgerMenu.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                hamburgerMenu.click();
            }
        });
    }

    // Accessible folder toggling
    const folders = document.querySelectorAll('details.folder summary');
    folders.forEach(folder => {
        folder.addEventListener('click', () => {
            const parent = folder.parentElement;
            const isOpen = parent.hasAttribute('open');
            folder.setAttribute('aria-expanded', !isOpen);
        });
    });
};
