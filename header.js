const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');

  menuIcon.addEventListener('click', (event) => {
    event.stopPropagation(); 
    navLinks.classList.toggle('active'); 
  });

  navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
      navLinks.classList.remove('active'); 
    }
  });