$(document).ready(function(){
    const date = new Date();
    let message="";
    if(date.getHours()<12){
        message="Good Morning";
    }
    if(date.getHours()>=12){
        message="Good Afternoon";
    }
    if(date.getHours()>=17){
        message="Good Everning";
    }
    $('#hey').empty().append(message+" It's Me");
    console.log(date.getHours());
});
/* scroll section avtive link */
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top>= offset && top < offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('action');
                document.querySelector('header nav a[href*=' + id +']').classList.add('action');
            });
        };
    });
};
/* scroll reveal */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .service-content, .portfolio-content-box', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});
