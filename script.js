const navSlide = () => {
  const menu =  document.querySelector('.menu');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  menu.addEventListener('click', () => {
    // Toggle navigation
    nav.classList.toggle('nav-active');

    // Animation for links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.5}s`;
      }  
    });

    // Menu animation
    menu.classList.toggle('toggle');
  });
}

const app = () => {
  navSlide();
}

app();












