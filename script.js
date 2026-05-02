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
    
    // The exact specific code strings with highlighting markup
    const aboutCode = `<span class="syn-keyword">import</span> React, { useEffect } <span class="syn-keyword">from</span> <span class="syn-string">'react'</span>;

<span class="syn-comment">// "She doesn't know everything.</span>
<span class="syn-comment">// But she knows enough</span>
<span class="syn-comment">// to figure out the rest faster than you expect."</span>

<span class="syn-keyword">const</span> <span class="syn-type">About</span> <span class="syn-keyword">=</span> () <span class="syn-keyword">=></span> {
  <span class="syn-keyword">const</span> person <span class="syn-keyword">=</span> {
    name: <span class="syn-string">"Iryna Vyshniak"</span>,
    title: <span class="syn-string">"Future Full Stack Developer (almost legendary 💅)"</span>,
    origin: { country: <span class="syn-string">"Україна 🇺🇦"</span>, coordinates: <span class="syn-string">"там, де сильні люди і гарний код народжуються"</span> },
    status: <span class="syn-string">"openToWork && openToMagic"</span>
  };

  <span class="syn-keyword">const</span> skills <span class="syn-keyword">=</span> {
    favorite: [<span class="syn-string">"React"</span>, <span class="syn-string">"shadcn/ui"</span>, <span class="syn-string">"Tailwind CSS"</span>, <span class="syn-string">"Framer Motion"</span>],
    learning: [<span class="syn-string">"React Native"</span>, <span class="syn-string">"Ionic"</span>, <span class="syn-string">"Next.js"</span>, <span class="syn-string">"Angular"</span>]
  };

  <span class="syn-keyword">const</span> bio <span class="syn-keyword">=</span> [
    <span class="syn-string">"// Programming is not just code — it's моя територія спокою"</span>,
    <span class="syn-string">"// Коли світ шумить — я пишу логіку"</span>,
    <span class="syn-string">"// Книги - надихають, art - заспокоює, код - захоплює"</span>,
    <span class="syn-string">"// І так, іноді я думаю як компонент React"</span>
  ];

  <span class="syn-keyword">const</span> softSkills <span class="syn-keyword">=</span> [
    <span class="syn-string">"переживаю глибше, ніж баги в продакшені"</span>,
    <span class="syn-string">"вчуся швидше, ніж падає мотивація"</span>,
    <span class="syn-string">"тримаюсь навіть коли все хоче впасти"</span>
  ];

  <span class="syn-keyword">const</span> companion <span class="syn-keyword">=</span> { 
    name: <span class="syn-string">"Fletcher 🐾"</span>, 
    role: <span class="syn-string">"Head of QA & emotional support department 🐾"</span> <span class="syn-comment">// occasionally interrupts debugging sessions for mandatory petting</span>
  };

  <span class="syn-keyword">const</span> future <span class="syn-keyword">=</span> {
    goals: [<span class="syn-string">"become strong fullstack"</span>, <span class="syn-string">"web + mobile products"</span>],
    description: <span class="syn-string">"ambitious, трохи зухвалий і точно мій"</span>
  };

  <span class="syn-comment">// main loop</span>
  <span class="syn-function">useEffect</span>(() <span class="syn-keyword">=></span> {
    <span class="syn-keyword">let</span> alive <span class="syn-keyword">=</span> <span class="syn-keyword">true</span>;
    <span class="syn-keyword">while</span> (alive) {
      <span class="syn-function">learn</span>();
      <span class="syn-function">code</span>();
      <span class="syn-function">create</span>();
      <span class="syn-function">overthink</span>(); <span class="syn-comment">// optional, але часто true 😅</span>
    }
    <span class="syn-keyword">return</span> () <span class="syn-keyword">=></span> alive <span class="syn-keyword">=</span> <span class="syn-keyword">false</span>;
  }, []);

  <span class="syn-keyword">return</span> (
    <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"about-wrapper"</span> <span class="syn-property">data-status</span><span class="syn-keyword">=</span>{person.status}<span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;</span><span class="syn-type">header</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">h1</span><span class="syn-operator">&gt;</span>{person.name}<span class="syn-operator">&lt;/</span><span class="syn-type">h1</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>{person.title}<span class="syn-operator">&lt;/</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">p</span><span class="syn-operator">&gt;</span>{person.origin.country} — {person.origin.coordinates}<span class="syn-operator">&lt;/</span><span class="syn-type">p</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;/</span><span class="syn-type">header</span><span class="syn-operator">&gt;</span>

      <span class="syn-operator">&lt;</span><span class="syn-type">section</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"bio-logs"</span><span class="syn-operator">&gt;</span>
        {bio.map((log, index) <span class="syn-keyword">=></span> <span class="syn-operator">&lt;</span><span class="syn-type">p</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{index} <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"code-comment"</span><span class="syn-operator">&gt;</span>{log}<span class="syn-operator">&lt;/</span><span class="syn-type">p</span><span class="syn-operator">&gt;</span>)}
      <span class="syn-operator">&lt;/</span><span class="syn-type">section</span><span class="syn-operator">&gt;</span>

      <span class="syn-operator">&lt;</span><span class="syn-type">section</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"core-skills"</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>Soft Skills<span class="syn-operator">&lt;/</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
          {softSkills.map((skill, index) <span class="syn-keyword">=></span> <span class="syn-operator">&lt;</span><span class="syn-type">li</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{index}<span class="syn-operator">&gt;</span>{skill}<span class="syn-operator">&lt;/</span><span class="syn-type">li</span><span class="syn-operator">&gt;</span>)}
        <span class="syn-operator">&lt;/</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;/</span><span class="syn-type">section</span><span class="syn-operator">&gt;</span>

      <span class="syn-operator">&lt;</span><span class="syn-type">section</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"companion-block"</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>Companion<span class="syn-operator">&lt;/</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">p</span><span class="syn-operator">&gt;&lt;</span><span class="syn-type">strong</span><span class="syn-operator">&gt;</span>{companion.name}<span class="syn-operator">&lt;/</span><span class="syn-type">strong</span><span class="syn-operator">&gt;</span>: {companion.role}<span class="syn-operator">&lt;/</span><span class="syn-type">p</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;/</span><span class="syn-type">section</span><span class="syn-operator">&gt;</span>

      <span class="syn-operator">&lt;</span><span class="syn-type">section</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"future-vision"</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>Future Vision: {future.description}<span class="syn-operator">&lt;/</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
          {future.goals.map((goal, index) <span class="syn-keyword">=></span> <span class="syn-operator">&lt;</span><span class="syn-type">li</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{index}<span class="syn-operator">&gt;</span>{goal}<span class="syn-operator">&lt;/</span><span class="syn-type">li</span><span class="syn-operator">&gt;</span>)}
        <span class="syn-operator">&lt;/</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;/</span><span class="syn-type">section</span><span class="syn-operator">&gt;</span>
    <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>
  );
};

<span class="syn-keyword">export default</span> <span class="syn-type">About</span>;`;

    const skillsCode = `<span class="syn-keyword">import</span> React, { useEffect } <span class="syn-keyword">from</span> <span class="syn-string">'react'</span>;

<span class="syn-comment">// "Skills are not a list.</span>
<span class="syn-comment">// They’re what I actually use when things break."</span>

<span class="syn-keyword">const</span> <span class="syn-type">Skills</span> <span class="syn-keyword">=</span> () <span class="syn-keyword">=></span> {
  <span class="syn-keyword">const</span> energy <span class="syn-keyword">=</span> <span class="syn-string">"calm outside, debugger inside 🔥"</span>;

  <span class="syn-keyword">const</span> mindset <span class="syn-keyword">=</span> [
    <span class="syn-string">"8+ hours per day? easily."</span>,
    <span class="syn-string">"attention to detail — навіть там, де її не шукають"</span>,
    <span class="syn-string">"learning mode: always ON"</span>,
    <span class="syn-string">"team player, але думаю самостійно"</span>,
    <span class="syn-string">"customer-first, навіть якщо це мій власний проєкт"</span>,
    <span class="syn-string">"creative problem solving > panic"</span>
  ];

  <span class="syn-keyword">const</span> techStack <span class="syn-keyword">=</span> {
    languages: [<span class="syn-string">"HTML (structure matters)"</span>, <span class="syn-string">"CSS (make it beautiful)"</span>, <span class="syn-string">"JavaScript (make it work)"</span>, <span class="syn-string">"TypeScript (make it safe)"</span>],
    frontend: [<span class="syn-string">"React (main weapon)"</span>, <span class="syn-string">"Next.js (leveling up)"</span>, <span class="syn-string">"Tailwind CSS"</span>, <span class="syn-string">"MUI / Chakra / shadcn (UI without suffering)"</span>],
    backend: [<span class="syn-string">"Node.js (logic lives here)"</span>, <span class="syn-string">"Express (keep it simple)"</span>],
    mobile: [<span class="syn-string">"React Native (code without borders)"</span>, <span class="syn-string">"Ionic (because why not)"</span>],
    database: [<span class="syn-string">"MongoDB (flexible like me)"</span>, <span class="syn-string">"SQLite (small but solid)"</span>],
    devOps: [<span class="syn-string">"Vercel (deploy & breathe)"</span>, <span class="syn-string">"Render"</span>, <span class="syn-string">"Netlify"</span>],
    tools: [<span class="syn-string">"Git (my memory)"</span>, <span class="syn-string">"Postman (truth checker)"</span>, <span class="syn-string">"Figma"</span>, <span class="syn-string">"Swagger"</span>, <span class="syn-string">"VS Code (home 🏠)"</span>],
    extras: [<span class="syn-string">"Socket.io (real-time things)"</span>, <span class="syn-string">"Firebase"</span>, <span class="syn-string">"Mongoose"</span>, <span class="syn-string">"Axios"</span>, <span class="syn-string">"Clerk Auth"</span>, <span class="syn-string">"i18next"</span>, <span class="syn-string">"Formik"</span>]
  };

  <span class="syn-comment">// main loop</span>
  <span class="syn-function">useEffect</span>(() <span class="syn-keyword">=></span> {
    <span class="syn-keyword">let</span> alive <span class="syn-keyword">=</span> <span class="syn-keyword">true</span>;
    <span class="syn-keyword">while</span> (alive) {
      <span class="syn-function">learn</span>();
      <span class="syn-function">build</span>();
      <span class="syn-function">getBetter</span>();
    }
    <span class="syn-keyword">return</span> () <span class="syn-keyword">=></span> alive <span class="syn-keyword">=</span> <span class="syn-keyword">false</span>;
  }, []);

  <span class="syn-keyword">return</span> (
    <span class="syn-operator">&lt;</span><span class="syn-type">section</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"skills-container"</span> <span class="syn-property">data-vibe</span><span class="syn-keyword">=</span>{energy}<span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>My Mindset<span class="syn-operator">&lt;/</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
        {mindset.map((item, index) <span class="syn-keyword">=></span> <span class="syn-operator">&lt;</span><span class="syn-type">li</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{index}<span class="syn-operator">&gt;</span>{item}<span class="syn-operator">&lt;/</span><span class="syn-type">li</span><span class="syn-operator">&gt;</span>)}
      <span class="syn-operator">&lt;/</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>Tech Stack<span class="syn-operator">&lt;/</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"tech-stack-grid"</span><span class="syn-operator">&gt;</span>
        {Object.entries(techStack).map(([category, items]) <span class="syn-keyword">=></span> (
          <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{category} <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"tech-category"</span><span class="syn-operator">&gt;</span>
            <span class="syn-operator">&lt;</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>{category}<span class="syn-operator">&lt;/</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>
            <span class="syn-operator">&lt;</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
              {items.map((item, idx) <span class="syn-keyword">=></span> <span class="syn-operator">&lt;</span><span class="syn-type">li</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{idx}<span class="syn-operator">&gt;</span>{item}<span class="syn-operator">&lt;/</span><span class="syn-type">li</span><span class="syn-operator">&gt;</span>)}
            <span class="syn-operator">&lt;/</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
          <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>
        ))}
      <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>
    <span class="syn-operator">&lt;/</span><span class="syn-type">section</span><span class="syn-operator">&gt;</span>
  );
};

<span class="syn-keyword">export default</span> <span class="syn-type">Skills</span>;`;

    const contactsCode = `<span class="syn-keyword">import</span> React, { useState } <span class="syn-keyword">from</span> <span class="syn-string">'react'</span>;
<span class="syn-keyword">import</span> { sendEmail, openLinkedIn, maybeScrollInstagram } <span class="syn-keyword">from</span> <span class="syn-string">'../utils/actions'</span>;

<span class="syn-comment">// "Need to reach me? Good choice."</span>

<span class="syn-keyword">const</span> <span class="syn-type">Contacts</span> <span class="syn-keyword">=</span> () <span class="syn-keyword">=></span> {
  <span class="syn-keyword">const</span> [status] <span class="syn-keyword">=</span> <span class="syn-function">useState</span>(<span class="syn-string">"openToWork"</span>);
  <span class="syn-keyword">const</span> [mood] <span class="syn-keyword">=</span> <span class="syn-function">useState</span>(<span class="syn-string">"motivated & slightly unstoppable"</span>);

  <span class="syn-keyword">const</span> note <span class="syn-keyword">=</span> <span class="syn-string">\`I reply faster than most APIs.
  Unless I'm coding.
  Then... give me a minute 😏\`</span>;

  <span class="syn-comment">// quick access</span>
  <span class="syn-keyword">const</span> <span class="syn-function">reachMe</span> <span class="syn-keyword">=</span> () <span class="syn-keyword">=></span> {
    <span class="syn-function">sendEmail</span>(<span class="syn-string">"iryna.vyshniak@gmail.com"</span>);
    <span class="syn-function">openLinkedIn</span>(<span class="syn-string">"Iryna Vyshniak"</span>);
    <span class="syn-function">maybeScrollInstagram</span>(); <span class="syn-comment">// optional but recommended 😄</span>
  };

  <span class="syn-comment">// bonus</span>
  <span class="syn-keyword">if</span> (navigator.userAgent.<span class="syn-function">includes</span>(<span class="syn-string">"HR"</span>)) {
    console.<span class="syn-function">log</span>(<span class="syn-string">"You just found your developer."</span>);
  }

  <span class="syn-keyword">return</span> (
    <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"contact-wrapper"</span> <span class="syn-property">data-status</span><span class="syn-keyword">=</span>{status} <span class="syn-property">data-mood</span><span class="syn-keyword">=</span>{mood}<span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>Let's Connect<span class="syn-operator">&lt;/</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;</span><span class="syn-type">p</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"contact-note"</span><span class="syn-operator">&gt;</span>{note}<span class="syn-operator">&lt;/</span><span class="syn-type">p</span><span class="syn-operator">&gt;</span>
      
      <span class="syn-operator">&lt;</span><span class="syn-type">button</span> <span class="syn-property">onClick</span><span class="syn-keyword">=</span>{reachMe} <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"btn-primary"</span><span class="syn-operator">&gt;</span>
        Initialize Contact
      <span class="syn-operator">&lt;/</span><span class="syn-type">button</span><span class="syn-operator">&gt;</span>

      <span class="syn-operator">&lt;</span><span class="syn-type">footer</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"social-links"</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">a</span> <span class="syn-property">href</span><span class="syn-keyword">=</span><span class="syn-string">"https://twitter.com/YarynaVN"</span><span class="syn-operator">&gt;</span>Twitter<span class="syn-operator">&lt;/</span><span class="syn-type">a</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">a</span> <span class="syn-property">href</span><span class="syn-keyword">=</span><span class="syn-string">"https://www.instagram.com/arteincode/"</span><span class="syn-operator">&gt;</span>Instagram<span class="syn-operator">&lt;/</span><span class="syn-type">a</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;/</span><span class="syn-type">footer</span><span class="syn-operator">&gt;</span>
    <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>
  );
};

<span class="syn-keyword">export default</span> <span class="syn-type">Contacts</span>;`;

    const educationCode = `<span class="syn-keyword">import</span> React <span class="syn-keyword">from</span> <span class="syn-string">'react'</span>;

<span class="syn-comment">/*
"Education is not where I started.
It's how I keep going."
*/</span>

<span class="syn-keyword">const</span> <span class="syn-type">Education</span> <span class="syn-keyword">=</span> () <span class="syn-keyword">=></span> {
  <span class="syn-keyword">const</span> path <span class="syn-keyword">=</span> <span class="syn-string">"self-taught developer"</span>;

  <span class="syn-keyword">const</span> sources <span class="syn-keyword">=</span> [
    <span class="syn-string">"Udemy"</span>,
    <span class="syn-string">"YouTube"</span>,
    <span class="syn-string">"freeCodeCamp"</span>,
    <span class="syn-string">"official documentation (when things get serious)"</span>
  ];

  <span class="syn-keyword">const</span> method <span class="syn-keyword">=</span> [
    <span class="syn-string">"learn → build → break → fix → repeat"</span>,
    <span class="syn-string">"real projects over passive watching"</span>,
    <span class="syn-string">"docs first, panic later 😏"</span>
  ];

  <span class="syn-keyword">const</span> focus <span class="syn-keyword">=</span> [
    <span class="syn-string">"React (deep dive through real projects)"</span>,
    <span class="syn-string">"Next.js (learning by building)"</span>,
    <span class="syn-string">"React Native & Ionic (mobile direction)"</span>,
    <span class="syn-string">"JavaScript deep understanding"</span>,
    <span class="syn-string">"UI/UX basics (Figma + practice)"</span>,
    <span class="syn-string">"debugging via Google, StackOverflow & stubbornness 😏"</span>
  ];

  <span class="syn-keyword">const</span> approach <span class="syn-keyword">=</span> [
    <span class="syn-string">"// не чекаю ідеального моменту — просто починаю"</span>,
    <span class="syn-string">"// вчуся через практику, а не тільки теорію"</span>,
    <span class="syn-string">"// якщо щось не працює — розбираюсь, поки не зрозумію"</span>,
    <span class="syn-string">"// кожен проєкт = новий рівень"</span>
  ];

  <span class="syn-keyword">const</span> realityCheck <span class="syn-keyword">=</span> <span class="syn-string">\`
Courses don’t make developers.
Practice does.
\`</span>;

  <span class="syn-keyword">return</span> (
    <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"education-wrapper"</span> <span class="syn-property">data-path</span><span class="syn-keyword">=</span>{path}<span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;</span><span class="syn-type">header</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>Path: {path}<span class="syn-operator">&lt;/</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;/</span><span class="syn-type">header</span><span class="syn-operator">&gt;</span>

      <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"education-grid"</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">section</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"edu-sources"</span><span class="syn-operator">&gt;</span>
          <span class="syn-operator">&lt;</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>Sources<span class="syn-operator">&lt;/</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>
          <span class="syn-operator">&lt;</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
            {sources.map((item, index) <span class="syn-keyword">=></span> <span class="syn-operator">&lt;</span><span class="syn-type">li</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{index}<span class="syn-operator">&gt;</span>{item}<span class="syn-operator">&lt;/</span><span class="syn-type">li</span><span class="syn-operator">&gt;</span>)}
          <span class="syn-operator">&lt;/</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;/</span><span class="syn-type">section</span><span class="syn-operator">&gt;</span>

        <span class="syn-operator">&lt;</span><span class="syn-type">section</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"edu-methods"</span><span class="syn-operator">&gt;</span>
          <span class="syn-operator">&lt;</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>Method<span class="syn-operator">&lt;/</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>
          <span class="syn-operator">&lt;</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
            {method.map((item, index) <span class="syn-keyword">=></span> <span class="syn-operator">&lt;</span><span class="syn-type">li</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{index}<span class="syn-operator">&gt;</span>{item}<span class="syn-operator">&lt;/</span><span class="syn-type">li</span><span class="syn-operator">&gt;</span>)}
          <span class="syn-operator">&lt;/</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;/</span><span class="syn-type">section</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>

      <span class="syn-operator">&lt;</span><span class="syn-type">section</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"edu-focus"</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>Current Focus<span class="syn-operator">&lt;/</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
          {focus.map((item, index) <span class="syn-keyword">=></span> <span class="syn-operator">&lt;</span><span class="syn-type">li</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{index}<span class="syn-operator">&lt;/</span><span class="syn-type">li</span><span class="syn-operator">&gt;</span>)}
        <span class="syn-operator">&lt;/</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;/</span><span class="syn-type">section</span><span class="syn-operator">&gt;</span>

      <span class="syn-operator">&lt;</span><span class="syn-type">section</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"edu-approach code-comments"</span><span class="syn-operator">&gt;</span>
        {approach.map((item, index) <span class="syn-keyword">=></span> <span class="syn-operator">&lt;</span><span class="syn-type">p</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{index}<span class="syn-operator">&gt;</span>{item}<span class="syn-operator">&lt;/</span><span class="syn-type">p</span><span class="syn-operator">&gt;</span>)}
      <span class="syn-operator">&lt;/</span><span class="syn-type">section</span><span class="syn-operator">&gt;</span>

      <span class="syn-operator">&lt;</span><span class="syn-type">footer</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"reality-check"</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">blockquote</span><span class="syn-operator">&gt;</span>{realityCheck.trim()}<span class="syn-operator">&lt;/</span><span class="syn-type">blockquote</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">p</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"code-comment"</span><span class="syn-operator">&gt;</span><span class="syn-comment">// still learning. not slowing down.</span><span class="syn-operator">&lt;/</span><span class="syn-type">p</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;/</span><span class="syn-type">footer</span><span class="syn-operator">&gt;</span>
    <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>
  );
};

<span class="syn-keyword">export default</span> <span class="syn-type">Education</span>;`;

    const syntaxHighlightComments = (str) => {
        // Safe wrap comments unless already wrapped
        return str.replace(/(\/\/[^\n]*)/g, '<span class="syn-comment">$1</span>')
                  .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="syn-comment">$1</span>');
    };

    const getCodeForFile = (filename) => {
        if (filename === 'About.jsx') return aboutCode;
        if (filename === 'Skills.jsx') return skillsCode;
        if (filename === 'Contacts.jsx') return contactsCode;
        if (filename === 'Education.jsx') return educationCode;

        return syntaxHighlightComments(`// TODO: Content for ${filename} goes here...

<span class="syn-keyword">export default function</span> <span class="syn-function">Component</span>() { 
  <span class="syn-keyword">return</span> <span class="syn-operator">&lt;</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>${filename} Data<span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>; 
}`);
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
