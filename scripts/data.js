export const aboutCode = `<span class="syn-keyword">import</span> React, { useEffect } <span class="syn-keyword">from</span> <span class="syn-string">'react'</span>;

<span class="syn-comment">// "I don't know everything.</span>
<span class="syn-comment">// But I know enough</span>
<span class="syn-comment">// to figure out the rest faster than you expect."</span>

<span class="syn-keyword">const</span> <span class="syn-type">About</span> <span class="syn-keyword">=</span> () <span class="syn-keyword">=></span> {
  <span class="syn-keyword">const</span> person <span class="syn-keyword">=</span> {
    name: <span class="syn-string">"Iryna Vyshniak"</span>,
    title: <span class="syn-string">"Future Full Stack Developer (almost very strong 💅)"</span>,
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

export const skillsCode = `<span class="syn-keyword">import</span> React, { useEffect } <span class="syn-keyword">from</span> <span class="syn-string">'react'</span>;

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

export const contactsCode = `<span class="syn-keyword">import</span> React, { useState } <span class="syn-keyword">from</span> <span class="syn-string">'react'</span>;
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

export const educationCode = `<span class="syn-keyword">import</span> React <span class="syn-keyword">from</span> <span class="syn-string">'react'</span>;

<span class="syn-comment">/*</span>
<span class="syn-comment">"Education is not where I started.</span>
<span class="syn-comment">It's how I keep going."</span>
<span class="syn-comment">*/</span>

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

export const mainCode = `<span class="syn-keyword">import</span> React <span class="syn-keyword">from</span> <span class="syn-string">'react'</span>;
<span class="syn-keyword">import</span> ReactDOM <span class="syn-keyword">from</span> <span class="syn-string">'react-dom/client'</span>;
<span class="syn-keyword">import</span> App <span class="syn-keyword">from</span> <span class="syn-string">'./App.jsx'</span>;
<span class="syn-keyword">import</span> <span class="syn-string">'./index.css'</span>;

<span class="syn-comment">// Initialize the portfolio matrix</span>
<span class="syn-comment">// Warning: highly concentrated ambition inside ⚠️</span>
console.<span class="syn-function">log</span>(<span class="syn-string">"Booting up Iryna's VS Code ecosystem..."</span>);
console.<span class="syn-function">log</span>(<span class="syn-string">"Theme loaded: Blueberry Banana 🫐🍌"</span>);

ReactDOM.<span class="syn-function">createRoot</span>(document.<span class="syn-function">getElementById</span>(<span class="syn-string">'root'</span>)).<span class="syn-function">render</span>(
  <span class="syn-operator">&lt;</span><span class="syn-type">React.StrictMode</span><span class="syn-operator">&gt;</span>
    <span class="syn-operator">&lt;</span><span class="syn-type">App</span> <span class="syn-operator">/&gt;</span>
  <span class="syn-operator">&lt;/</span><span class="syn-type">React.StrictMode</span><span class="syn-operator">&gt;</span>,
);`;

