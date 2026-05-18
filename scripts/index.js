import { initSidebar } from './components/sidebar.js';
import { initExplorer } from './components/explorer.js';
import { activateTab } from './components/tabs.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Sidebar Interactions
    initSidebar();
    
    // Initialize Explorer Interactions
    initExplorer();

    // Welcome tab listener
    const welcomeTab = document.querySelector('.tab[data-target="welcome"]');
    if (welcomeTab) {
        welcomeTab.addEventListener('click', () => {
            activateTab('welcome');
        });
        welcomeTab.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activateTab('welcome');
            }
        });
    }

    // Set initial state
    activateTab('welcome');
});
