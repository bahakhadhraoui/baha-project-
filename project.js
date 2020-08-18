alert("Enjoy the best shoes ever");
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
const navlinks = document.querySelectorAll('.nav-links li')
// Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //Animate links
    navlinks.forEach((link, index) => {
       link.style.animation=`navLinkfade 0.5s ease forwards ${index /7 + 0.3}s`
        
    });
}
navSlide() ;



    