export const experienceCode = `<span class="syn-keyword">import</span> React <span class="syn-keyword">from</span> <span class="syn-string">'react'</span>;

<span class="syn-comment">/*</span>
<span class="syn-comment">"Experience is not just what you've done.</span>
<span class="syn-comment">It's how you adapted while doing it."</span>
<span class="syn-comment">*/</span>

<span class="syn-keyword">const</span> <span class="syn-type">Experience</span> <span class="syn-keyword">=</span> () <span class="syn-keyword">=></span> {
  <span class="syn-keyword">const</span> roles <span class="syn-keyword">=</span> [
    {
      title: <span class="syn-string">"Freelance Work, Part-time Roles & Volunteer Activities"</span>,
      period: <span class="syn-string">"2022 – Present"</span>,
      summary: <span class="syn-string">"Structured transition period combining self-directed software development with diverse work and volunteering experience."</span>,
      highlights: [
        <span class="syn-string">"Performed part-time roles (tutoring, service-based work), strengthening responsibility, communication, and adaptability."</span>,
        <span class="syn-string">"Engaged in animal rescue volunteering, supporting care, coordination, and assistance activities."</span>,
        <span class="syn-string">"Maintained continuous self-learning in frontend development (React, Next.js, modern JS ecosystem)."</span>,
        <span class="syn-string">"Transitioned into software engineering through hands-on project development and real implementations."</span>
      ]
    },
    {
      title: <span class="syn-string">"Chief Manager — VIP Residential Complex"</span>,
      period: <span class="syn-string">"Kyiv Region | 2016 – 2022"</span>,
      summary: <span class="syn-string">"Managed operational workflows in a high-responsibility environment."</span>,
      highlights: [
        <span class="syn-string">"Coordinated internal processes and service operations."</span>,
        <span class="syn-string">"Ensured system stability and issue resolution."</span>,
        <span class="syn-string">"Improved operational efficiency and daily execution processes."</span>
      ]
    },
    {
      title: <span class="syn-string">"School Principal — Secondary School"</span>,
      period: <span class="syn-string">"Luhansk Region | 2014 – 2016"</span>,
      summary: <span class="syn-string">"Led full institutional operations and staff coordination."</span>,
      highlights: [
        <span class="syn-string">"Structured administrative workflows and planning systems."</span>,
        <span class="syn-string">"Improved organizational efficiency and execution processes."</span>,
        <span class="syn-string">"Managed institutional development and operational stability."</span>
      ]
    }
  ];

  <span class="syn-keyword">return</span> (
    <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"experience-wrapper"</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;</span><span class="syn-type">header</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>Professional Experience<span class="syn-operator">&lt;/</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;/</span><span class="syn-type">header</span><span class="syn-operator">&gt;</span>

      <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"timeline"</span><span class="syn-operator">&gt;</span>
        {roles.map((job, index) <span class="syn-keyword">=></span> (
          <span class="syn-operator">&lt;</span><span class="syn-type">section</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{index} <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"job-card"</span><span class="syn-operator">&gt;</span>
            <span class="syn-operator">&lt;</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>{job.title}<span class="syn-operator">&lt;/</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>
            <span class="syn-operator">&lt;</span><span class="syn-type">p</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"period"</span><span class="syn-operator">&gt;</span>{job.period}<span class="syn-operator">&lt;/</span><span class="syn-type">p</span><span class="syn-operator">&gt;</span>
            <span class="syn-operator">&lt;</span><span class="syn-type">p</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"summary"</span><span class="syn-operator">&gt;</span>{job.summary}<span class="syn-operator">&lt;/</span><span class="syn-type">p</span><span class="syn-operator">&gt;</span>
            <span class="syn-operator">&lt;</span><span class="syn-type">ul</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"highlights"</span><span class="syn-operator">&gt;</span>
              {job.highlights.map((highlight, idx) <span class="syn-keyword">=></span> (
                <span class="syn-operator">&lt;</span><span class="syn-type">li</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{idx}<span class="syn-operator">&gt;</span>{highlight}<span class="syn-operator">&lt;/</span><span class="syn-type">li</span><span class="syn-operator">&gt;</span>
              ))}
            <span class="syn-operator">&lt;/</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
          <span class="syn-operator">&lt;/</span><span class="syn-type">section</span><span class="syn-operator">&gt;</span>
        ))}
      <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>
    <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>
  );
};

<span class="syn-keyword">export default</span> <span class="syn-type">Experience</span>;`;

