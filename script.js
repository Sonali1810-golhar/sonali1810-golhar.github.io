const html = document.documentElement;
const navWrap = document.querySelector('.nav-wrap');
const progress = document.getElementById('progress');
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

const savedTheme = localStorage.getItem('sonali-theme');
if (savedTheme === 'light') html.classList.add('light');

themeToggle.addEventListener('click', () => {
  html.classList.toggle('light');
  localStorage.setItem('sonali-theme', html.classList.contains('light') ? 'light' : 'dark');
  themeToggle.textContent = html.classList.contains('light') ? '☾' : '☼';
});
themeToggle.textContent = html.classList.contains('light') ? '☾' : '☼';

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...navLinks.querySelectorAll('a')];

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max ? (scrollTop / max) * 100 : 0}%`;
  navWrap.classList.toggle('scrolled', scrollTop > 20);
  const current = sections.reduce((active, section) => {
    return scrollTop + 140 >= section.offsetTop ? section.id : active;
  }, 'home');
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}
window.addEventListener('scroll', updateScrollUI, {passive:true});
updateScrollUI();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.arch-node').forEach(node => {
  node.addEventListener('mouseenter', () => {
    document.querySelectorAll('.arch-node').forEach(n => n.classList.remove('active'));
    node.classList.add('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
