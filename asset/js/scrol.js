
// Buat scroll otomatis kalo mengklik menu navbar
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const sectionPosition = section.offsetTop - navbarHeight;
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  }


  
/* 
Fungsi navbar tetap

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  }); 
  
  */