export const projectsCode = `<span class="syn-keyword">import</span> React <span class="syn-keyword">from</span> <span class="syn-string">'react'</span>;

<span class="syn-comment">/*</span>
<span class="syn-comment">"Talk is cheap. Show me the code."</span>
<span class="syn-comment">Here are some of the things I've built.</span>
<span class="syn-comment">*/</span>

<span class="syn-keyword">const</span> <span class="syn-type">Projects</span> <span class="syn-keyword">=</span> () <span class="syn-keyword">=></span> {
  <span class="syn-keyword">const</span> intro <span class="syn-keyword">=</span> {
    role: <span class="syn-string">"Frontend / Fullstack Developer (Self-Directed Projects)"</span>,
    period: <span class="syn-string">"2022 – Present"</span>,
    highlights: [
      <span class="syn-string">"Built and deployed 4+ production-style applications using React, Next.js, and modern frontend stacks."</span>,
      <span class="syn-string">"Designed scalable component-based architecture using reusable UI systems (shadcn/ui, Radix UI patterns)."</span>,
      <span class="syn-string">"Developed full-featured applications with authentication, CRUD operations, and dynamic routing."</span>,
      <span class="syn-string">"Integrated backend services and databases including Firebase, MongoDB, and Appwrite."</span>,
      <span class="syn-string">"Implemented REST API integrations and structured client-side data flow."</span>,
      <span class="syn-string">"Built responsive, mobile-first UI systems ensuring cross-device compatibility."</span>,
      <span class="syn-string">"Implemented advanced features including maps (Leaflet + TomTom), payments (Stripe), and form validation (Zod)."</span>
    ]
  };

  <span class="syn-keyword">const</span> projects <span class="syn-keyword">=</span> [
    {
      title: <span class="syn-string">"Real Estate Platform"</span>,
      preview: <img src="/images/real_estate.webp" alt="Real Estate Platform Preview" style="width: 100%; max-width: 400px; display: block; margin: 10px 0; border-radius: 6px; border: 1px solid #333;" />,
      techStack: <span class="syn-string">"React, Firebase, Leaflet, TomTom, Tailwind CSS"</span>,
      image: <span class="syn-string">"/images/real_estate.webp"</span>,
      points: [
        <span class="syn-string">"Built a property listing application with Firebase Firestore backend integration."</span>,
        <span class="syn-string">"Implemented interactive geolocation maps using Leaflet and TomTom APIs."</span>,
        <span class="syn-string">"Developed reusable UI components following modern shadcn/ui design patterns."</span>,
        <span class="syn-string">"Added image galleries and media browsing using Swiper."</span>,
        <span class="syn-string">"Designed fully responsive UI optimized for mobile and desktop."</span>
      ],
      link: <span class="syn-string">"Source Code on GitHub"</span>
    },
    {
      title: <span class="syn-string">"LittleLingo – Mobile Learning App"</span>,
      preview: <img src="/images/littlelingo.png" alt="LittleLingo Preview" style="width: 100%; max-width: 400px; display: block; margin: 10px 0; border-radius: 6px; border: 1px solid #333;" />,
      techStack: <span class="syn-string">"Ionic, React, Capacitor"</span>,
      image: <span class="syn-string">"/images/littlelingo.png"</span>,
      points: [
        <span class="syn-string">"Developed cross-platform mobile application (iOS / Android)."</span>,
        <span class="syn-string">"Implemented drag-and-drop interactions using React DnD."</span>,
        <span class="syn-string">"Managed application state using Zustand."</span>,
        <span class="syn-string">"Built animations and UI transitions using Framer Motion."</span>,
        <span class="syn-string">"Structured scalable component architecture for learning flows."</span>
      ],
      link: <span class="syn-string">"Source Code on GitHub"</span>
    },
    {
      title: <span class="syn-string">"Events Platform"</span>,
      preview: <img src="/images/events.png" alt="Events Platform Preview" style="width: 100%; max-width: 400px; display: block; margin: 10px 0; border-radius: 6px; border: 1px solid #333;" />,
      techStack: <span class="syn-string">"Next.js 14, MongoDB, Stripe"</span>,
      image: <span class="syn-string">"/images/events.png"</span>,
      points: [
        <span class="syn-string">"Built fullstack event management platform using Next.js App Router."</span>,
        <span class="syn-string">"Integrated MongoDB + Mongoose for database modeling."</span>,
        <span class="syn-string">"Implemented authentication using Clerk."</span>,
        <span class="syn-string">"Added payment processing using Stripe API."</span>,
        <span class="syn-string">"Built UI using shadcn/ui and Radix UI components."</span>
      ],
      link: <span class="syn-string">"Source Code on GitHub"</span>
    },
    {
      title: <span class="syn-string">"HealthyCare – Patient Management System"</span>,
      preview: <img src="/images/healthycare.png" alt="HealthyCare Preview" style="width: 100%; max-width: 400px; display: block; margin: 10px 0; border-radius: 6px; border: 1px solid #333;" />,
      techStack: <span class="syn-string">"Next.js, Appwrite"</span>,
      image: <span class="syn-string">"/images/healthycare.png"</span>,
      points: [
        <span class="syn-string">"Developed healthcare workflow system (appointments, patient records)."</span>,
        <span class="syn-string">"Integrated Appwrite backend services and authentication."</span>,
        <span class="syn-string">"Built structured forms using React Hook Form + Zod."</span>,
        <span class="syn-string">"Designed responsive UI using Tailwind CSS and shadcn/ui."</span>
      ],
      link: <span class="syn-string">"Source Code on GitHub"</span>
    }
  ];

  <span class="syn-keyword">return</span> (
    <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"projects-wrapper"</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;</span><span class="syn-type">header</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"projects-intro"</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>{intro.role}<span class="syn-operator">&lt;/</span><span class="syn-type">h2</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">p</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"period"</span><span class="syn-operator">&gt;</span>{intro.period}<span class="syn-operator">&lt;/</span><span class="syn-type">p</span><span class="syn-operator">&gt;</span>
        <span class="syn-operator">&lt;</span><span class="syn-type">ul</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"highlights"</span><span class="syn-operator">&gt;</span>
          {intro.highlights.map((item, index) <span class="syn-keyword">=></span> (
            <span class="syn-operator">&lt;</span><span class="syn-type">li</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{index}<span class="syn-operator">&gt;</span>{item}<span class="syn-operator">&lt;/</span><span class="syn-type">li</span><span class="syn-operator">&gt;</span>
          ))}
        <span class="syn-operator">&lt;/</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
      <span class="syn-operator">&lt;/</span><span class="syn-type">header</span><span class="syn-operator">&gt;</span>

      <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"projects-grid"</span><span class="syn-operator">&gt;</span>
        {projects.map((project, index) <span class="syn-keyword">=></span> (
          <span class="syn-operator">&lt;</span><span class="syn-type">article</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{index} <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"project-card"</span><span class="syn-operator">&gt;</span>
            <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"project-image-container"</span><span class="syn-operator">&gt;</span>
              <span class="syn-operator">&lt;</span><span class="syn-type">img</span> <span class="syn-property">src</span><span class="syn-keyword">=</span>{project.image} <span class="syn-property">alt</span><span class="syn-keyword">=</span>{project.title} <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"project-image"</span> <span class="syn-operator">/&gt;</span>
            <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>
            <span class="syn-operator">&lt;</span><span class="syn-type">div</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"project-details"</span><span class="syn-operator">&gt;</span>
              <span class="syn-operator">&lt;</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>{project.title}<span class="syn-operator">&lt;/</span><span class="syn-type">h3</span><span class="syn-operator">&gt;</span>
              <span class="syn-operator">&lt;</span><span class="syn-type">p</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"tech-stack"</span><span class="syn-operator">&gt;</span><span class="syn-operator">&lt;</span><span class="syn-type">strong</span><span class="syn-operator">&gt;</span>Tech Stack:<span class="syn-operator">&lt;/</span><span class="syn-type">strong</span><span class="syn-operator">&gt;</span> {project.techStack}<span class="syn-operator">&lt;/</span><span class="syn-type">p</span><span class="syn-operator">&gt;</span>
              <span class="syn-operator">&lt;</span><span class="syn-type">ul</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"project-points"</span><span class="syn-operator">&gt;</span>
                {project.points.map((point, idx) <span class="syn-keyword">=></span> (
                  <span class="syn-operator">&lt;</span><span class="syn-type">li</span> <span class="syn-property">key</span><span class="syn-keyword">=</span>{idx}<span class="syn-operator">&gt;</span>{point}<span class="syn-operator">&lt;/</span><span class="syn-type">li</span><span class="syn-operator">&gt;</span>
                ))}
              <span class="syn-operator">&lt;/</span><span class="syn-type">ul</span><span class="syn-operator">&gt;</span>
              <span class="syn-operator">&lt;</span><span class="syn-type">a</span> <span class="syn-property">href</span><span class="syn-keyword">=</span><span class="syn-string">"#"</span> <span class="syn-property">className</span><span class="syn-keyword">=</span><span class="syn-string">"github-link"</span><span class="syn-operator">&gt;</span>
                🔗 {project.link}
              <span class="syn-operator">&lt;/</span><span class="syn-type">a</span><span class="syn-operator">&gt;</span>
            <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>
          <span class="syn-operator">&lt;/</span><span class="syn-type">article</span><span class="syn-operator">&gt;</span>
        ))}
      <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>
    <span class="syn-operator">&lt;/</span><span class="syn-type">div</span><span class="syn-operator">&gt;</span>
  );
};

<span class="syn-keyword">export default</span> <span class="syn-type">Projects</span>;`;


