/* chatbot.js — Portfolio Chatbot (HW2: DOM + event handling)
   Question bank: array of objects
   Dynamic DOM updates via document.createElement + appendChild
   Form submit event handling
*/

"use strict";

// ==============================
// QUESTION BANK (array of objects)
// ==============================
const questionBank = [
  {
    keywords: ["who", "alex", "about", "yourself"],
    answer: "Bilal Chaouch is a second-year Artificial Intelligence student at the West University of Timișoara (UVT). He specialises in Artificial Intelligence — building accessible, well-crafted web interfaces."
  },
  {
    keywords: ["skill", "know", "good at", "technology", "tech", "top"],
    answer: "Bilal's top skills include: HTML5 & CSS3 (9/10), Figma (8/10), Git & GitHub (8/10), JavaScript ES6+ (7/10), and Python (6/10). He's also passionate about web accessibility and WCAG standards."
  },
  {
    keywords: ["project", "work", "portfolio", "built", "made"],
    answer: "Bilal's key projects include: a Personal Portfolio (HTML/CSS/JS), an E-Commerce Redesign (boosted conversions +34%), the CSS Utility Kit (open-source, v1.2), and a Study Sprint Planner. See the Projects page for the full list!"
  },
  {
    keywords: ["contact", "reach", "email", "hire", "get in touch"],
    answer: "You can reach Bilal at bilal.chaouch11@e-uvt.ro, or use the Contact page to send a message. He's open to freelance projects, internships, and collaborations."
  },
  {
    keywords: ["education", "study", "university", "uvt", "degree", "school"],
    answer: "Bilal is studying for a BSc in Computer Science at the West University of Timișoara (UVT), currently in Year 2. He completed his Baccalaureate at Colegiul Național 'C.D. Loga' in Timișoara with a 9.60 average."
  },
  {
    keywords: ["internship", "experience", "work", "job"],
    answer: "Bilal completed a Frontend Internship at StartupRO (Cluj-Napoca) in Summer 2025, where he built responsive landing pages and maintained the company's Figma design system."
  },
  {
    keywords: ["figma", "design", "ui", "ux"],
    answer: "Bilal uses Figma for wireframing, UI design, and design tokens. He's familiar with reusable components, auto-layout, and exporting CSS. Rating: 8/10."
  },
  {
    keywords: ["github", "repository", "repo", "code", "open source"],
    answer: "You can find Bilal's open-source work at github.com/bilalchaouch — including the CSS Utility Kit and this portfolio project."
  },
  {
    keywords: ["hello", "hi", "hey", "howdy", "greetings"],
    answer: "Hello! 👋 Great to meet you. I'm Bilal's portfolio assistant. Ask me about his skills, projects, education, or how to contact him!"
  },
  {
    keywords: ["thank", "thanks", "great", "awesome", "nice"],
    answer: "You're welcome! 😊 Is there anything else you'd like to know about Bilal?"
  }
];

// ==============================
// FALLBACK RESPONSES
// ==============================
const fallbacks = [
  "Hmm, I'm not sure about that one. Try asking about Bilal's skills, projects, education, or contact details!",
  "I don't have that info handy — but you could check the About or Projects pages for more details.",
  "That's a bit outside my knowledge! Try: 'What are your skills?' or 'Tell me about your projects'."
];

let fallbackIndex = 0;

// ==============================
// HELPER: find a matching answer
// ==============================
function getAnswer(userInput) {
  const lower = userInput.toLowerCase();

  for (const item of questionBank) {
    const match = item.keywords.some(kw => lower.includes(kw));
    if (match) return item.answer;
  }

  // Rotate fallbacks
  const response = fallbacks[fallbackIndex % fallbacks.length];
  fallbackIndex++;
  return response;
}

// ==============================
// DOM HELPERS
// ==============================
const chatLog = document.getElementById("chat-log");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

function appendMessage(text, role) {
  const msg = document.createElement("div");
  msg.classList.add("chat-msg", role);
  msg.textContent = text;
  chatLog.appendChild(msg);
  // Scroll to bottom
  chatLog.scrollTop = chatLog.scrollHeight;
}

function appendThinking() {
  const msg = document.createElement("div");
  msg.classList.add("chat-msg", "bot", "thinking");
  msg.textContent = "Thinking…";
  msg.id = "thinking-indicator";
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
  return msg;
}

function removeThinking() {
  const el = document.getElementById("thinking-indicator");
  if (el) el.remove();
}

// ==============================
// HANDLE SUBMIT
// ==============================
function handleUserMessage(text) {
  if (!text.trim()) return;

  appendMessage(text, "user");
  chatInput.value = "";

  // Simulate a short delay for "thinking"
  const indicator = appendThinking();

  setTimeout(() => {
    removeThinking();
    const answer = getAnswer(text);
    appendMessage(answer, "bot");
  }, 600);
}

// Form submit event
chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  handleUserMessage(chatInput.value.trim());
});

// Suggestion buttons — event delegation
document.querySelectorAll(".suggestion-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const question = this.getAttribute("data-q");
    chatInput.value = question;
    handleUserMessage(question);
  });
});
