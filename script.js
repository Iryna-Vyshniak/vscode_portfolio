document.addEventListener('DOMContentLoaded', () => {
    const files = document.querySelectorAll('.file');
    const tabsContainer = document.getElementById('editor-tabs');
    const welcomeContent = document.getElementById('welcome-content');
    const codeContent = document.getElementById('code-content');
    const fileLanguageInfo = document.getElementById('file-language');
    const codeBlock = document.getElementById('code-block');
    const lineNumbersBlock = document.getElementById('line-numbers');
    
    // Store opened tabs { filename: true }
    const openedTabs = new Set();
    
    // The exact specific code string
    const aboutCode = `// Don't change anything, it's working very well 😉
/*
"She doesn't know everything.
But she knows enough
to figure out the rest faster than you expect."
*/
<span class="syn-keyword">const</span> <span class="syn-variable">Iryna</span> <span class="syn-operator">=</span> {
  <span class="syn-property">name</span>: <span class="syn-string">"Iryna V-N"</span>,
  <span class="syn-property">title</span>: <span class="syn-string">"Future Full Stack Developer (almost legendary 💅)"</span>,
  <span class="syn-property">origin</span>: { <span class="syn-property">country</span>: <span class="syn-string">"Україна 🇺🇦"</span>, <span class="syn-property">coordinates</span>: <span class="syn-string">"там, де сильні люди і гарний код народжуються"</span> },
  <span class="syn-property">status</span>: <span class="syn-string">"openToWork && openToMagic"</span>,
  <span class="syn-property">skills</span>: {
    <span class="syn-property">favorite</span>: [<span class="syn-string">"React"</span>, <span class="syn-string">"shadcn/ui"</span>, <span class="syn-string">"Tailwind CSS"</span>, <span class="syn-string">"Framer Motion"</span>],
    <span class="syn-property">learning</span>: [<span class="syn-string">"React Native"</span>, <span class="syn-string">"Ionic"</span>, <span class="syn-string">"Next.js"</span>, <span class="syn-string">"Angular"</span>]
  },
  <span class="syn-property">bio</span>: [
    <span class="syn-string">"// Programming is not just code — it's моя територія спокою"</span>,
    <span class="syn-string">"// Коли світ шумить — я пишу логіку"</span>,
    <span class="syn-string">"// Книги надихають, порцелянові квіти заспокоюють, код захоплює"</span>,
    <span class="syn-string">"// І так, іноді я думаю як компонент React"</span>
  ],
  <span class="syn-property">softSkills</span>: [
    <span class="syn-string">"переживаю глибше, ніж баги в продакшені"</span>,
    <span class="syn-string">"вчуся швидше, ніж падає мотивація"</span>,
    <span class="syn-string">"тримаюсь навіть коли все хоче впасти"</span>
  ],
  <span class="syn-property">companion</span>: { <span class="syn-property">name</span>: <span class="syn-string">"Fletcher 🐾"</span>, <span class="syn-property">role</span>: <span class="syn-string">"QA"</span> },
  <span class="syn-property">future</span>: {
    <span class="syn-property">goals</span>: [<span class="syn-string">"become legendary fullstack"</span>, <span class="syn-string">"web + mobile products"</span>],
    <span class="syn-property">description</span>: <span class="syn-string">"ambitious, трохи зухвалий і точно мій"</span>
  }
};
<span class="syn-comment">// main loop</span>
<span class="syn-keyword">while</span> (<span class="syn-variable">alive</span>) {
  <span class="syn-function">learn</span>();
  <span class="syn-function">code</span>();
  <span class="syn-function">create</span>();
  <span class="syn-function">overthink</span>(); <span class="syn-comment">// optional, але часто true 😅</span>
}`;

    const syntaxHighlightComments = (str) => {
        // Safe wrap comments unless already wrapped
        return str.replace(/(\/\/[^\n]*)/g, '<span class="syn-comment">$1</span>')
                  .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="syn-comment">$1</span>');
    };

    const getCodeForFile = (filename) => {
        if (filename === 'About.jsx') {
            return aboutCode; // About code is already highlighted with spans
        } else {
            return syntaxHighlightComments(`// TODO: Content for ${filename} goes here...

<span class="syn-keyword">export default function</span> <span class="syn-function">Component</span>() { 
  <span class="syn-keyword">return</span> <span class="syn-operator">&lt;</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>${filename} Data<span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>; 
}`);
        }
    };

    const activateTab = (filename) => {
        // Update tabs visually
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        const tab = document.querySelector(`.tab[data-target="${filename}"]`);
        if (tab) tab.classList.add('active');

        // Update tree selection
        document.querySelectorAll('.file').forEach(f => f.classList.remove('active'));
        const fileNode = document.querySelector(`.file[data-name="${filename}"]`);
        if (fileNode) fileNode.classList.add('active');

        if (filename === 'welcome') {
            welcomeContent.classList.remove('hidden');
            codeContent.classList.add('hidden');
            fileLanguageInfo.textContent = 'None';
            return;
        }

        // Show code
        welcomeContent.classList.add('hidden');
        codeContent.classList.remove('hidden');
        
        const codeHTML = getCodeForFile(filename);
        const actualLines = codeHTML.split('\n');
        const linesHTML = actualLines.map((_, i) => `<div>${i + 1}</div>`).join('');

        lineNumbersBlock.innerHTML = linesHTML;
        codeBlock.innerHTML = codeHTML;

        if (filename.endsWith('.jsx')) fileLanguageInfo.textContent = '{ } JavaScript JSX';
        else if (filename.endsWith('.css')) fileLanguageInfo.textContent = '# CSS';
        else if (filename.endsWith('.html')) fileLanguageInfo.textContent = '< > HTML';
        else fileLanguageInfo.textContent = 'Plain Text';
    };

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    
    if (hamburgerMenu && sidebar) {
        hamburgerMenu.addEventListener('click', () => {
            sidebar.classList.toggle('show-sidebar');
        });
    }

    const createTab = (filename) => {
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
        tab.setAttribute('tabindex', '0');
        tab.innerHTML = `<i class="${iconClass}"></i> ${filename} <span class="close-tab" aria-label="Close tab">&times;</span>`;
        
        tab.addEventListener('click', (e) => {
            if (!e.target.classList.contains('close-tab')) {
                activateTab(filename);
            }
        });

        tab.querySelector('.close-tab').addEventListener('click', (e) => {
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
        });

        tabsContainer.appendChild(tab);
        activateTab(filename);
    };

    // Add click listeners to files in Explorer
    files.forEach(file => {
        // Support keyboard interaction for accessibility
        file.addEventListener('click', () => {
            const filename = file.dataset.name;
            createTab(filename);
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('show-sidebar');
            }
        });
        file.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') {
                const filename = file.dataset.name;
                createTab(filename);
            }
        });
    });

    // Welcome tab listener
    const welcomeTab = document.querySelector('.tab[data-target="welcome"]');
    if (welcomeTab) {
        welcomeTab.addEventListener('click', () => {
            activateTab('welcome');
        });
        welcomeTab.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') {
                activateTab('welcome');
            }
        });
    }
});