export const renderAbout = () => {
  return `
    <div class="elegant-card">
      <div class="about-header">
        <div class="status-badge">Status: openToWork && openToMagic</div>
        <h1 class="elegant-title">Iryna Vyshniak</h1>
        <h2 class="elegant-subtitle">Future Full Stack Developer (almost very strong 💅)</h2>
        <p class="elegant-text">Україна 🇺🇦 — там, де сильні люди і гарний код народжуються</p>
      </div>
      
      <div class="elegant-section">
        <span class="ui-comment">// Programming is not just code — it's моя територія спокою</span>
        <span class="ui-comment">// Коли світ шумить — я пишу логіку</span>
        <span class="ui-comment">// Книги - надихають, art - заспокоює, код - захоплює</span>
        <span class="ui-comment">// І так, іноді я думаю як компонент React</span>
      </div>

      <h3 class="elegant-section-title" style="margin-top: 40px;">Soft Skills</h3>
      <ul class="elegant-list">
        <li>переживаю глибше, ніж баги в продакшені</li>
        <li>вчуся швидше, ніж падає мотивація</li>
        <li>тримаюсь навіть коли все хоче впасти</li>
      </ul>

      <h3 class="elegant-section-title">Companion</h3>
      <p class="elegant-text"><strong>Fletcher 🐾</strong>: Head of QA & emotional support department 🐾</p>
      <span class="ui-comment" style="margin-bottom: 30px;">// occasionally interrupts debugging sessions for mandatory petting</span>

      <h3 class="elegant-section-title">Future Vision</h3>
      <p class="elegant-text"><em>ambitious, трохи зухвалий і точно мій</em></p>
      <div class="elegant-tags">
        <span class="elegant-tag">become strong fullstack</span>
        <span class="elegant-tag">web + mobile products</span>
      </div>
    </div>
  `;
};

