function handleScroll() {
    const buttons = document.querySelectorAll('.btn-primary, button, input[type="submit"], input[type="button"]');
    const body = document.body;
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a');
    if (window.scrollY > 40) {
      buttons.forEach(btn => btn.classList.add('scrolled'));
      body.classList.add('scrolled');
      header.classList.add('scrolled');
      navLinks.forEach(link => link.classList.add('scrolled'));
    } else {
      buttons.forEach(btn => btn.classList.remove('scrolled'));
      body.classList.remove('scrolled');
      header.classList.remove('scrolled');
      navLinks.forEach(link => link.classList.remove('scrolled'));
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('DOMContentLoaded', handleScroll);