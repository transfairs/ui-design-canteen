const toggle = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(theme) {
  body.classList.toggle('dark-mode', theme === 'dark');
  body.classList.toggle('light-mode', theme === 'light');
  toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initial = saved || (prefersDark ? 'dark' : 'light');
applyTheme(initial);

toggle.addEventListener('click', () => {
  const current = body.classList.contains('dark-mode') ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});