export const renderSkills = () => {
  return `
    <div class="elegant-card">
      <h1 class="elegant-title">Skills & Stack</h1>
      <h2 class="elegant-subtitle">calm outside, debugger inside 🔥</h2>

      <div class="elegant-quote">
        "Skills are not a list.<br>They’re what I actually use when things break."
      </div>

      <h3 class="elegant-section-title">My Mindset</h3>
      <ul class="elegant-list">
        <li>8+ hours per day? easily.</li>
        <li>attention to detail — навіть там, де її не шукають</li>
        <li>learning mode: always ON</li>
        <li>team player, але думаю самостійно</li>
        <li>customer-first, навіть якщо це мій власний проєкт</li>
        <li>creative problem solving > panic</li>
      </ul>

      <h3 class="elegant-section-title">Tech Stack</h3>
      
      <div class="elegant-timeline" style="margin-bottom: 20px;">
        <div class="timeline-item">
          <div class="timeline-title">Languages</div>
          <div class="elegant-tags">
            <span class="elegant-tag">HTML (structure matters)</span>
            <span class="elegant-tag">CSS (make it beautiful)</span>
            <span class="elegant-tag">JavaScript (make it work)</span>
            <span class="elegant-tag">TypeScript (make it safe)</span>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-title">Frontend</div>
          <div class="elegant-tags">
            <span class="elegant-tag">React (main weapon)</span>
            <span class="elegant-tag">Next.js (leveling up)</span>
            <span class="elegant-tag">Tailwind CSS</span>
            <span class="elegant-tag">MUI / Chakra / shadcn</span>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-title">Backend & Database</div>
          <div class="elegant-tags">
            <span class="elegant-tag">Node.js (logic lives here)</span>
            <span class="elegant-tag">Express (keep it simple)</span>
            <span class="elegant-tag">MongoDB (flexible like me)</span>
            <span class="elegant-tag">SQLite (small but solid)</span>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-title">Mobile</div>
          <div class="elegant-tags">
            <span class="elegant-tag">React Native (code without borders)</span>
            <span class="elegant-tag">Ionic (because why not)</span>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-title">DevOps & Tools</div>
          <div class="elegant-tags">
            <span class="elegant-tag">Vercel (deploy & breathe)</span>
            <span class="elegant-tag">Render</span>
            <span class="elegant-tag">Netlify</span>
            <span class="elegant-tag">Git (my memory)</span>
            <span class="elegant-tag">Postman</span>
            <span class="elegant-tag">Figma</span>
            <span class="elegant-tag">VS Code (home 🏠)</span>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-title">Extras</div>
          <div class="elegant-tags">
            <span class="elegant-tag">Socket.io (real-time things)</span>
            <span class="elegant-tag">Firebase</span>
            <span class="elegant-tag">Clerk Auth</span>
            <span class="elegant-tag">Zod & Formik</span>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const renderExperience = () => {
  return `
    <div class="elegant-card">
      <h1 class="elegant-title">Experience</h1>
      <h2 class="elegant-subtitle">Adaptation & Growth</h2>

      <div class="elegant-quote">
        "Experience is not just what you've done.<br>It's how you adapted while doing it."
      </div>

      <div class="elegant-timeline" style="margin-top: 40px;">
        <div class="timeline-item">
          <div class="timeline-meta">2022 – Present</div>
          <div class="timeline-title">Freelance Work, Part-time Roles & Volunteer Activities</div>
          <p class="timeline-desc">Structured transition period combining self-directed software development with diverse work and volunteering experience.</p>
          <ul class="elegant-list" style="margin-top: 15px;">
            <li>Performed part-time roles (tutoring, service-based work), strengthening responsibility, communication, and adaptability.</li>
            <li>Engaged in animal rescue volunteering, supporting care, coordination, and assistance activities.</li>
            <li>Maintained continuous self-learning in frontend development (React, Next.js, modern JS ecosystem).</li>
            <li>Transitioned into software engineering through hands-on project development and real implementations.</li>
          </ul>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-meta">Kyiv Region | 2016 – 2022</div>
          <div class="timeline-title">Chief Manager — VIP Residential Complex</div>
          <p class="timeline-desc">Managed operational workflows in a high-responsibility environment.</p>
          <ul class="elegant-list" style="margin-top: 15px;">
            <li>Coordinated internal processes and service operations.</li>
            <li>Ensured system stability and issue resolution.</li>
            <li>Improved operational efficiency and daily execution processes.</li>
          </ul>
        </div>

        <div class="timeline-item">
          <div class="timeline-meta">Luhansk Region | 2014 – 2016</div>
          <div class="timeline-title">School Principal — Secondary School</div>
          <p class="timeline-desc">Led full institutional operations and staff coordination.</p>
          <ul class="elegant-list" style="margin-top: 15px;">
            <li>Structured administrative workflows and planning systems.</li>
            <li>Improved organizational efficiency and execution processes.</li>
            <li>Managed institutional development and operational stability.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
};

