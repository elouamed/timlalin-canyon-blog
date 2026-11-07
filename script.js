const topbar = document.querySelector('.topbar');
const toggleButton = document.querySelector('.nav-toggle');
const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isOpen = topbar.classList.toggle('nav-open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const form = document.querySelector('.newsletter-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    const input = form.querySelector('input');

    if (button) {
      const original = button.textContent;
      button.textContent = 'Subscribed';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = original;
        button.disabled = false;
        if (input) input.value = '';
      }, 1800);
    }
  });
}
