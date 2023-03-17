const menu = document.querySelector('#dropmenu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
// const mobileMenu = () => {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// }

// menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const projectsMenu = document.querySelector('#projects-page');
    const skillsMenu = document.querySelector('#skills-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1550) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        projectsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        skillsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3200) {
        skillsMenu.classList.add('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    }
    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
// const hideMobileMenu = () => {
//     const menuBars = document.querySelector('.is-active');
//     if (window.innerWidth <= 768 && menuBars) {
//         menu.classList.toggle('is-active');
//         menuLinks.classList.remove('active');
//     }
// };

// menuLinks.addEventListener('click', hideMobileMenu);
// navLogo.addEventListener('click', hideMobileMenu);

// Dark/Light mode toggle button

// const toggleBtn = document.getElementById('toggle-btn');
// const navbar = document.querySelector('.navbar');
// function changeMode(){
//     toggleBtn.classList.toggle('toggle-btn--light');
//     navbar.classList.toggle('light-mode');
// };

// toggleBtn.addEventListener('click', changeMode);

$(document).ready(function() {
    projectLink();
});

function projectLink() {
    $('#crmAziendale').on('click', function(){
        window.location.href = "https://www.linkedin.com/posts/serena-carpino-a52327235_frontenddevelopment-activity-6920345041026600960-H8hB?utm_source=linkedin_share&utm_medium=member_desktop_web";
    });
    $('#moviesApp').on('click', function(){
        window.location.href = "https://github.com/scarpino92/FE07B_progetto_sett12";
    });
    $('#appCarrelloProdotti').on('click', function() {
        window.location.href = "https://github.com/scarpino92/FE07B_progetto_sett11";
    });
    $('#webPageAzienda').on('click', function(){
        window.location.href = "https://github.com/scarpino92/WebPage-BS";
    })
}