export const renderEducation = () => {
  return `
    <div class="elegant-card">
      <h1 class="elegant-title">Education</h1>
      <h2 class="elegant-subtitle">Path: self-taught developer</h2>

      <div class="elegant-quote">
        "Education is not where I started.<br>It's how I keep going."
      </div>

      <h3 class="elegant-section-title">Sources</h3>
      <div class="elegant-tags">
        <span class="elegant-tag">Udemy</span>
        <span class="elegant-tag">YouTube</span>
        <span class="elegant-tag">freeCodeCamp</span>
        <span class="elegant-tag">official documentation (when things get serious)</span>
      </div>

      <h3 class="elegant-section-title" style="margin-top: 40px;">Method & Approach</h3>
      <span class="ui-comment">// не чекаю ідеального моменту — просто починаю</span>
      <span class="ui-comment">// вчуся через практику, а не тільки теорію</span>
      <span class="ui-comment">// якщо щось не працює — розбираюсь, поки не зрозумію</span>
      <span class="ui-comment">// кожен проєкт = новий рівень</span>
      
      <ul class="elegant-list" style="margin-top: 20px;">
        <li>learn → build → break → fix → repeat</li>
        <li>real projects over passive watching</li>
        <li>docs first, panic later 😏</li>
      </ul>

      <h3 class="elegant-section-title">Current Focus</h3>
      <ul class="elegant-list">
        <li>React (deep dive through real projects)</li>
        <li>Next.js (learning by building)</li>
        <li>React Native & Ionic (mobile direction)</li>
        <li>JavaScript deep understanding</li>
        <li>UI/UX basics (Figma + practice)</li>
        <li>debugging via Google, StackOverflow & stubbornness 😏</li>
      </ul>

      <div class="elegant-quote" style="margin-top: 40px;">
        Courses don’t make developers. Practice does.
      </div>
      <span class="ui-comment" style="margin-top: -15px; padding-left: 20px;">// still learning. not slowing down.</span>
    </div>
  `;
};

