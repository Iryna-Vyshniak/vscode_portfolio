// scripts/components/preview.js
import { animate, stagger } from 'motion';

import { renderAbout, renderExperience, renderEducation, renderSkills, renderProjects, renderContacts } from '../data';

export const renderPreview = (filename) => {
  let content = '';

  switch (filename) {
    case 'About.jsx':
      content = renderAbout();
      break;
    case 'Experience.jsx':
      content = renderExperience();
      break;
    case 'Education.jsx':
      content = renderEducation();
      break;
    case 'Skills.jsx':
      content = renderSkills();
      break;
    case 'Projects.jsx':
      content = renderProjects();
      break;
    case 'Contacts.jsx':
      content = renderContacts();
      break;
    default:
      content = `<div class="elegant-card"><p class="elegant-text">Hmm... I'm working on it)</p></div>`;
  }

  return `
    <div class="preview-container">
      <!-- Cinematic atmosphere — fully decorative, invisible to screen readers -->
      <div class="preview-atmosphere" aria-hidden="true">
        <!-- Layer 0: background fog -->
        <div class="atm-fog atm-fog--bg"></div>

        <!-- Layer 1: god rays from above -->
        <div class="atm-god-rays"></div>

        <!-- Layer 2: architectural word -->
        <div class="atm-word-wrap">
          <span class="atm-word">PORTFOLIO</span>
        </div>


        <!-- Layer 4: center ambient fog -->
        <div class="atm-fog atm-fog--center"></div>
      </div>

      <div class="preview-scroll-area">
        <div class="elegant-content-wrapper">
          ${content}
        </div>
      </div>
    </div>
  `;
};

export const initPreviewAnimations = () => {
  const EASE = [0.16, 1, 0.3, 1];

  // ── Phase 1: Main card fades up from slight offset
  const cards = document.querySelectorAll('.elegant-card');
  if (cards.length > 0) {
    animate(
      cards,
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.7, ease: EASE }
    );
  }

  // ── Phase 2: Section titles sweep in from left with slight fade
  const titles = document.querySelectorAll('.elegant-section-title');
  if (titles.length > 0) {
    animate(
      titles,
      { opacity: [0, 1], x: [-8, 0] },
      {
        duration: 0.6,
        delay: stagger(0.08, { startDelay: 0.25 }),
        ease: EASE
      }
    );
  }

  // ── Phase 3: Timeline items — each slides up subtly in sequence
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timelineItems.length > 0) {
    timelineItems.forEach(el => { el.style.opacity = '0'; });
    animate(
      timelineItems,
      { opacity: [0, 1], y: [10, 0] },
      {
        duration: 0.55,
        delay: stagger(0.07, { startDelay: 0.35 }),
        ease: EASE
      }
    );
  }

  // ── Phase 4: List items — quick, light reveal
  const listItems = document.querySelectorAll('.elegant-list li, .project-points li');
  if (listItems.length > 0) {
    listItems.forEach(el => { el.style.opacity = '0'; });
    animate(
      listItems,
      { opacity: [0, 1], x: [-6, 0] },
      {
        duration: 0.45,
        delay: stagger(0.04, { startDelay: 0.4 }),
        ease: EASE
      }
    );
  }

  // ── Phase 5: Project cards — staggered rise from below
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length > 0) {
    projectCards.forEach(el => { el.style.opacity = '0'; });
    animate(
      projectCards,
      { opacity: [0, 1], y: [24, 0] },
      {
        duration: 0.7,
        delay: stagger(0.1, { startDelay: 0.2 }),
        ease: EASE
      }
    );
  }

  // ── Phase 6: Tags — last, quickest — barely perceptible
  const tags = document.querySelectorAll('.elegant-tag');
  if (tags.length > 0) {
    tags.forEach(el => { el.style.opacity = '0'; });
    animate(
      tags,
      { opacity: [0, 1] },
      {
        duration: 0.4,
        delay: stagger(0.025, { startDelay: 0.5 }),
        ease: 'ease-out'
      }
    );
  }


};

