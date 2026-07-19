//=========================
// HERO SLIDER
//=========================

const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

setInterval(()=>{

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

},4000);


//=========================
// MOBILE MENU
//=========================

const menuBtn=document.querySelector(".menu-btn");

const navMenu=document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("show");

});


//=========================
// STICKY HEADER
//=========================

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>60){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});


//=========================
// SMOOTH ACTIVE LINK
//=========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let currentSection="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

currentSection=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+currentSection){

link.classList.add("active");

}

});
    });
//=========================
// CLOSE MENU AFTER CLICK
//=========================

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("show");

});

});

//=========================
// SCROLL ANIMATION
//=========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-item");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".service-card,.achievement-card,.review-card,.gallery-grid img,.about-image,.about-content"
).forEach(el=>{

observer.observe(el);

});

//=========================
// COUNTER ANIMATION
//=========================

const counters=document.querySelectorAll(".achievement-card h2");

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const update=()=>{

const increment=Math.ceil(target/80);

count+=increment;

if(count>=target){

counter.innerText=target+"+";

}else{

counter.innerText=count+"+";

requestAnimationFrame(update);

}

};

update();

});

/*=========================
PREMIUM GALLERY LIGHTBOX
=========================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const counter = document.getElementById("counter");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
function updateCounter(){
    counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
}
// Open
galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        lightboxImg.src = img.src;
updateCounter();
        lightbox.classList.add("show");

    });

});

// Close
function closeLightbox(){

    lightbox.classList.remove("show");

}

closeBtn.addEventListener("click", closeLightbox);

// Click Outside
lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});

// Next
function nextImage(){

    currentIndex++;

    if(currentIndex>=galleryImages.length){

        currentIndex=0;

    }

    lightboxImg.src=galleryImages[currentIndex].src;
updateCounter();
}

// Previous
function prevImage(){

    currentIndex--;

    if(currentIndex<0){

        currentIndex=galleryImages.length-1;

    }

    lightboxImg.src=galleryImages[currentIndex].src;
updateCounter();
}

nextBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    nextImage();

});

prevBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    prevImage();

});

// Keyboard
document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show")) return;

    if(e.key==="Escape") closeLightbox();

    if(e.key==="ArrowRight") nextImage();

    if(e.key==="ArrowLeft") prevImage();

});

//=========================
// SCROLL TO TOP
//=========================

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

document.querySelector(".call").style.opacity="1";

}else{

document.querySelector(".call").style.opacity="0.9";

}

});

//=========================
// END
//=========================
//=========================
// VIEW MORE GALLERY
//=========================

const gallery = document.querySelectorAll(".gallery-grid img");
const viewBtn = document.getElementById("viewMoreBtn");

// शुरुआत में केवल पहली 12 फोटो दिखेंगी
gallery.forEach((img,index)=>{
    if(index >= 12){
        img.classList.add("hide");
    }
});

let expanded = false;

viewBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    expanded = !expanded;

    gallery.forEach((img,index)=>{

        if(index >= 12){
            img.classList.toggle("hide", !expanded);
        }

    });

    viewBtn.textContent = expanded
        ? "View Less"
        : "View More Gallery";

});
//=========================
// BACK TO TOP
//=========================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){
        backTop.classList.add("show");
    }else{
        backTop.classList.remove("show");
    }

});

backTop.addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
//=========================
// SCROLL PROGRESS BAR
//=========================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});
//=========================
// REVIEW SLIDER
//=========================

const reviewTrack = document.querySelector(".review-track");
const reviewCards = document.querySelectorAll(".review-card");
const reviewPrev = document.querySelector(".review-prev");
const reviewNext = document.querySelector(".review-next");

let reviewIndex = 0;

function showReview(){

    reviewTrack.style.transform =
    `translateX(-${reviewIndex * 100}%)`;

}

reviewNext.addEventListener("click",()=>{

    reviewIndex++;

    if(reviewIndex >= reviewCards.length){
        reviewIndex = 0;
    }

    showReview();

});

reviewPrev.addEventListener("click",()=>{

    reviewIndex--;

    if(reviewIndex < 0){
        reviewIndex = reviewCards.length - 1;
    }

    showReview();

});

setInterval(()=>{

    reviewIndex++;

    if(reviewIndex >= reviewCards.length){
        reviewIndex = 0;
    }

    showReview();

},4000);
//=========================
// EMAILJS CONTACT FORM
//=========================

const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.disabled = true;

    emailjs.send("service_d8nzymd", "template_peaq459", {

        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        title: document.getElementById("title").value,
        message: document.getElementById("message").value

    }).then(function () {

        alert("✅ Message Sent Successfully!");

        contactForm.reset();

        sendBtn.innerHTML = "Send Message";
        sendBtn.disabled = false;

   }).catch(function (error) {

    console.log(error);

    alert(error.text || JSON.stringify(error));

    sendBtn.innerHTML = "Send Message";
    sendBtn.disabled = false;

});
});
// ===== PRELOADER =====
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 1500);
});
