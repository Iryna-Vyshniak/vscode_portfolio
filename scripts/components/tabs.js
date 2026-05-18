import { getCodeForFile } from '../utils/syntax.js';
import * as data from '../data.js';
import { renderPreview, initPreviewAnimations } from './preview.js';
import { startBrainSequence, stopBrainSequence } from './brain.js';

let isPreviewMode = false;
let currentActiveFilename = 'welcome';

const dataMap = {
    'About.jsx': data.aboutCode,
    'Experience.jsx': data.experienceCode,
    'Projects.jsx': data.projectsCode,
    'Skills.jsx': data.skillsCode,
    'Contacts.jsx': data.contactsCode,
    'Education.jsx': data.educationCode,
    'main.jsx': data.mainCode,
};

const openedTabs = new Set();

export const activateTab = (filename, keepPreviewState = false) => {
    if (!keepPreviewState) {
        isPreviewMode = false;
    }

    const welcomeContent = document.getElementById('welcome-content');
    const codeContent = document.getElementById('code-content');
    const fileLanguageInfo = document.getElementById('file-language');
    const codeBlock = document.getElementById('code-block');
    const lineNumbersBlock = document.getElementById('line-numbers');

    // Update tabs visually
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
    });
    const tab = document.querySelector(`.tab[data-target="${filename}"]`);
    if (tab) {
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
    }

    // Update tree selection
    document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
    const fileNode = document.querySelector(`.file[data-name="${filename}"]`);
    if (fileNode) fileNode.classList.add('active');

    currentActiveFilename = filename;
    
    // Stop brain sequence if it was running
    stopBrainSequence();
    
    // Check if we show preview or code
    const previewBtn = document.getElementById('btn-preview');
    const previewContent = document.getElementById('preview-content');
    
    // Brain.jsx easter egg
    if (filename === 'Brain.jsx') {
        if (previewBtn) previewBtn.classList.add('hidden');
        welcomeContent.classList.add('hidden');
        previewContent.classList.add('hidden');
        codeContent.classList.remove('hidden');
        
        if (lineNumbersBlock) lineNumbersBlock.style.display = 'none';
        if (codeBlock) {
            codeBlock.style.paddingLeft = '0';
            startBrainSequence(codeBlock);
        }
        if (fileLanguageInfo) fileLanguageInfo.textContent = '{ } JavaScript JSX';
        return;
    }

    if (filename === 'welcome') {
        welcomeContent.classList.remove('hidden');
        codeContent.classList.add('hidden');
        previewContent.classList.add('hidden');
        if (previewBtn) previewBtn.classList.add('hidden');
        if (fileLanguageInfo) fileLanguageInfo.textContent = 'None';
        return;
    }

    // PDF files — show inline viewer, no code/preview toggle
    if (filename.endsWith('.pdf')) {
        if (previewBtn) previewBtn.classList.add('hidden');
        welcomeContent.classList.add('hidden');
        codeContent.classList.add('hidden');
        previewContent.classList.remove('hidden');
        const previewBody = document.getElementById('preview-body');
        if (previewBody) {
            // Reset cinematic styles for clean PDF viewing
            previewBody.style.cssText = 'width:100%;flex:1;display:flex;flex-direction:column;background:#2d2d2d;';
            previewBody.innerHTML = `
                <iframe
                  src="/images/iryna_vyshniak_cv.pdf"
                  title="Iryna Vyshniak CV"
                  style="flex:1;width:100%;border:none;"
                  aria-label="CV PDF viewer"
                ></iframe>`;
        }
        if (fileLanguageInfo) fileLanguageInfo.textContent = 'PDF';
        return;
    }

    if (previewBtn) {
        previewBtn.classList.remove('hidden');
        if (isPreviewMode) previewBtn.classList.add('active');
        else previewBtn.classList.remove('active');
    }

    welcomeContent.classList.add('hidden');
    
    if (isPreviewMode) {
        codeContent.classList.add('hidden');
        previewContent.classList.remove('hidden');
        const previewBody = document.getElementById('preview-body');
        if (previewBody) {
            previewBody.style.cssText = ''; // reset any PDF inline styles
            previewBody.innerHTML = renderPreview(filename);
            initPreviewAnimations();
        }
    } else {
        previewContent.classList.add('hidden');
        codeContent.classList.remove('hidden');
        
        const codeHTML = getCodeForFile(filename, dataMap);
        const actualLines = codeHTML.split('\n');
        const newHTML = actualLines.map((line, i) => {
            return `<div class="code-line"><div class="line-num">${i + 1}</div><div class="line-content">${line || ' '}</div></div>`;
        }).join('');

        if (lineNumbersBlock) lineNumbersBlock.style.display = 'block';
        if (codeBlock) {
            codeBlock.innerHTML = newHTML;
            codeBlock.style.paddingLeft = '0';
        }
    }

    if (fileLanguageInfo) {
        if (filename.endsWith('.jsx')) fileLanguageInfo.textContent = '{ } JavaScript JSX';
        else if (filename.endsWith('.css')) fileLanguageInfo.textContent = '# CSS';
        else if (filename.endsWith('.html')) fileLanguageInfo.textContent = '< > HTML';
        else fileLanguageInfo.textContent = 'Plain Text';
    }
};

export const createTab = (filename) => {
    const tabsContainer = document.getElementById('editor-tabs');

    if (openedTabs.has(filename)) {
        activateTab(filename);
        return;
    }

    openedTabs.add(filename);
    
    // icon
    let iconClass = 'icon-react';
    if (filename.endsWith('.css')) iconClass = 'icon-css';
    else if (filename.endsWith('.html')) iconClass = 'icon-html';
    else if (filename.endsWith('.pdf')) iconClass = 'icon-pdf';

    const tab = document.createElement('div');
    tab.className = 'tab';
    tab.dataset.target = filename;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', 'false');
    tab.setAttribute('tabindex', '0');
    tab.innerHTML = `<i class="${iconClass}"></i> ${filename} <span class="close-tab" aria-label="Close tab" role="button" tabindex="0">&times;</span>`;
    
    tab.addEventListener('click', (e) => {
        if (!e.target.classList.contains('close-tab')) {
            activateTab(filename);
        }
    });

    tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            if (!e.target.classList.contains('close-tab')) {
                e.preventDefault();
                activateTab(filename);
            }
        }
    });

    const closeBtn = tab.querySelector('.close-tab');
    
    const closeAction = (e) => {
        e.stopPropagation();
        openedTabs.delete(filename);
        tab.remove();
        
        // Activate last tab
        const remainingTabs = document.querySelectorAll('.tab');
        if (remainingTabs.length > 0) {
            const lastTab = remainingTabs[remainingTabs.length - 1];
            activateTab(lastTab.dataset.target);
        } else {
            activateTab('welcome'); // Optional fallback
        }
    };

    closeBtn.addEventListener('click', closeAction);
    closeBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeAction(e);
        }
    });

    if (tabsContainer) {
        tabsContainer.appendChild(tab);
    }
    activateTab(filename);
};

// Setup Preview Button Toggle
const previewBtn = document.getElementById('btn-preview');
if (previewBtn) {
    previewBtn.addEventListener('click', () => {
        isPreviewMode = !isPreviewMode;
        activateTab(currentActiveFilename, true);
    });
}
