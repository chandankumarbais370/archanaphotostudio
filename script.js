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

//=========================
// GALLERY CLICK EFFECT
//=========================

const gallery=document.querySelectorAll(".gallery-grid img");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="15px";

overlay.appendChild(image);

overlay.onclick=()=>{

overlay.remove();

};

document.body.appendChild(overlay);

});

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
});
