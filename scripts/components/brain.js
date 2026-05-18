import Typewriter from 'typewriter-effect/dist/core';

let brainKeydownListener = null;
let isBrainRunning = false;
let currentSequenceId = 0;

export const startBrainSequence = async (containerElement) => {
    // Increment sequence ID to abort previous runs if any
    currentSequenceId++;
    const mySequenceId = currentSequenceId;
    isBrainRunning = true;

    // Reset container with line numbers and editor-like styling
    containerElement.innerHTML = `
        <div class="brain-container" style="display: flex; font-family: 'Consolas', 'Courier New', monospace; font-size: clamp(8px, 1.8vw, 14px); line-height: 1.5; color: #d4d4d4; height: 100%; overflow-y: auto; background-color: var(--bg-main); padding: 20px 0 100px 0;">
            <div id="brain-line-numbers" class="line-numbers" style="display: block; padding: 0 20px; color: var(--text-muted); text-align: right; user-select: none; min-width: 50px;">
                <div class="line-num">1</div>
            </div>
            <div id="brain-terminal" style="flex: 1; padding-left: 0; padding-right: 20px; white-space: pre-wrap; word-break: break-word; overflow-x: hidden;"></div>
        </div>
    `;

    const terminal = containerElement.querySelector('#brain-terminal');
    const lineNumbers = containerElement.querySelector('#brain-line-numbers');

    // Auto-update line numbers
    const updateLineNumbers = () => {
        const brCount = terminal.getElementsByTagName('br').length;
        let html = '';
        for (let i = 1; i <= brCount + 1; i++) {
            html += `<div class="line-num">${i}</div>`;
        }
        if (lineNumbers.children.length !== brCount + 1) {
            lineNumbers.innerHTML = html;
        }
    };

    const observer = new MutationObserver(updateLineNumbers);
    observer.observe(terminal, { childList: true, subtree: true, characterData: true });

    if (brainKeydownListener) {
        document.removeEventListener('keydown', brainKeydownListener);
        brainKeydownListener = null;
    }

    const hideCursors = () => {
        document.querySelectorAll('.Typewriter__cursor').forEach(c => {
            c.style.display = 'none';
        });
    };

    terminal.innerHTML = '<span style="color: #6a9955;">// do not read my thoughts)</span><br><br>';
    updateLineNumbers();

    // Initial cinematic pause
    await new Promise(r => setTimeout(r, 1800));
    if (mySequenceId !== currentSequenceId) return;

    // Part 1
    await new Promise(resolve => {
        const div = document.createElement('span');
        terminal.appendChild(div);
        new Typewriter(div, { delay: 40, cursor: '|', cursorClassName: 'Typewriter__cursor' })
            .typeString('initializing brain.jsx...<br><br>')
            .pauseFor(400)
            .changeDelay(20) // Speed up!
            .typeString('...<br>deleting unnecessary thoughts...<br>...<br><br>')
            .pauseFor(800)
            .changeDelay(60) // Slow down for error
            .typeString('<span style="color: #f14c4c;">error: too many ideas found</span><br><br>')
            .pauseFor(1000)
            .changeDelay(40)
            .typeString("hello, i'm yara")
            .pauseFor(600)
            .typeString('<br>wait...<br>no')
            .pauseFor(400)
            .deleteAll(10)
            .changeDelay(30)
            .typeString('<span style="color: #569cd6;">const</span> name = <span style="color: #ce9178;">"Yara"</span><br><br>')
            .pauseFor(500)
            .callFunction(resolve)
            .start();
    });

    if (mySequenceId !== currentSequenceId) return;
    hideCursors();

    // Part 2
    await new Promise(resolve => {
        const div = document.createElement('span');
        terminal.appendChild(div);
        new Typewriter(div, { delay: 40, cursor: '|', cursorClassName: 'Typewriter__cursor' })
            .typeString('<span style="color: #569cd6;">const</span> role = <span style="color: #ce9178;">"frontend developer"</span>')
            .pauseFor(800)
            .changeDelay(50)
            .typeString('<br><br>hmm...<br>sounds too normal<br><br>refactoring...<br><br>')
            .pauseFor(400)
            .deleteAll(10)
            .changeDelay(40)
            .typeString('<span style="color: #569cd6;">const</span> role = <span style="color: #ce9178;">"future fullstack developer"</span>')
            .pauseFor(800)
            .changeDelay(60)
            .typeString('<br><br>hmm...<br>still not right<br><br>deleting...<br><br>')
            .pauseFor(300)
            .deleteAll(10)
            .changeDelay(45)
            .typeString('<span style="color: #569cd6;">const</span> role = <span style="color: #ce9178;">"someone who breaks code just to understand it"</span><br><br>')
            .pauseFor(300)
            .changeDelay(20)
            .typeString('<span style="color: #4CAF50;">✔ saved</span><br><br>')
            .pauseFor(800)
            .callFunction(resolve)
            .start();
    });

    if (mySequenceId !== currentSequenceId) return;
    hideCursors();

    // Part 3
    await new Promise(resolve => {
        const div = document.createElement('span');
        terminal.appendChild(div);
        new Typewriter(div, { delay: 35, cursor: '|', cursorClassName: 'Typewriter__cursor' })
            .typeString('write code<br>rewrite code<br>rewrite it again because:<br><span style="color: #ce9178;">"this structure looks suspicious"</span><br><br>')
            .pauseFor(800)
            .changeDelay(50)
            .typeString('opening project...<br><br>')
            .pauseFor(500)
            .changeDelay(20)
            .typeString('loading dependencies...<br>███████▒▒▒ 73%<br><br>')
            .pauseFor(600)
            .changeDelay(30)
            .typeString('initializing:<br><span style="color: #4CAF50;">✓</span> react<br><span style="color: #4CAF50;">✓</span> three.js<br><span style="color: #4CAF50;">✓</span> framer motion<br><span style="color: #4CAF50;">✓</span> occasional chaos<br><br>')
            .pauseFor(800)
            .changeDelay(50)
            .typeString('creating interfaces...<br>adding animations...<br>remaking everything because:<br><span style="color: #ce9178;">"the vibe is slightly off"</span><br><br>')
            .pauseFor(800)
            .changeDelay(40)
            .typeString('console.<span style="color: #dcdcaa;">log</span>(<span style="color: #ce9178;">"why is this working? don\'t touch it"</span>)<br><br>')
            .pauseFor(600)
            .changeDelay(60)
            .typeString('wait...<br>this logic feels wrong<br><br>')
            .pauseFor(400)
            .changeDelay(25)
            .typeString('fixing...<br>fixing...<br><br>perfect<br><br>')
            .pauseFor(600)
            .changeDelay(50)
            .typeString('...<br>actually no<br><br>')
            .pauseFor(400)
            .changeDelay(35)
            .typeString('adding:<br>- cleaner architecture<br>- reusable components<br>- less spaghetti code<br>- fewer bugs (theoretical)<br/>- more bugs (realistic)<br><br>')
            .pauseFor(500)
            .changeDelay(40)
            .typeString('console.<span style="color: #dcdcaa;">log</span>(<span style="color: #ce9178;">"one more small refactor"</span>)<br><br>')
            .pauseFor(500)
            .changeDelay(25)
            .typeString('fixing...<br>fixing...<br>fixing...<br><br>perfect<br><br>')
            .pauseFor(600)
            .changeDelay(60)
            .typeString('<span style="color: #cca700;">warning: perfectionism detected</span><br><br>')
            .pauseFor(500)
            .changeDelay(40)
            .typeString('...<br>actually wait<br><br>')
            .pauseFor(800)
            .changeDelay(40)
            .typeString('deploying portfolio...<br><br>')
            .pauseFor(1000)
            .changeDelay(70)
            .typeString('<span style="color: #f14c4c;">error: looked cooler in my head</span><br><br>')
            .pauseFor(600)
            .changeDelay(40)
            .typeString('retry? y/n<br>> y<br><br>always y<br><br>...<br><br>')
            .pauseFor(1000)
            .changeDelay(60)
            .typeString('do you want to see a magic trick?<br><br>')
            .pauseFor(500)
            .changeDelay(40)
            .typeString('> press enter')
            .callFunction(resolve)
            .start();
    });

    if (mySequenceId !== currentSequenceId) return;

    // Wait for FIRST enter key
    await new Promise(resolve => {
        brainKeydownListener = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                document.removeEventListener('keydown', brainKeydownListener, true);
                brainKeydownListener = null;
                resolve();
            }
        };
        document.addEventListener('keydown', brainKeydownListener, true);
    });

    if (mySequenceId !== currentSequenceId) return;

    // Fake error / thinking sequence
    await new Promise(resolve => {
        const div = document.createElement('span');
        terminal.appendChild(div);
        new Typewriter(div, { delay: 60, cursor: '|', cursorClassName: 'Typewriter__cursor' })
            .typeString('<br><br>...hmm... not working...<br><br>')
            .pauseFor(800)
            .changeDelay(40)
            .typeString('...thinking...<br>')
            .pauseFor(600)
            .changeDelay(40)
            .typeString('...thinking...<br>')
            .pauseFor(1000)
            .changeDelay(70)
            .typeString('hmm...<br>')
            .pauseFor(600)
            .changeDelay(70)
            .typeString('thinking...<br>')
            .pauseFor(800)
            .changeDelay(20)
            .typeString('fixing...<br><br>')
            .pauseFor(100)
            .changeDelay(50)
            .typeString('please press ENTER')
            .callFunction(resolve)
            .start();
    });

    if (mySequenceId !== currentSequenceId) return;

    // Wait for SECOND enter key
    await new Promise(resolve => {
        brainKeydownListener = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                document.removeEventListener('keydown', brainKeydownListener, true);
                brainKeydownListener = null;
                resolve();
            }
        };
        document.addEventListener('keydown', brainKeydownListener, true);
    });

    if (mySequenceId !== currentSequenceId) return;

    // Fast delete / clear terminal
    terminal.innerHTML = '<span style="color: #888888;">clearing terminal...</span>';
    await new Promise(r => setTimeout(r, 150));
    terminal.innerHTML = ''; // instantly clear
    await new Promise(r => setTimeout(r, 300)); // Pause ~300ms

    if (mySequenceId !== currentSequenceId) return;

    // Magic Sequence (warm, slow, emotional)
    await new Promise(resolve => {
        const div = document.createElement('span');
        terminal.appendChild(div);
        new Typewriter(div, { delay: 90, cursor: '|', cursorClassName: 'Typewriter__cursor' }) // Slower, warmer
            .typeString('compiling emotions...<br><br>')
            .pauseFor(500)
            .changeDelay(20) // Fast load bar
            .typeString('██████████████ 100%<br><br>')
            .pauseFor(1200)
            .changeDelay(130) // Very slow, gentle
            .typeString('hey you ✨<br><br>')
            .pauseFor(1000)
            .changeDelay(80)
            .typeString('this little ide is just for fun<br><br>')
            .pauseFor(600)
            .typeString('you can leave your own thoughts here<br>your wishes, ideas, bugs, dreams...<br>anything<br><br>')
            .pauseFor(1000)
            .changeDelay(100)
            .typeString('and before you go:<br><br>')
            .pauseFor(1200)
            .changeDelay(150) // High emotional weight
            .typeString('you are a really amazing person<br><br>')
            .pauseFor(1200)
            .changeDelay(90)
            .typeString('may your code compile<br>your animations stay smooth<br>and your bugs be easy to find<br><br>')
            .pauseFor(1000)
            .changeDelay(120)
            .typeString('sending virtual hugs...<br><br>⊂(˶ᵔ ᵕ ᵔ˶)⊃<br><br>')
            .pauseFor(1000)
            .changeDelay(100)
            .typeString('have a beautiful day 💛<br><br>')
            .pauseFor(800)
            .changeDelay(30) // Fast computer exit
            .typeString('<span style="color: #6a9955;">process finished with exit code 0</span>')
            .callFunction(() => {
                const cursors = document.querySelectorAll('.Typewriter__cursor');
                cursors.forEach(c => {
                    c.style.animation = 'none';
                    c.style.opacity = '0';
                });
                resolve();
            })
            .start();
    });

    isBrainRunning = false;
};

export const stopBrainSequence = () => {
    currentSequenceId++; // Invalidates running sequences
    if (brainKeydownListener) {
        document.removeEventListener('keydown', brainKeydownListener, true);
        brainKeydownListener = null;
    }
    isBrainRunning = false;
};
