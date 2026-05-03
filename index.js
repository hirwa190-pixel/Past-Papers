document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