export const renderProjects = () => {
  return `
    <div class="elegant-card" style="margin-bottom: 20px;">
      <h1 class="elegant-title">Projects</h1>
      <h2 class="elegant-subtitle">Frontend / Fullstack Developer (Self-Directed)</h2>
      
      <div class="elegant-quote">
        "Talk is cheap. Show me the code."
      </div>

      <div class="timeline-meta" style="margin-bottom: 15px;">2022 – Present</div>
      <ul class="elegant-list">
        <li>Built and deployed 4+ production-style applications using React, Next.js, and modern frontend stacks.</li>
        <li>Designed scalable component-based architecture using reusable UI systems.</li>
        <li>Developed full-featured applications with authentication, CRUD operations, and dynamic routing.</li>
        <li>Integrated backend services and databases including Firebase, MongoDB, and Appwrite.</li>
        <li>Built responsive, mobile-first UI systems ensuring cross-device compatibility.</li>
      </ul>
    </div>

    <div class="elegant-grid">
      <div class="project-card">
        <div class="project-img-container">
          <img src="/images/real_estate.webp" alt="Real Estate Platform Preview" onerror="this.src='https://ik.imagekit.io/irinavn2011/RealEstate.jpg?updatedAt=1687333283510'" />
        </div>
        <div class="project-info">
          <h3 class="project-title">Real Estate Platform</h3>
          <div class="project-stack">React, Firebase, Leaflet, TomTom, Tailwind CSS</div>
          <ul class="project-points">
            <li>Built a property listing application with Firebase Firestore integration.</li>
            <li>Implemented interactive geolocation maps using Leaflet.</li>
            <li>Developed reusable UI components.</li>
          </ul>
            <a
              href="https://github.com/Iryna-Vyshniak/RealEstate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Real Estate Platform source code on GitHub"
              class="elegant-link"
              >Source Code</a
            >
        </div>
      </div>

      <div class="project-card">
        <div class="project-img-container">
          <img src="/images/littlelingo.png" alt="LittleLingo Preview" onerror="this.src='https://ik.imagekit.io/irinavn2011/littlelingo.png'" />
        </div>
        <div class="project-info">
          <h3 class="project-title">LittleLingo – Mobile Learning App</h3>
          <div class="project-stack">Ionic, React, Capacitor</div>
          <ul class="project-points">
            <li>Developed cross-platform mobile application (iOS / Android).</li>
            <li>Implemented drag-and-drop interactions using React DnD.</li>
            <li>Managed application state using Zustand.</li>
          </ul>
           <a
              href="https://github.com/Iryna-Vyshniak/LittleLingo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LittleLingo source code on GitHub"
              class="elegant-link"
              >Source Code</a
            >
        </div>
      </div>

      <div class="project-card">
        <div class="project-img-container">
          <img src="/images/events.png" alt="Events Platform Preview" onerror="this.src='https://ik.imagekit.io/irinavn2011/events.png'" />
        </div>
        <div class="project-info">
          <h3 class="project-title">Events Platform</h3>
          <div class="project-stack">Next.js 14, MongoDB, Stripe</div>
          <ul class="project-points">
            <li>Built fullstack event management platform using Next.js App Router.</li>
            <li>Integrated MongoDB + Mongoose for database modeling.</li>
            <li>Added payment processing using Stripe API.</li>
          </ul>
          <a
              href="https://github.com/Iryna-Vyshniak/next14_mern_events_platform"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Events Platform source code on GitHub"
              class="elegant-link"
              >Source Code on GitHub</a
            >
        </div>
      </div>

      <div class="project-card">
        <div class="project-img-container">
          <img src="/images/healthycare.png" alt="HealthyCare Preview" onerror="this.src=https://ik.imagekit.io/irinavn2011/healthycare.png'" />
        </div>
        <div class="project-info">
          <h3 class="project-title">HealthyCare – Patient System</h3>
          <div class="project-stack">Next.js, Appwrite</div>
          <ul class="project-points">
            <li>Developed healthcare workflow system (appointments, patient records).</li>
            <li>Integrated Appwrite backend services and authentication.</li>
            <li>Built structured forms using React Hook Form + Zod.</li>
          </ul>
          <a
              href="https://github.com/Iryna-Vyshniak/healthy-care"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View HealthyCare source code on GitHub"
              class="elegant-link"
              >Source Code</a
            >
        </div>
      </div>
    </div>
  `;
};

export const renderContacts = () => {
  return `
    <div class="elegant-card">
      <div class="about-header">
        <div class="status-badge">Mood: motivated & slightly unstoppable</div>
        <h1 class="elegant-title">Let's Connect</h1>
        <h2 class="elegant-subtitle">Status: openToWork</h2>
      </div>

      <div class="elegant-quote" style="text-align: center; border: none; padding: 0;">
        I reply faster than most APIs.<br>
        Unless I'm coding.<br>
        Then... give me a minute)
      </div>

      <div class="contact-actions">
        <a href="mailto:iryna.vyshniak@gmail.com" class="btn-link" target="_blank" rel="noopener noreferrer">Email</a>
        <a href="https://www.linkedin.com/in/iryna-vyshniak-428b25259" target="_blank" rel="noopener noreferrer" class="btn-link">LinkedIn</a>
        <a href="https://www.instagram.com/arteincode/" target="_blank" rel="noopener noreferrer" class="btn-link">Instagram</a>
        <a href="https://t.me/yaravn" target="_blank" rel="noopener noreferrer" class="btn-link">Telegram</a>
      </div>
    </div>
  `;
};