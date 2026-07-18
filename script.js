/*=========================================
        HERO SLIDER
=========================================*/

const heroSlider = new Swiper(".heroSlider", {
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=========================================
        MOBILE MENU
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

/*=========================================
        CLOSE MENU
=========================================*/

document.querySelectorAll(".nav-menu a").forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});

/*=========================================
        STICKY HEADER
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});
