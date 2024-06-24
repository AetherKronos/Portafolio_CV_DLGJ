/*=========Icono de navegación========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*=========Activación de Scroll========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

            });
        };
    });
    /*=========Barra da navegación========*/
    let header = document.querySekector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*=========Remover el ícono y barra cuando se clickee========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*=========Scroll reveal========*/
ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('home-img, .services-container, .portfolio-box, .contact-form',{origin: 'bottom'});
ScrollReveal().reveal('home-content h1, .about-img ',{origin: 'left'});
ScrollReveal().reveal('home-content p, .about-cotent ',{origin: 'right'});

/*=========Escritura========*/
const typed = new Typed('.multiple-text', {
    strings: ['Ingeniero en TI', 'Desarrollador Frontend', 'Ingeniero en Telecomunicaciones', 'Community Manager', 'Diseñador e Ilustrador Digital'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*=======Descargar CV=======*/
document.getElementById('downloadCV').addEventListener('click', function(event){
    event.preventDefault(); //Previene el comportamiento default del enlace

    const link = document.createElement('a');
    link.href ='DIEGO LADRÓN DE GUEVARA JUÁREZ CV ES.pdf';
    link.download = 'CV_Diego_LadrónDeGuevara_Juárez';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});