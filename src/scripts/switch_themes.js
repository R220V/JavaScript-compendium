const body = document.body;
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

// Функція перемикання теми
function switchTheme() {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('gray');
    circle.textContent = '✨';
    localStorage.setItem('theme', 'gray');
  } else if (body.classList.contains('gray')) {
    body.classList.remove('gray');
    body.classList.add('dark');
    circle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    circle.textContent = '🌞';
    localStorage.setItem('theme', 'light');
  }
}
toggle.addEventListener('click', switchTheme);

// При завантаженні сторінки — читаємо localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('light', 'gray', 'dark');
  body.classList.add(savedTheme);
  circle.textContent = savedTheme === 'light' ? '🌞' : savedTheme === 'gray' ? '✨' : '🌙';
}
