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
/*=========================================
        GALLERY VIEW MORE
=========================================*/

const viewMoreBtn = document.getElementById("viewMoreBtn");
const moreGallery = document.getElementById("more-gallery");

if (viewMoreBtn && moreGallery) {

    viewMoreBtn.addEventListener("click", () => {

        if (moreGallery.style.display === "grid") {

            moreGallery.style.display = "none";
            viewMoreBtn.innerHTML = "View More Gallery";

        } else {

            moreGallery.style.display = "grid";
            viewMoreBtn.innerHTML = "View Less";

        }

    });

}

/*=========================================
        ACTIVE MENU
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
        BUTTON RIPPLE
=========================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = ".3s";

    });

});

/*=========================================
        PAGE LOADED
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("Archana Photo Studio Website Loaded Successfully");
